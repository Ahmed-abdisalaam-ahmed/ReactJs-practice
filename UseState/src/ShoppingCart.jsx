import { useState } from "react";

const ShoppingCart = ()=>{
    const [isProduct , setProduct] = useState([]);
    const [isNameProduct,setNameProduct] = useState("");
    const [isPriceProduct,setPriceProduct] = useState("");

    return(
        <div>
                <h1>Tis is project of Cart Product</h1>
        </div>
    )
}
export default ShoppingCart;