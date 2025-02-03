import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import InputGroup from '~/components/Layout/components/InputGroup';
import Button from '~/components/Layout/components/Button';
import ErrorMessage from '~/components/Layout/components/ErrorMessage';
import Header from '~/components/Layout/components/HeaderLogin';
import SignupPrompt from '~/components/Layout/components/SignupPrompt';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [identifier, setIdentifier] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateField = (value) => {
        if (!value) {
            return 'Vui lòng nhập email, số điện thoại hoặc tên người dùng.';
        } else if (!/\S+@\S+\.\S+/.test(value) && !/^\d{9,11}$/.test(value)) {
            return 'Hãy nhập email hợp lệ hoặc số điện thoại.';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fieldError = validateField(identifier);
        if (fieldError) {
            setError(fieldError);
        } else {
            setError('');
            alert('Liên kết đặt lại mật khẩu đã được gửi!');
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('form-container')}>
                <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('header')}>
                        <div className={cx('header-logo')}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5569/5569108.png"
                                alt="FoodDesk Logo"
                                className={cx('secondary-logo')}
                            />
                        </div>
                    </div>
                    <h2 className={cx('title')}>Trouble logging in?</h2>
                    <p className={cx('subtitle')}>
                        Enter your email, phone, or username and we'll send you a link to get back into your account.
                    </p>
                    <InputGroup
                        id="identifier"
                        label="Email, số điện thoại hoặc tên người dùng"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />
                    {error && <ErrorMessage message={error} />}
                    <Button type="submit">Gửi liên kết đăng nhập</Button>
                    <button className={cx('back-link')} onClick={() => navigate('/login')}>
                        Quay lại đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
