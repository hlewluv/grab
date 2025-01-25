import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';

const cx = classNames.bind(styles);

const ForgotPassword = ({ link, text }) => {
    return (
        <div className={cx('forgot-password')}>
            <a href={link} className={cx('forgot-password-link')}>
                {text}
            </a>
        </div>
    );
};

ForgotPassword.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ForgotPassword;
