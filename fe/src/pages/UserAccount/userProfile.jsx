import React from "react";
import { useGetUserProfile } from "../../api/user";
import UserWishlist from "./UserWishlist";

export default function UserProfile() {
  const { data: user, isLoading, error } = useGetUserProfile();
  console.log("user profile:", user, isLoading, error);
  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
          <h1>{user.phone}</h1>
          <h1>{user.address}</h1>
          <div>
            wishlist
            <UserWishlist />
          </div>
        </div>
      )}
    </div>
  );
}
