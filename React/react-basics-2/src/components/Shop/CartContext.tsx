import { createContext, use, useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};
export type CartItem = Product & {
  quantity: number;
};
export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeOne: (product: CartItem) => void;
  totalPrice: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, modifyCart] = useState<CartItem[]>([]);
  const handleAddToCart = (product: Product) => {
    modifyCart((prev) => {
      const exists = prev.find((item: CartItem) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const handleRemoveOne = (product: CartItem) => {
    modifyCart((prev) => {
      if (product.quantity > 1) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }
      return prev.filter((item) => item.id !== product.id);
    });
  };
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <CartContext.Provider
      value={{ cart, addToCart: handleAddToCart, removeOne: handleRemoveOne, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = use(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
