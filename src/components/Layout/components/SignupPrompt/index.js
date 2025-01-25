import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import classNames from 'classnames/bind';
import styles from './SignupPrompt.module.scss';

const cx = classNames.bind(styles);

function SignupPrompt() {
    const location = useLocation(); // Lấy thông tin về URL hiện tại

    // Kiểm tra đường dẫn để hiển thị nội dung phù hợp
    const isSignupPage = location.pathname === '/signup';

    return (
        <div className={cx('signup')}>
            <p>
                {isSignupPage ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Link 
                    to={isSignupPage ? '/login' : '/signup'} 
                    className={cx('signup-link')}
                >
                    {isSignupPage ? 'Log in' : 'Sign up'}
                </Link>
            </p>
        </div>
    );
}

export default SignupPrompt;
