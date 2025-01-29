import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import InputGroup from '~/components/Layout/components/InputGroup';
import Button from '~/components/Layout/components/Button';
import SocialButtons from '~/components/Layout/components/SocialButtons';
import SignupPrompt from '~/components/Layout/components/SignupPrompt';

import { fetchRegister } from '~/api/register'; // Đảm bảo import hàm fetchRegister

const cx = classNames.bind(styles);

function Signup() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [isLastNameFocused, setIsLastNameFocused] = useState(false);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra các trường dữ liệu
        if (!firstName || !lastName) {
            setError('First Name và Last Name không được để trống.');
            return;
        }

        // Kiểm tra email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Vui lòng nhập một địa chỉ email hợp lệ.');
            return;
        }

        // Kiểm tra số điện thoại (9-11 số)
        const phoneNumberRegex = /^[0-9]{9,11}$/;
        if (!phoneNumberRegex.test(phoneNumber)) {
            setError('Số điện thoại phải có từ 9 đến 11 chữ số.');
            return;
        }

        // Kiểm tra mật khẩu
        if (password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }

        setError(''); // Xóa lỗi khi tất cả điều kiện đều hợp lệ

        try {
            // Gọi fetchRegister để gửi thông tin người dùng đến server
            const newUser = await fetchRegister(`${firstName} ${lastName}`, email, phoneNumber, username, password);
            alert('Đăng ký thành công!');
            console.log('Người dùng mới:', newUser);

            // Chuyển về trang login
            navigate('/login'); // Điều hướng về trang login
        } catch (error) {
            // Lỗi từ fetchRegister (như trùng email hoặc số điện thoại)
            setError(error.message); // Lỗi trả về từ API (email/sdt trùng)
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
                        {/* First Name */}
                        <div className={cx('name-container')}>
                            <InputGroup
                                type="text"
                                id="firstName"
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                isFocused={isFirstNameFocused}
                                setIsFocused={setIsFirstNameFocused}
                            />

                            {/* Last Name */}
                            <InputGroup
                                type="text"
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                isFocused={isLastNameFocused}
                                setIsFocused={setIsLastNameFocused}
                            />
                        </div>
                        {/* Username */}
                        <InputGroup
                            type="text"
                            id="username"
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            isFocused={isUsernameFocused}
                            setIsFocused={setIsUsernameFocused}
                        />
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
                        {error && <div className={cx('error')}>{error}</div>} {/* Hiển thị lỗi */}
                        <Button type="submit" showToggleTabs={true}>
                            Sign up
                        </Button>
                        <SocialButtons />
                        <div className={cx('info-text')}>
                            <p>
                                People who use our service may have uploaded your contact information to Instagram.{' '}
                                <a href="#" className={cx('link')}>
                                    Learn More
                                </a>
                            </p>
                            {/* <p>
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
                            </p> */}
                        </div>
                    </form>
                </div>

                <SignupPrompt />
            </div>
        </div>
    );
}

export default Signup;
