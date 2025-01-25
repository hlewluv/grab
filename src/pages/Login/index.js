import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Layout/components/Button';
import Header from '~/components/Layout/components/HeaderLogin';
import InputGroup from '~/components/Layout/components/InputGroup';
import Checkbox from '~/components/Layout/components/Checkbox';
import ErrorMessage from '~/components/Layout/components/ErrorMessage';
import SocialButtons from '~/components/Layout/components/SocialButtons';
import SignupPrompt from '~/components/Layout/components/SignupPrompt';
import ForgotPassword from '~/components/Layout/components/ForgotPassword';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        identifier: '',
        password: '',
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const validateField = (field, value) => {
        let fieldError = '';

        if (field === 'identifier') {
            if (!value) {
                fieldError = 'Phone number or email không được để trống.';
            } else if (!/\S+@\S+\.\S+/.test(value) && !/^\d{9,11}$/.test(value)) {
                fieldError = 'Hãy nhập email hợp lệ hoặc số điện thoại.';
            }
        }

        if (field === 'password') {
            if (!value) {
                fieldError = 'Password không được để trống.';
            } else if (value.length < 6) {
                fieldError = 'Password phải có ít nhất 6 ký tự.';
            }
        }

        return fieldError;
    };

    const handleBlur = (field) => {
        const value = field === 'identifier' ? identifier : password;
        const fieldError = validateField(field, value);
        setError((prev) => ({ ...prev, [field]: fieldError }));
    };

    const handleInputChange = (field, value) => {
        if (field === 'identifier') {
            setIdentifier(value);
        } else if (field === 'password') {
            setPassword(value);
        }

        // Xóa lỗi nếu có khi người dùng nhập lại
        setError((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const identifierError = validateField('identifier', identifier);
        const passwordError = validateField('password', password);

        setError({ identifier: identifierError, password: passwordError });

        return !identifierError && !passwordError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Dữ liệu hợp lệ, gửi tới backend:', { identifier, password });
            // Gửi dữ liệu tới backend
        } else {
            console.log('Form có lỗi, không gửi được.');
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('form-container')}>
                <div className={cx('form-wrapper')}>
                    <Header />
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        <InputGroup
                            id="identifier"
                            label="Phone number or email"
                            value={identifier}
                            onChange={(e) => handleInputChange('identifier', e.target.value)}
                            onBlur={() => handleBlur('identifier')}
                        />
                        <InputGroup
                            id="password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            label="Password"
                            value={password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            onBlur={() => handleBlur('password')}
                            isPasswordVisible={isPasswordVisible}
                            togglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                        />
                        {(error.identifier || error.password) && (
                            <ErrorMessage message={error.identifier || error.password} />
                        )}{' '}
                        <Checkbox id="remember" label="Remember my preference" />
                        <ForgotPassword link="/forgot-password" text="Forgot Password?" />
                        <Button type="submit" disabled={!identifier || !password || error.identifier || error.password}>
                            Log In
                        </Button>
                        <SocialButtons />
                    </form>
                </div>
                <SignupPrompt />
            </div>
        </div>
    );
}

export default Login;
