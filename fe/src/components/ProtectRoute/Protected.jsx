import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Protected({ children, token }) {
  const isAccess = token ? true : false;

  useEffect(() => {
    console.log("log register", isAccess, children);
  }, [isAccess]);
  switch (isAccess) {
    case false:
      return children;

    case true:
      return <Navigate to="/" />;
  }
}

export default Protected;
