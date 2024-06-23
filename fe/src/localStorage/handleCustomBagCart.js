// src/localStorage/handleCustomBagCart.js

export const getCustomBagCart = () => {
    if (typeof window === 'undefined') {
      return [];
    }
    return localStorage.getItem("customBagCart");
  };
  
  export const setCustomBagCart = (newCustomBagCartItem) => {
    const customBagCartLocalStorage = JSON.stringify(newCustomBagCartItem);
  
    console.log("customBagCartCookies", customBagCartLocalStorage, newCustomBagCartItem);
    localStorage.setItem("customBagCart", JSON.stringify(newCustomBagCartItem));
  };
  