import { ProductModel } from "@/types/model";

export const localStorageHelper = {
  loadCart(): ProductModel[] {
    if (typeof window === "undefined") return [];

    const data = localStorage.getItem(`${process.env.CART_KEY}`);
    if (data) {
      try {
        return JSON.parse(data) as ProductModel[];
      } catch (error) {
        console.error("Lỗi parse JSON:", error);
        return [];
      }
    }
    return [];
  },

  saveCart(cart: ProductModel[]) {
    if (typeof window !== "undefined") {
      localStorage.setItem(`${process.env.CART_KEY}`, JSON.stringify(cart));
    }
  },

  addProduct(newProduct: ProductModel) {
    const cart = this.loadCart();

    const index = cart.findIndex((item) => item._id === newProduct._id);
    if (index !== -1) {
      // @ts-ignore
      cart[index].quantity += newProduct.quantity;
    } else {
      cart.push(newProduct);
    }

    this.saveCart(cart);
  },

  removeProduct(productId: string) {
    // @ts-ignore
    const cart = this.loadCart().filter((item) => item._id !== productId);
    this.saveCart(cart);
  },

  clearCart() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(`${process.env.CART_KEY}`);
    }
  },

  getTotalQuantity(): number {
    const cart = this.loadCart();
    // @ts-ignore
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice(): number {
    const cart = this.loadCart();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
};
