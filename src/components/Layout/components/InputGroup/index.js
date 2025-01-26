import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './InputGroup.module.scss';

const cx = classNames.bind(styles);

function InputGroup({
    type = 'text',
    id,
    label,
    value,
    onChange,
    isFocused = false,
    setIsFocused = () => {},
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState); // Toggle trạng thái
    };

    return (
        <div className={cx('input-group')}>
            <label
                htmlFor={id}
                className={cx('label', { focused: isFocused || value })}
            >
                {label}
            </label>
            <input
                type={type === 'password' && isPasswordVisible ? 'text' : type}
                id={id}
                className={cx('input')}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className={cx('eye-icon')}
                    onClick={togglePasswordVisibility}
                >
                    <FontAwesomeIcon
                        icon={isPasswordVisible ? faEyeSlash : faEye}
                    />
                </button>
            )}
        </div>
    );
}

export default InputGroup;
