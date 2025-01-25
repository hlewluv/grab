import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import InputGroup from '~/components/Layout/components/InputGroup';
import Button from '~/components/Layout/components/Button';
import SocialButtons from '~/components/Layout/components/SocialButtons';
import SignupPrompt from '~/components/Layout/components/SignupPrompt';
import { Link } from 'react-router-dom'; // Import Link


const cx = classNames.bind(styles);

function Signup() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Các state focus để theo dõi khi input được focus
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
    const [isFullNameFocused, setIsFullNameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password và Confirm Password không khớp. Vui lòng thử lại.');
        } else {
            setError('');
            alert('Đăng ký thành công!');
        }
    };

    return (
        <div className={cx('container')}>
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
                        <ul className={cx('toggle-tabs')}>
                            <li className={cx('active-tab')}>Sign Up</li>
                        </ul>
                    </div>
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        {/* Email */}
                        <InputGroup
                            type="email"
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isFocused={isEmailFocused}
                            setIsFocused={setIsEmailFocused}
                        />

                        {/* Phone Number */}
                        <InputGroup
                            type="text"
                            id="phoneNumber"
                            label="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            isFocused={isPhoneNumberFocused}
                            setIsFocused={setIsPhoneNumberFocused}
                        />

                        {/* Full Name */}
                        <InputGroup
                            type="text"
                            id="fullName"
                            label="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            isFocused={isFullNameFocused}
                            setIsFocused={setIsFullNameFocused}
                        />

                        {/* Password */}
                        <InputGroup
                            type="password"
                            id="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isFocused={isPasswordFocused}
                            setIsFocused={setIsPasswordFocused}
                            isPasswordVisible={isPasswordVisible}
                            togglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                        />

                        {/* Confirm Password */}
                        <InputGroup
                            type="password"
                            id="confirmPassword"
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            isFocused={isConfirmPasswordFocused}
                            setIsFocused={setIsConfirmPasswordFocused}
                            isPasswordVisible={isConfirmPasswordVisible}
                            togglePasswordVisibility={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                        />

                        {error && <div className={cx('error')}>{error}</div>}
                        <Button type="submit">Sign up</Button>
                        <SocialButtons />

                        <div className={cx('info-text')}>
                            <p>
                                People who use our service may have uploaded your contact information to Instagram.{' '}
                                <a href="#" className={cx('link')}>
                                    Learn More
                                </a>
                            </p>
                            <p>
                                By signing up, you will agree to our{' '}
                                <a href="#" className={cx('link')}>
                                    Terms
                                </a>
                                ,{' '}
                                <a href="#" className={cx('link')}>
                                    Privacy Policy
                                </a>
                                , and{' '}
                                <a href="#" className={cx('link')}>
                                    Cookies Policy
                                </a>
                                .
                            </p>
                        </div>
                    </form>
                </div>

                <SignupPrompt />

            </div>
        </div>
    );
}

export default Signup;
