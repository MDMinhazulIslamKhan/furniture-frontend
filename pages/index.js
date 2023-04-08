import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import { addProductToLocalStorage, products } from "../constant";
import Meta from "@/components/meta";

export default function Home() {
  const router = useRouter();

  const addProduct = (id) => {
    addProductToLocalStorage(id, 1);
    router.push('/cart');
  }
  return (
    <>
      <Meta />
      <h1 className="text-center font-bold text-4xl my-4">All Products</h1>
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 sm:grid-cols-2 gap-12">
        {products.map(product =>
          <div key={product.id} className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">{product.name}</h2>
              <p className="font-bold"><span className="text-primary">Price</span> ${product.price}</p>
            </div>
            <figure className="px-4 h-80">
              <Image src={product.image} alt={product.name} className="rounded-xl max-h-72" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{product.short_dis}</p>
              <div className="card-actions flex justify-between w-full">
                <button className="btn btn-primary btn-sm" onClick={() => addProduct(product.id)}>Add to Cart</button>
                <Link href={`/product/${product.id}`} className="font-semibold hover:text-primary">See more</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
