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
      categoria: "Cacerolas",
      nombre: "Cacerola cuadrada 29",
      precio: 13000,
      foto: img1,
      stock: 10,
    },
    {
      id: '2',
      categoria: "Cacerolas",
      nombre: "Cacerola cuadrada 24",
      precio: 13000,
      foto: img2,
      stock: 10,
    },
    {
      id: '3',
      categoria: "Cacerolas",
      nombre: "Cacerola 20",
      precio: 13000,
      foto: img3,
      stock: 10,
    },
    {
      id: '4',
      categoria: "Cacerolas",
      nombre: "Cacerola 24",
      precio: 13000,
      foto: img4,
      stock: 10,
    },
    {
      id: '5',
      categoria: "Cacerolas",
      nombre: "Cacerola 28",
      precio: 13000,
      foto: img5,
      stock: 10,
    },
    {
      id: '6',
      categoria: "Cacerolas",
      nombre: "Cacerola 18 con mango",
      precio: 13000,
      foto: img6,
      stock: 10,
    },
    {
      id: '7',
      categoria: "Sartenes",
      nombre: "Sarten 18",
      precio: 13000,
      foto: img7,
      stock: 10,
    },
    {
      id: '8',
      categoria: "Sartenes",
      nombre: "Sarten 24",
      precio: 13000,
      foto: img8,
      stock: 10,
    },
    {
      id: '9',
      categoria: "Sartenes",
      nombre: "Sarten 31 con asas",
      precio: 13000,
      foto: img9,
      stock: 10,
    },
    {
      id: '10',
      categoria: "Sartenes",
      nombre: "Sarten 20",
      precio: 13000,
      foto: img10,
      stock: 10,
    },
    {
      id: '11',
      categoria: "Sartenes",
      nombre: "Sarten 28",
      precio: 13000,
      foto: img11,
      stock: 10,
    },
    {
      id: '12',
      categoria: "Sartenes",
      nombre: "Sarten chef sensor",
      precio: 13000,
      foto: img12,
      stock: 10,
    },
    {
      id: '13',
      categoria: "Sartenes",
      nombre: "Wok sensor",
      precio: 13000,
      foto: img13,
      stock: 10,
    },
    {
      id: '14',
      categoria: "Fuentes",
      nombre: "Fuente rectangular 30",
      precio: 13000,
      foto: img14,
      stock: 10,
    },
    {
      id: '15',
      categoria: "Biferas",
      nombre: "Bifera con asas",
      precio: 13000,
      foto: img15,
      stock: 10,
    },
    { id: '16', 
      categoria: "Flip", 
      nombre: "Flip", 
      precio: 13000, 
      foto: img16,
      stock: 10, 
    },
    {
      id: '17',
      categoria: "Complementos",
      nombre: "Budineras terra x2",
      precio: 13000,
      foto: img17,
      stock: 10,
    },
    {
      id: '18',
      categoria: "Complementos",
      nombre: "Savarin 18 terra",
      precio: 13000,
      foto: img18,
      stock: 10,
    },
    {
      id: '19',
      categoria: "Complementos",
      nombre: "Savarin 24 terra",
      precio: 13000,
      foto: img19,
      stock: 10,
    },
    {
      id: '20',
      categoria: "Complementos",
      nombre: "Savarin 28 terra",
      precio: 13000,
      foto: img20,
      stock: 10,
    },
    {
      id: '21',
      categoria: "Complementos",
      nombre: "Cestillo freidor",
      precio: 13000,
      foto: img21,
      stock: 10,
    },
    {
      id: '22',
      categoria: "Complementos",
      nombre: "Vaporizador con tapa",
      precio: 13000,
      foto: img22,
      stock: 10,
    },
    {
      id: '23',
      categoria: "Complementos",
      nombre: "Savarin 24 terra",
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