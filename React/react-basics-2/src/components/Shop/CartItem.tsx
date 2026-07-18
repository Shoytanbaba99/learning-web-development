import { type CartItem as CartItemType } from "./CartContext";
import { useCart } from "./CartContext";
interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { addToCart, removeOne } = useCart();
  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-4">
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-400">
          ${item.price} x {item.quantity}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => removeOne(item)}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600"
        >
          -
        </button>
        <span className="w-4 text-center font-mono">{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
