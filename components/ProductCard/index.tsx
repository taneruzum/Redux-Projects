import { Product } from '@/types/contentType';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void; // Sepete ekleme fonksiyonu
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="relative max-w-96 w-full px-4 py-6 border rounded-lg">
            <figure className="min-h-40 rounded-sm bg-gray-400">
                {/* {product.imageUrl && (
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={400}
                        height={200}
                        className="object-cover rounded-sm"
                    />
                )} */}
            </figure>
            <section>
                <h2 className="font-bold text-xl">{product.title}</h2>
                <p className="text-base text-gray-300">{product.description}</p>
                <span className="block font-semibold text-xl text-green-500">
                    ${product.price.toFixed(2)}
                </span>
            </section>
            <button
                onClick={() => onAddToCart(product)} // Sepete eklemek için çağırılan fonksiyon
                className="mt-4 bg-blue-500 text-white text-base font-medium py-2 px-4 rounded hover:bg-blue-600"
            >
                Add
            </button>
        </div>
    );
}
