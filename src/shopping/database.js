import images from "../images/images.jpg";
import images1 from "../images/images1.jpg"
import image2 from "../images/image2.jpg";

import laptop from "../images/laptop2.jpg";
import laptop4 from "../images/laptop4.jpg"
import laptop5 from "../images/laptop5.jpg";
import laptop6 from "../images/laptop6.jpg"
import laptop1 from "../images/laptop1.jpg";
import laptop2 from "../images/laptop2.jpg"


const products=[
    {
        id:1,
        catagory : "Laptop",
        name:"Toshiba Laptop",
        price:500,
        image:laptop1

    },
    {
        id:2,
        catagory : "Laptop",
        name:"Samsung Laptop",
        price:5000,
        image: laptop

    },
    {
        id:3,
        catagory : "Laptop",
        name:"Apple Laptop",
        price:500,

        image: laptop2


    },
    {
        id:4,
        catagory : "Mobile",
        name:"Toshiba Mob",
        price:500,

        image: image2

    },
    {
        id:5,
        catagory : "laptop",
        name:"Toshiba Laptop",
        price:500,

        image: laptop4

    },
    {
        id:6,
        catagory : "laptop",
        name:"acer Laptop",
        price:500,

        image: laptop5


    },
    {
        id:7,
        catagory : "Mobile",
        name:"acer Mobile",
        price:500,

        image: images1


    },
    {
        id:8,
        catagory : "laptop",
        name:"Toshiba Laptop",
        price:500,

        image: laptop6


    },
    {
        id:9,
        catagory : "Mobile",
        name:"electro",
        price:500,

        image: images


    }

]
export const getProductByID=(id)=>{
    return products.find(product=>product.id== id)
}

export default products;