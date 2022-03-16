
const productos = [
    {
      id: 1,
      categoria: "cacerolas",
      nombre: "cacerola cuadrada 29",
      precio: 13000,
      foto: './img/aquacacerolacuadrada30cm.jpg',
    },
    {
      id: 2,
      categoria: "cacerolas",
      nombre: "cacerola cuadrada 24",
      precio: 13000,
      foto: "",
    },
    {
      id: 3,
      categoria: "cacerolas",
      nombre: "cacerola 20",
      precio: 13000,
      foto: "",
    },
    {
      id: 4,
      categoria: "cacerolas",
      nombre: "cacerola 24",
      precio: 13000,
      foto: "",
    },
    {
      id: 5,
      categoria: "cacerolas",
      nombre: "cacerola 28",
      precio: 13000,
      foto: "",
    },
    {
      id: 6,
      categoria: "cacerolas",
      nombre: "cacerola 18 con mango",
      precio: 13000,
      foto: "",
    },
    {
      id: 7,
      categoria: "sartenes",
      nombre: "sarten 18",
      precio: 13000,
      foto: "",
    },
    {
      id: 8,
      categoria: "sartenes",
      nombre: "sarten 24",
      precio: 13000,
      foto: "",
    },
    {
      id: 9,
      categoria: "sartenes",
      nombre: "sarten 31 con asas",
      precio: 13000,
      foto: "",
    },
    {
      id: 10,
      categoria: "sartenes",
      nombre: "sarten 20",
      precio: 13000,
      foto: "",
    },
    {
      id: 11,
      categoria: "sartenes",
      nombre: "sarten 28",
      precio: 13000,
      foto: "",
    },
    {
      id: 12,
      categoria: "sartenes",
      nombre: "sarten chef sensor",
      precio: 13000,
      foto: "",
    },
    {
      id: 13,
      categoria: "sartenes",
      nombre: "wok sensor",
      precio: 13000,
      foto: "",
    },
    {
      id: 14,
      categoria: "fuentes",
      nombre: "fuente rectangular 30",
      precio: 13000,
      foto: "",
    },
    {
      id: 15,
      categoria: "biferas",
      nombre: "bifera con asas",
      precio: 13000,
      foto: "",
    },
    { id: 16, categoria: "flip", nombre: "flip", precio: 13000, foto: "" },
    {
      id: 17,
      categoria: "complementos",
      nombre: "budineras terra x2",
      precio: 13000,
      foto: "",
    },
    {
      id: 18,
      categoria: "complementos",
      nombre: "savarin 18 terra",
      precio: 13000,
      foto: "",
    },
    {
      id: 19,
      categoria: "complementos",
      nombre: "savarin 24 terra",
      precio: 13000,
      foto: "",
    },
    {
      id: 20,
      categoria: "complementos",
      nombre: "savarin 28 terra",
      precio: 13000,
      foto: "",
    },
    {
      id: 21,
      categoria: "complementos",
      nombre: "cestillo freidor",
      precio: 13000,
      foto: "",
    },
    {
      id: 22,
      categoria: "complementos",
      nombre: "vaporizador con tapa",
      precio: 13000,
      foto: "",
    },
    {
      id: 23,
      categoria: "complementos",
      nombre: "savarin 24 terra",
      precio: 13000,
      foto: "",
    },
  ];
  
 export const itemList = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("400 - not found");
    }
  });