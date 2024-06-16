import Link from 'next/link';
import {useRouter} from 'next/router'
const productId = () => {
    const Router = useRouter();
    const {productId} = Router.query;
  return (
    <>
        <Link href={`/`}>Back</Link>
        <div>Product Id is: {productId}</div>
    </>
  )
}

export default productId