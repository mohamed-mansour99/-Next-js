import { notFound } from "next/navigation"

const ReviewDetail = ({params}:{params:{productid:string, reviewid:string}}) => {
  if(parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <div>
      ReviewDetail for product{params.productid} is {params.reviewid}
    </div>
  )
}

export default ReviewDetail
