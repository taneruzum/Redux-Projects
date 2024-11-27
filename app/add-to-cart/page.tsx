"use client"
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/mock/products';
import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { addProduct, increaseQuantity, decreaseQuantity } from '@/lib/features/AddToCart/addProductSlice';
import { Product } from '@/types/contentType';

export default function AddToCartPage() {
    const dispatch = useAppDispatch();
    const Cart = useAppSelector((state) => state.addProductSlice);

    const handleAddToCart = (product: Product) => {
        dispatch(addProduct({ productTitle: product.title, productPrice: product.price, quantity: 1 }));
    };

    const handleIncreaseQuantity = (productTitle: string) => {
        dispatch(increaseQuantity(productTitle));
    };

    const handleDecreaseQuantity = (productTitle: string) => {
        dispatch(decreaseQuantity(productTitle));
    };

    const calculateTotal = () => {
        return Cart.reduce((total, product) => total + product.productPrice * product.quantity, 0);
    };

    return (
        <div className="w-full grid grid-cols-12 gap-6">
            {/* Ürün Kartları */}
            <section className='col-span-9 flex items-center justify-between gap-4'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </section>

            {/* Sepet Kısmı */}
            <div className='relative col-span-3 flex flex-col gap-6 items-center text-white p-5 border rounded-xl'>
                <h3 className='text-2xl font-semibold tracking-wider'>CART</h3>
                <section className='w-full max-h-[240px] h-full overflow-y-auto flex flex-col gap-4'>
                    {Cart.length > 0 ? (
                        Cart.map((product, index) => (
                            <div key={index} className="w-full grid grid-cols-3 gap-4">
                                <span className='flex-shrink-0 text-nowrap max-w-32 text-ellipsis overflow-hidden'>{product.productTitle}</span>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => handleIncreaseQuantity(product.productTitle)}>+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => handleDecreaseQuantity(product.productTitle)}>-</button>
                                </div>
                                <span>${(product.productPrice * product.quantity).toFixed(2)}</span>
                            </div>
                        ))
                    ) : (
                        <p>No items in your cart yet.</p>
                    )}
                </section>
                <div className="mt-4 font-semibold text-lg">
                    Total: ${calculateTotal().toFixed(2)}
                </div>
            </div>
        </div>
    );
}
