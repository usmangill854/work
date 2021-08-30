import Card_Style from "./Card";
import {useEffect, useState} from "react";
// import products from "./database";
const MappingCard=()=>{
    const[products,setProduct]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/prod",{method:"Get"})
            .then(recieved=>recieved.json())
            .then(recieved=>{
                 setProduct (recieved.prod)
                 })
            .catch(err=>console.log(err))
    },[]
)






    // const[products,setProducts]=useState([])
    // useEffect(()=>{
    //     fetch( "http://localhost:5000/api/prod",{method:"GET"})
    //         .then(recieved=>recieved.json())
    //         .then(recieved=>{
    //             setProducts(recieved.prod) }
    //          )
    //         .catch(err=>console.log(err))
    // },[]
    // )

    return<>{
        console.log("sss" + products)
    }
      <div style={{marginTop:"20px"}} className="container">
          <div className="row">
          {
              products.map(product=>(<Card_Style prod={product} />))

          }
      </div>
      </div>

    </>

}
export default MappingCard;