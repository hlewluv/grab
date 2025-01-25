import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ type = 'button', onClick, className, children, disabled }) => {
    return (
        <>
            <button type={type} className={cx('button', className, { disabled })} onClick={onClick} disabled={disabled}>
                {children}
            </button>

            <ul className={cx('toggle-tabs')}>
                <li className={cx('active-tab')}>Log in with</li>
            </ul>
        </>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

export default Button;
