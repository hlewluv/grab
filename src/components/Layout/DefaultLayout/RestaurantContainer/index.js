import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./RestaurantContainer.module.scss";
import Restaurant from "~/components/Layout/DefaultLayout/Restaurant"; // Component hiển thị nhà hàng
import CategoryCard from "~/components/Layout/DefaultLayout/Category"; // Component hiển thị danh mục món ăn

const cx = classNames.bind(styles);

const RestaurantContainer = ({ type = "restaurant" }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url =
      type === "category"
        ? "http://localhost:3001/categories"
        : "http://localhost:3001/restaurants";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu: ", error));
  }, [type]);

  return type === "restaurant" ? (
    <div className={cx("restaurants-container")}>
      {items.length > 0 ? (
        items.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  ) : (
    <div className={cx("restaurants-container")}>
      {items.length > 0 ? (
        items.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default RestaurantContainer;
