import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Restaurant from '~/components/Layout/DefaultLayout/Restaurant';
import styles from './RestaurantContainer.module.scss';

const cx = classNames.bind(styles);  // Bind styles vào classNames

const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch data từ API
  useEffect(() => {
    fetch('http://localhost:3001/restaurants')  // Bạn cần thay thế API này với URL thực tế
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Kiểm tra cấu trúc dữ liệu trả về
        // Trực tiếp sử dụng data nếu là mảng
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
        }
      })
      .catch(error => console.error("Error fetching data: ", error));  // Bắt lỗi nếu API không thành công
  }, []);

  return (
    <div className={cx('restaurants-container')}>  {/* Sử dụng classNames với SCSS */}
      {Array.isArray(restaurants) && restaurants.length > 0 ? (
        restaurants.map(restaurant => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
        <p>No restaurants found.</p>  // Thông báo khi không có nhà hàng
      )}
    </div>
  );
}

export default RestaurantContainer;
