import ItemDescription from "./ItemDescription.jsx"
function Product({name,description,price}){
    return (
      <>
        <ItemDescription name={name} description={description} />
        <h3>${price}</h3>
        <ItemDescription/>
      </>
    );}

 export default Product
    