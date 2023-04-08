import Meta from '@/components/meta';
import { addProductToLocalStorage, products } from '@/constant';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const product = () => {
    const router = useRouter();
    const { id } = router.query;
    const my_product = products.find(pro => pro.id == id);

    const handleClick = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;


        if (isNaN(quantity) || quantity < 1 || quantity > 10) {
            alert('You can order 1-10 product at once, thank you')
        }

        // add product to cart by local storage

        else {
            addProductToLocalStorage(id, quantity);
            router.push('/cart');
        }

        // add product to cart by local storage

    }
    return (
        <>
            <Meta title={'Furniture - ' + my_product?.name} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 px-10'>
                <div className="card bg-teal-50 shadow-xl mt-10">
                    <figure className="px-4 pt-6">
                        <Image src={my_product?.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{my_product?.short_dis}</h2>
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className='text-center font-extrabold text-3xl mb-4'>{my_product?.name}</h1>
                    <p className="font-bold text-center mb-4"><span className="text-primary">Price</span> ${my_product?.price}</p>
                    <p><span className="font-semibold text-lg">Description: </span> {my_product?.long_dis}</p>
                    <form onSubmit={handleClick} className="grid justify-items-center mt-10">
                        <div className="flex justify-start items-center gap-5">

                            <p className="font-bold">Quantity :</p>
                            <input type='number' name='quantity' required placeholder='quantity' className="input input-primary input-xs w-20" />
                        </div>
                        <button type="submit" className='w-64 my-4 btn btn-outline btn-primary btn-xs'>Add to cart</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default product;