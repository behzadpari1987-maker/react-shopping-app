import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("behzad_cart");
    try {
      const parsed = data ? JSON.parse(data) : [];
      setCartItems(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    if (cartItems !== undefined) localStorage.setItem("behzad_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (!existing) return [...prev, { id: itemId, count: 1 }];
      return prev.map((item) => (item.id === itemId ? { ...item, count: item.count + 1 } : item));
    });
  };

  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("behzad_cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = prev
        .map((i) => (i.id === itemId ? { ...i, count: Math.max(0, i.count - 1) } : i))
        .filter((i) => i.count > 0);
      return updated;
    });
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};