import React from 'react';
import classNames from 'classnames/bind';
import styles from './Title.module.scss'; // Import css module của bạn

const Title = ({ title, address }) => {
    return (
        <div className={classNames(styles.titleContainer)}>
            <h1 className={classNames(styles.title)}>
                {title}
            </h1>
            {address && (
                <p className={classNames(styles.greenText)}>
                    {address}
                </p>
            )}
        </div>
    );
};

export default Title;
