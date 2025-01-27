import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ isScrolled }) {
    return (
        <header className={cx('wrapper', { scrolled: isScrolled })}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/vn/vi" className={cx('logoLink')}>
                        <img
                            src={isScrolled
                                ? "https://food.grab.com/static/images/logo-grabfood2.svg"
                                : "https://food.grab.com/static/images/logo-grabfood-white2.svg"}
                            alt="GrabFood - Thực đơn giao hàng tận nơi & ưu đãi hấp dẫn"
                            className={cx('logoImage')}
                        />
                    </a>
                </div>

                <div className={cx('input-container')}>
                    <input
                        id="location-input"
                        placeholder="Login to search location"
                        className={cx('location-input')}
                        maxLength="512"
                        type="text"
                        disabled
                        value=""
                    />
                    <svg className={cx('location-icon')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                </div>

                <div className={cx('content')}>
                    <button className={cx('cart-btn')}>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                    </button>
                    <button className={cx('login-btn')}>Đăng nhập/Đăng ký</button>
                    <button className={cx('language-btn')}>
                        VI
                        <FontAwesomeIcon icon={faCaretDown} className={cx('arrow-icon')} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
