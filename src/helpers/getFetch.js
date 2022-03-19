import img1 from "../img/aquacacerolacuadrada30cm.jpg"
import img2 from "../img/aquacacerola24cm.jpg"
import img3 from "../img/Cacerola Aqua 20cm.jpg"
import img4 from "../img/aquacacerola24cm.jpg"
import img5 from "../img/Cacerola 28 Aqua.jpg"
import img6 from "../img/aquacacerolaconmango18cm.jpg"
import img7 from "../img/Sarten18Aquacontapadevidrio.jpg"
import img8 from "../img/aquasarten24cm.jpg"
import img9 from "../img/sartenconasas31cm.jpg"
import img10 from "../img/Sartén aqua 20cm.jpg"
import img11 from "../img/Sarten 28 Aqua.jpg"
import img12 from "../img/chefsarten.jpg"
import img13 from "../img/chefwok.jpg"
import img14 from "../img/FuenteRectangular30 Aqua.jpg"
import img15 from "../img/aquabiferaconasascm.jpg"
import img16 from "../img/aquaflip.jpg"
import img17 from "../img/setdebudineras2.jpg"
import img18 from "../img/Savarin 18 rosa.jpg"
import img19 from "../img/terrasavarin24cm2.jpg"
import img20 from "../img/terrasavarin28cm2.jpg"
import img21 from "../img/freidorparacacerola2.jpg"
import img22 from "../img/vaporizadorcontapa.jpg"
import img23 from "../img/terrasavarin24cm2.jpg"

const productos = [
    {
      id: '1',
      categoria: "cacerolas",
      nombre: "cacerola cuadrada 29",
      precio: 13000,
      foto: img1,
      stock: 10,
    },
    {
      id: '2',
      categoria: "cacerolas",
      nombre: "cacerola cuadrada 24",
      precio: 13000,
      foto: img2,
      stock: 10,
    },
    {
      id: '3',
      categoria: "cacerolas",
      nombre: "cacerola 20",
      precio: 13000,
      foto: img3,
      stock: 10,
    },
    {
      id: '4',
      categoria: "cacerolas",
      nombre: "cacerola 24",
      precio: 13000,
      foto: img4,
      stock: 10,
    },
    {
      id: '5',
      categoria: "cacerolas",
      nombre: "cacerola 28",
      precio: 13000,
      foto: img5,
      stock: 10,
    },
    {
      id: '6',
      categoria: "cacerolas",
      nombre: "cacerola 18 con mango",
      precio: 13000,
      foto: img6,
      stock: 10,
    },
    {
      id: '7',
      categoria: "sartenes",
      nombre: "sarten 18",
      precio: 13000,
      foto: img7,
      stock: 10,
    },
    {
      id: '8',
      categoria: "sartenes",
      nombre: "sarten 24",
      precio: 13000,
      foto: img8,
      stock: 10,
    },
    {
      id: '9',
      categoria: "sartenes",
      nombre: "sarten 31 con asas",
      precio: 13000,
      foto: img9,
      stock: 10,
    },
    {
      id: '10',
      categoria: "sartenes",
      nombre: "sarten 20",
      precio: 13000,
      foto: img10,
      stock: 10,
    },
    {
      id: '11',
      categoria: "sartenes",
      nombre: "sarten 28",
      precio: 13000,
      foto: img11,
      stock: 10,
    },
    {
      id: '12',
      categoria: "sartenes",
      nombre: "sarten chef sensor",
      precio: 13000,
      foto: img12,
      stock: 10,
    },
    {
      id: '13',
      categoria: "sartenes",
      nombre: "wok sensor",
      precio: 13000,
      foto: img13,
      stock: 10,
    },
    {
      id: '14',
      categoria: "fuentes",
      nombre: "fuente rectangular 30",
      precio: 13000,
      foto: img14,
      stock: 10,
    },
    {
      id: '15',
      categoria: "biferas",
      nombre: "bifera con asas",
      precio: 13000,
      foto: img15,
      stock: 10,
    },
    { id: '16', 
      categoria: "flip", 
      nombre: "flip", 
      precio: 13000, 
      foto: img16,
      stock: 10, 
    },
    {
      id: '17',
      categoria: "complementos",
      nombre: "budineras terra x2",
      precio: 13000,
      foto: img17,
      stock: 10,
    },
    {
      id: '18',
      categoria: "complementos",
      nombre: "savarin 18 terra",
      precio: 13000,
      foto: img18,
      stock: 10,
    },
    {
      id: '19',
      categoria: "complementos",
      nombre: "savarin 24 terra",
      precio: 13000,
      foto: img19,
      stock: 10,
    },
    {
      id: '20',
      categoria: "complementos",
      nombre: "savarin 28 terra",
      precio: 13000,
      foto: img20,
      stock: 10,
    },
    {
      id: '21',
      categoria: "complementos",
      nombre: "cestillo freidor",
      precio: 13000,
      foto: img21,
      stock: 10,
    },
    {
      id: '22',
      categoria: "complementos",
      nombre: "vaporizador con tapa",
      precio: 13000,
      foto: img22,
      stock: 10,
    },
    {
      id: '23',
      categoria: "complementos",
      nombre: "savarin 24 terra",
      precio: 13000,
      foto: img23,
      stock: 10,
    },
  ];
  
 export const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("400 - not found");
    }
  });