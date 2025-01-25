import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './InputGroup.module.scss';

const cx = classNames.bind(styles);

function InputGroup({
    type = 'text', // Loại input mặc định là 'text'
    id,
    label,
    value,
    onChange,
    isFocused = false, // Giá trị mặc định cho isFocused là false
    setIsFocused = () => {}, // Đảm bảo setIsFocused luôn có giá trị mặc định
    isPasswordVisible = false, // Mặc định là false (password không hiển thị)
    togglePasswordVisibility = () => {}, // Giá trị mặc định để tránh lỗi nếu không có hàm togglePasswordVisibility
}) {
    return (
        <div className={cx('input-group')}>
            <label
                htmlFor={id}
                className={cx('label', { focused: isFocused || value })} // Thêm class 'focused' khi đã có giá trị
            >
                {label}
            </label>
            <input
                type={type === 'password' && isPasswordVisible ? 'text' : type} // Đổi type thành 'text' nếu password được hiển thị
                id={id}
                className={cx('input')}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)} // Gọi setIsFocused khi focus vào input
                onBlur={() => setIsFocused(false)} // Gọi setIsFocused khi mất focus
            />
            {type === 'password' && (
                <button
                    type="button"
                    className={cx('eye-icon')}
                    onClick={togglePasswordVisibility} // Chuyển đổi trạng thái hiển thị password khi click
                >
                    <FontAwesomeIcon
                        icon={isPasswordVisible ? faEyeSlash : faEye} // Hiển thị icon tùy thuộc vào trạng thái isPasswordVisible
                    />
                </button>
            )}
        </div>
    );
}

export default InputGroup;
