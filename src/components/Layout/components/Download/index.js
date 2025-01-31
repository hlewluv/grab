import React from 'react';
import styles from './DownloadSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DownloadSection = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('feature')}>
                <img
                    src="https://food.grab.com/static/page-home/bottom-food-options.svg"
                    alt="Curated restaurants"
                    className={cx('image')}
                />
                <h3>Curated restaurants</h3>
                <p>From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</p>
            </div>
            <div className={cx('feature')}>
                <img
                    src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
                    alt="More cool features"
                    className={cx('image')}
                />
                <h3>More cool features available on the app</h3>
                <p>Download Grab app to use other payment methods and enjoy seamless communication with your driver.</p>
                <div className={cx('download-buttons')}>
                    <img
                        src="https://food.grab.com/static/images/logo-appstore.svg"
                        alt="Download on the App Store"
                        className={cx('app-store')}
                    />
                    <img
                        src="https://food.grab.com/static/images/logo-playstore.svg"
                        alt="Get it on Google Play"
                        className={cx('google-play')}
                    />
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
