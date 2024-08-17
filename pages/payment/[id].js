import CheckoutForm from '@/components/CheckoutForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import products from '@/public/products';

// Dynamic Page Component
const PaymentPage = () => {
  const Router = useRouter();
  const { id } = Router.query;
  console.log(id);

  const addded_products = [];
  let sum = 0;
  products.forEach(product => {
    if(product.id==id){
      addded_products.push(product);
    }
  });
  addded_products.forEach(product => {
    sum += Number.parseInt(product.price, 10);
  });

  sum = sum || 0;

  return (
    <div className='p-8 absolute w-full top-0 bg-white z-[9999]'>
      <Link href='/'>Home</Link>
      <main className='flex justify-center items-center h-screen'>
        <div className='w-[50vw] border-2 p-4 rounded-md' style={{ minHeight: "10.5em" }}>
          {products.length === 0 ? (
            <>
              <h1 className='text-[2em]'>Add Items to cart</h1>
              <Link href='/'>Home</Link>
            </>
          ) : (
            <div>
              <h1 className='text-[2em]'>Bill</h1>
              <table className='m-auto'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {addded_products.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>₹{product.price}/-</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <th>₹{sum}/- Only</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
        <div className='w-full'>
          <CheckoutForm />
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
