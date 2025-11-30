import { useParams } from "react-router";

 const ProductDetails = () => {

  const {categoryId , productId} = useParams();


  return (
    <div>
        <h1>helooo</h1>
        <h1>{categoryId}</h1>
        <h1>{productId}</h1>
    </div>
  )
};
 export default ProductDetails