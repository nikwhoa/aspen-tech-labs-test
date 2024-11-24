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

  //   calculateTopCategory(name: string, employees: [number]) {
  //     return
  //   }
}

const url: string = "https://formacion.infojobs.net/";
const selector: string = "div.home-search-results-items > a";

let categories: Category[] | [{}] = [];

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

// createObjet.then((el) => {
//   let a: Category[] = [];
//   //   console.log(el);
//   el.forEach((el) => {
//     a.push(el);
//   });
//   //   console.log(a);

//   //   a.push({
//   //       name: el.name,
//   //       // @ts-ignore
//   //     // @ts-ignore
//   //     url: el.url,
//   //     employees: 0,
//   //   });

//   a.forEach((elem, index) => {
//     JSDOM.fromURL(elem.url)
//       .then((dom) => {
//         return dom.window.document.querySelector("p.active-offers-stat");
//       })
//       .then((el) => {
//         a[index]["employees"] = Number.parseInt(el?.textContent ?? "");
//         // return Number.parseInt(el?.textContent ?? "");
//         // return a;
//         console.log(a);
//       });
//     //   .then((cat) => console.log(cat));
//   });

//   // console.log(a);
// });
