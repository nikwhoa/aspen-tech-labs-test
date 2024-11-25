import { JSDOM } from "jsdom";
import dotenv from "dotenv";
import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

dotenv.config();

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

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = "Sheet1!A1";

async function postToGoogleSheets(
  data: { name: string; url: string; employees: number }[]
) {
  try {
    const auth = new GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const values = data.map((item) => [item.name, item.url, item.employees]);

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      requestBody: {
        values: [["Name", "URL", "Employees"], ...values],
      },
    });

    console.log("Data successfully posted to Google Sheets");
  } catch (error) {
    console.error("Error posting to Google Sheets:", error);
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

/* Getting number of employees from each category */

const getEmployees = createObjet
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
    postToGoogleSheets(el);
  });
