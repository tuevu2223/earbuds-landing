import { create } from "zustand";
import { persist } from "zustand/middleware";

const PRODUCT = {
  id: "aw-flex-680",
  name: "Alpha Works Flex 680",
  price: 620000,
  image: "/images/1-241030043552.webp",
};

const useShopStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      recentlyViewedAt: null,
      isCartOpen: false,

      addToCart: (color, quantity) =>
        set((state) => {
          const existingIndex = state.cartItems.findIndex(
            (item) => item.color === color
          );
          if (existingIndex !== -1) {
            const updatedItems = [...state.cartItems];
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: updatedItems[existingIndex].quantity + quantity,
            };
            return { cartItems: updatedItems };
          }
          return {
            cartItems: [
              ...state.cartItems,
              { product: PRODUCT, color, quantity },
            ],
          };
        }),

      updateItemQuantity: (color, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.color === color
              ? { ...item, quantity: Math.max(1, Number(quantity)) }
              : item
          ),
        })),

      removeItem: (color) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.color !== color),
        })),

      clearCart: () => set({ cartItems: [] }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      recordView: () => set({ recentlyViewedAt: new Date().toISOString() }),
    }),
    {
      name: "aw-shop-storage-v2",
      partialize: (state) => ({
        cartItems: state.cartItems,
        recentlyViewedAt: state.recentlyViewedAt,
      }),
    }
  )
);

export { PRODUCT };
export default useShopStore;
