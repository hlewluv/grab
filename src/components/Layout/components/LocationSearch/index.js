import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LocationSearch.module.scss';
import Button from '~/components/Layout/components/Button'; // Import Button component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const LocationSearch = () => {
    const [address, setAddress] = useState('');

    const handleSearch = () => {
        console.log('Tìm kiếm địa chỉ: ', address);
        // Thêm logic xử lý tìm kiếm
    };

    return (
        <div className={cx('search-container')}>
            <div className={cx('heading')}>
                <h4>Good Evening</h4>
                <p>Where should we deliver your food today?</p>
            </div>

            <div className={cx('input-wrapper')}>
                <div className={cx('input-container')}>
                    <input
                        id="location-input"
                        placeholder="Login to search location"
                        className={cx('location-input')}
                        maxLength="512"
                        type="text"
                        disabled
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faLocationDot} className={cx('location-icon')} />
                </div>
            </div>

            {/* Truyền showToggleTabs vào Button */}
            <Button 
                className={cx('submit-button')} 
                onClick={handleSearch}
                showToggleTabs={false}  
            >
                Tìm kiếm
            </Button>
        </div>
    );
};

export default LocationSearch;
