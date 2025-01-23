import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'; // Import đúng icon
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/vn/vi" className={cx('logoLink')}>
                        <img
                            src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
                            alt="GrabFood - Thực đơn giao hàng tận nơi & ưu đãi hấp dẫn"
                            className={cx('logoImage', 'hide')}
                        />
                        <img
                            src="https://food.grab.com/static/images/logo-grabfood2.svg"
                            alt="GrabFood - Thực đơn giao hàng tận nơi & ưu đãi hấp dẫn"
                            className={cx('logoImage', 'logoImageGhost')}
                        />
                    </a>
                </div>

                {/* Nội dung nằm bên phải */}
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
