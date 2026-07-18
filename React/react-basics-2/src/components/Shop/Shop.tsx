import ProductCard from "./ProductCard";
import { products } from "../../data/shopData";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import { type CartItem as CartItemType, CartProvider } from "./CartContext";

const ShopContent = () => {
  const { cart, totalPrice } = useCart();
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gray-900 p-8 text-white md:flex-row">
      {/* Product Section */}
      <div className="flex-1">
        <h2 className="mb-6 text-3xl font-bold">Tech Catalogue</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through products and render cards */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Cart Sidebar (20-30% width) */}
      <div className="sticky top-8 h-fit w-full rounded-xl border border-gray-700 bg-gray-800 p-6 md:w-80">
        <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
        {/* Render cart items or "Empty" message */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center opacity-40">
            <div className="mb-4 text-6xl">🛒</div>
            <p className="text-xl font-medium">Your cart is empty</p>
            <p className="text-sm">Add some gear to get started!</p>
          </div>
        ) : (
          cart.map((item: CartItemType) => <CartItem key={item.id} item={item}></CartItem>)
        )}

        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>$ {totalPrice}</span>
          </div>
          <button className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-bold transition-colors hover:bg-blue-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
};

export default Shop;
