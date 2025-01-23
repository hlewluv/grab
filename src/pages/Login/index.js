import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import icons

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('logo-container')}>
                <img
                    src="https://media.graphassets.com/LbyeCiGYRBStV6jRQNrK"
                    alt="FoodDesk Logo"
                    className={cx('logo')}
                />
            </div>
            <div className={cx('form-container')}>
                <div className={cx('form-wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('header-logo')}>
                            <img
                                src="https://food.grab.com/static/images/logo-grabfood2.svg"
                                alt="FoodDesk Logo"
                                className={cx('secondary-logo')}
                            />
                        </div>
                        <ul class={cx('toggle-tabs')}>
                            <li class={cx('active-tab')}>Sign Up</li>
                        </ul>
                    </div>
                    <form className={cx('form')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="email" className={cx('label')}>
                                Email Address
                            </label>
                            <input type="email" id="email" className={cx('input')} placeholder="demo@example.com" />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="password" className={cx('label')}>
                                Password
                            </label>
                            <input type="password" id="password" className={cx('input')} placeholder="********" />
                        </div>
                        <div className={cx('checkbox')}>
                            <input type="checkbox" id="remember" className={cx('checkbox-input')} />
                            <label htmlFor="remember" className={cx('checkbox-label')}>
                                Remember my preference
                            </label>
                        </div>
                        <button type="submit" className={cx('button')}>
                            Sign Me In
                        </button>
                        <div className={cx('continue-with')}>
                            <ul class={cx('toggle-tabs')}>
                                <li class={cx('active-tab')}>Continue with</li>
                            </ul>
                            <div className={cx('social-buttons')}>
                                <button type="button" className={cx('social-button', 'facebook')}>
                                    <FontAwesomeIcon icon={faFacebookF} className={cx('icon')} />
                                    Facebook
                                </button>
                                <button type="button" className={cx('social-button', 'google')}>
                                    <FontAwesomeIcon icon={faGoogle} className={cx('icon')} />
                                    Google
                                </button>
                                <button type="button" className={cx('social-button', 'linkedin')}>
                                    <FontAwesomeIcon icon={faLinkedinIn} className={cx('icon')} />
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                        <div className={cx('signup')}>
                            <p>
                                Don't have an account?{' '}
                                <a href="#" className={cx('signup-link')}>
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
