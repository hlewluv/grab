import classNames from 'classnames/bind';
import styles from './HeaderLogin.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-logo')}>
                <img
                    src="https://food.grab.com/static/images/logo-grabfood2.svg"
                    alt="FoodDesk Logo"
                    className={cx('secondary-logo')}
                />
            </div>
            <ul className={cx('toggle-tabs')}>
                <li className={cx('active-tab')}>Log in</li>
            </ul>
        </div>
    );
}

export default Header;
