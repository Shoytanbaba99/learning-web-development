import { Product } from "./CartContext";
import { useCart } from "./CartContext";

interface ProductcardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductcardProps) => {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-700 bg-gray-800 p-4">
      <div className="flex h-40 items-center justify-center rounded-md bg-gray-700 text-gray-500 italic">
        [ Image Placeholder ]
      </div>
      <div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <span className="font-mono text-sm text-blue-400">{product.category}</span>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-2xl font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="rounded-md bg-blue-600 px-4 py-2 font-bold transition-colors hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
