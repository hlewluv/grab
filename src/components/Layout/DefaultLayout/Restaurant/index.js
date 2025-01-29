import React from 'react';
import classNames from 'classnames/bind';
import styles from './Restaurant.module.scss'; // Giả sử bạn đã có file SCSS cho component này
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faRoad, faTag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles); // Liên kết classNames với styles của SCSS

const Restaurant = ({ restaurant }) => {
    return (
        <div className={cx('restaurant')}>
            <p className={cx('discount')}>Promo</p>
            <div className={cx('restaurant-thumbnail')}>
                <img src={restaurant.img} alt={restaurant.name} className={cx('restaurant-img')} />
            </div>
            <div className={cx('restaurant-body')}>
                <h3 className={cx('restaurant-name')}>{restaurant.name}</h3>
                <p className={cx('menu')}>{restaurant.categories.join(', ')}</p>
                <div className={cx('restaurant-info')}>
                    <p className={cx('rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon', 'star')} />
                        <span>{restaurant.rating}</span>
                    </p>
                    <p className={cx('or')}>•</p>
                    <p className={cx('time')}>
                        <FontAwesomeIcon icon={faClock} className={cx('icon')} />
                        <span>{restaurant.eta}</span>
                    </p>
                    <p className={cx('or')}>•</p>
                    <p className={cx('distance')}>
                        <FontAwesomeIcon icon={faRoad} className={cx('icon')} />
                        <span>{restaurant.distance}</span>
                    </p>
                </div>

                <div className={cx('discount-content')}>
                    <FontAwesomeIcon icon={faTag} className={cx('icon', 'discount-icon')} />
                    <span>10% on your first reservation</span>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
