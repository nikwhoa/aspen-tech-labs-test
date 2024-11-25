const data = [
  {
    name: "Administración de empresas",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-administracion-empresas-s-1.htm",
    employees: 4253,
  },
  {
    name: "Administración Pública",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-administracion-publica-s-2.htm",
    employees: 190,
  },
  {
    name: "Atención a clientes",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-atencion-clientes-s-3.htm",
    employees: 3215,
  },
  {
    name: "Calidad, producción e I+D",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-calidad-produccion-e-i-d-s-4.htm",
    employees: 2553,
  },
  {
    name: "Comercial y ventas",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-comercial-ventas-s-5.htm",
    employees: 7027,
  },
  {
    name: "Compras, logística y almacén",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-compras-logistica-almacen-s-6.htm",
    employees: 3689,
  },
  {
    name: "Diseño y artes gráficas",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-diseno-artes-graficas-s-7.htm",
    employees: 337,
  },
  {
    name: "Educación y formación",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-educacion-formacion-s-8.htm",
    employees: 878,
  },
  {
    name: "Finanzas y banca",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-finanzas-banca-s-9.htm",
    employees: 475,
  },
  {
    name: "Informática y telecomunicaciones",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-informatica-telecomunicaciones-s-10.htm",
    employees: 3915,
  },
  {
    name: "Ingenieros y técnicos",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-ingenieros-tecnicos-s-11.htm",
    employees: 5444,
  },
  {
    name: "Inmobiliario y construcción",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-inmobiliario-construccion-s-12.htm",
    employees: 2009,
  },
  {
    name: "Legal",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-legal-s-13.htm",
    employees: 425,
  },
  {
    name: "Marketing y comunicación",
    url: "https://formacion.infojobs.net/estudiar-para-trabajar-marketing-comunicacion-s-14.htm",
    employees: 746,
  },
];

const sortedData = data.sort((a, b) => {
    return a.employees - b.employees
}).reverse()

const topFive = sortedData.filter((el, i) => {
    while (i < 5) {
        return el
    }
})

console.log(topFive);


// const a = [100, 25, 53, 34, 55, 66];

// /* 
//     1. sort array
//     [ 100, 66, 55, 53, 34, 25 ]
//  */
// const sortedArray = a.sort((a, b) => a - b).reverse();
// /* 
//     2. just take first three numbers from the sortedArray
//     [ 100, 66, 55 ]
//  */
// const topThreeNubmers = sortedArray.filter((el: any, i: any) => {
//   while (i < 3) {
//     return el;
//   }
// });

// console.log(topThreeNubmers);
