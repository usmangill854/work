import React from "react";
import {useEffect, useReducer} from "react";
import products from "./database";



const Reducer=(currentState , action)=> {
    switch (action) {

        case "loadeddata":
            return currentState = products
        case "default":
            return currentState

    }
}
    const Main= ()=>{
        const[ products, dispatch]=useReducer(Reducer,[])
        useEffect(()=>{
            dispatch("loadeddata")
        })

        return<>
            {JSON.stringify(products)}
        </>
    }
export default Main;