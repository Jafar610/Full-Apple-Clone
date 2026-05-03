import React from "react";
import WatchCategory from "../Pages/Apple_Store/WatchCategory";
import WatchProduct from "../Pages/WatchProduct/WatchProduct";

function WatchSharedLayout() {
  return (
    <>
      <WatchProduct />
      <WatchCategory />
    </>
  );
}

export default WatchSharedLayout;
