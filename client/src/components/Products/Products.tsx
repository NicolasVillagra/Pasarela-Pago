
import productsArray from '../../../products.json'
import { useState } from 'react';
const products = productsArray.productos
interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  quantity: number
}
const Products = () => {

  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    const updatedCart: Product[] = [...cart];
    updatedCart.push(product);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  return (
    <div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our best clothes</h2>

        <div className="mt-6 flex gap-10">
          {products.map((product) => (
            <div key={product.id} className="group ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">

                      <span aria-hidden="true" className="inset-0" />
                      {product.name}

                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                
              </div>
              <div> <button onClick={()=> handleAddToCart(product)} className='mt-10 h-10 w-full bg-[#d62828] rounded-md text-white'>Añadir al carrito</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products