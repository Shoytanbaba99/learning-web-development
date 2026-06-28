import React, { useState } from "react";
import { products } from "../../data/shopData";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

// SENSEI: Define the BOXES and ANATOMY.
// This is the High Parent (The God Component).

const Shop = () => {
    // 1. Initialize cart state as an empty array
    const [cart, modifyCart] = useState([]);
    // 2. Logic: handleAddToCart(product)
    const handleAddToCart = (product) => {
        if (cart.find((item) => item.id === product.id)) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
            modifyCart(updatedCart);
        } else {
            modifyCart([...cart, { ...product, quantity: 1 }]);
        }
        // Check if the product already exists in the cart using .find()
        // IF EXISTS:
        // Update the quantity by using .map()
        // (Hint: item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        // IF NOT EXISTS:
        // Add the product to the array with quantity 1
        // (Hint: [...cart, { ...product, quantity: 1 }])
    };

    const handleRemoveOne = (product) => {
        if (product.quantity > 1) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }

                return item;
            });

            modifyCart(updatedCart);
        } else {
            const updatedCart = cart.filter((item) => {
                return item.id !== product.id;
            });

            modifyCart(updatedCart);
        }
    };
    // 3. Logic: handleRemoveOne(id)
    // (Decrease quantity, or remove if quantity is 1)

    // 4. Derived State: Calculate total price here
    const totalPrice = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    console.log(totalPrice);
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-900 text-white min-h-screen">
            {/* Product Section */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Tech Catalogue</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map through products and render cards */}
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
                    ))}
                </div>
            </div>

            {/* Cart Sidebar (20-30% width) */}
            <div className="w-full md:w-80 bg-gray-800 p-6 rounded-xl border border-gray-700 h-fit sticky top-8">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                {/* Render cart items or "Empty" message */}
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center opacity-40">
                        <div className="text-6xl mb-4">🛒</div>
                        <p className="text-xl font-medium">Your cart is empty</p>
                        <p className="text-sm">Add some gear to get started!</p>
                    </div>
                ) : (
                    cart.map((item) => (
                        <CartItem
                            item={item}
                            onAdd={handleAddToCart}
                            onRemove={handleRemoveOne}
                        ></CartItem>
                    ))
                )}

                <div className="mt-8 pt-4 border-t border-gray-700">
                    <div className="flex justify-between text-xl font-bold">
                        <span>Total:</span>
                        <span>$ {totalPrice}</span>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold transition-colors">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
