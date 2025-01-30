import React from 'react';
import classNames from 'classnames/bind';
import styles from './Category.module.scss'; // Giả sử bạn đã có file SCSS cho component này

const cx = classNames.bind(styles); // Liên kết classNames với styles của SCSS

const Category = ({ category }) => {
    return (
        <div className={cx('category')}>
            <div className={cx('category-thumbnail')}>
                <img src={category.img} alt={category.name} className={cx('category-img')} />
            </div>
            <div className={cx('category-body')}>
                <h3 className={cx('category-name')}>{category.name}</h3>
            </div>
        </div>
    );
};

export default Category;
