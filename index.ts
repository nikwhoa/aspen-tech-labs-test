import { JSDOM } from "jsdom";

class Category {
  name: string = "";
  url: string = "";
  employees: number = 0;

  constructor(name: string, url: string, employees: number) {
    this.name = name;
    this.url = url;
    this.employees = employees;
  }

  static calculateTopCategory(
    arr: { name: string; url: string; employees: number }[]
  ) {
    const topTen = arr
      .sort((a, b) => {
        return a.employees - b.employees;
      })
      .reverse()
      .filter((el, i) => {
        while (i < 10) {
          return el;
        }
      });

    return topTen;
  }
}

const url: string = "https://formacion.infojobs.net/";
const selector: string = "div.home-search-results-items > a";

/* Getting urls and create an objet with'em */

const createObjet = JSDOM.fromURL(url)
  .then((dom) => {
    return dom.window.document.querySelectorAll(selector);
  })
  .then((elements) => {
    let elementsToPass: Category[] = [];

    elements.forEach((el) => {
      elementsToPass.push({
        name: (el as HTMLAnchorElement).textContent?.trim() ?? "",
        url: (el as HTMLAnchorElement).href,
        employees: 0,
      });
    });

    return elementsToPass;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });

createObjet
  .then((el) => {
    return Promise.all(
      el.map((el) => {
        return JSDOM.fromURL(el.url).then((dom) => {
          return {
            name: el.name,
            url: el.url,
            employees: Number.parseInt(
              dom.window.document
                .querySelector("p.active-offers-stat")
                ?.textContent?.trim() ?? ""
            ),
          };
        });
      })
    );
  })
  .then((el) => {
    return Category.calculateTopCategory(el);
  })
  .then((el) => {
    console.log(el);
  });
