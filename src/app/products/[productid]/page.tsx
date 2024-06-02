 
const ProductDetail = ({params}:{params:{productid:string}}) => {
  return (
    <h1>
      ProductDetail{params.productid}
    </h1>
  )
}

export default ProductDetail
