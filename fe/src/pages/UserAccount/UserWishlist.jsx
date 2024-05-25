import React from "react";
import { useGetWishlist } from "../../api/user";

export default function UserWishlist() {
  const { data: wishlist, isLoading, error } = useGetWishlist();
  console.log("user wishlist:", wishlist, isLoading, error);
  return (
    <div>
      <div>
        {wishlist?.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.description}</h1>
            <h1>{item.image}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
