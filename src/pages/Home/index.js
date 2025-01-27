import React, { useEffect, useState } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import Background from '~/components/Layout/components/Background';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LocationSearch from '~/components/Layout/components/LocationSearch';

const cx = classNames.bind(styles);

function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            // Khi cuộn xuống hơn 100px
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('container')}>
            {/* Truyền isScrolled vào Header */}
            <Header isScrolled={isScrolled} />
            <Background
                baseUrl="https://food.grab.com/static/page-home/VN-new-{number}.jpg"
                totalImages={4}
                height="31rem"
            />
            <LocationSearch />
            <hr
                style={{
                    marginTop: '-15px',
                    borderColor: 'rgba(121, 120, 120, 0.2)', // Màu xám
                    borderStyle: 'solid', // Kiểu đường thẳng
                    borderWidth: '1px', // Độ dày của đường kẻ
                    zIndex: -5,
                    position: 'relative', // Đảm bảo zIndex hoạt động
                }}
            />
        </div>
    );
}

export default Home;
