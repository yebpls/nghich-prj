export const getCart = () => {
  if (typeof window === undefined) {
    return [];
  }
  return localStorage.getItem("cart");
};

export const setCart = (newCartItem) => {
  const cartLocalStorage = JSON.stringify(newCartItem);

  console.log("cartCookies", cartLocalStorage, newCartItem);
  localStorage.setItem("cart", JSON.stringify(newCartItem));
};
