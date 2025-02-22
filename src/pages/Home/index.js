import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '~/components/Layout/DefaultLayout/Header'; // Giữ nguyên import Header của bạn
import Background from '~/components/Layout/components/Background';
import Title from '~/components/Layout/components/Title';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LocationSearch from '~/components/Layout/components/LocationSearch';
import RestaurantContainer from '~/components/Layout/DefaultLayout/RestaurantContainer';
import Content from '~/components/Layout/components/Content';
import GrabFoodInfo from '~/components/Layout/components/QA';
import DownloadSection from '~/components/Layout/components/Download';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import CartModal from '~/components/Layout/components/CartModal'; // Import modal

const cx = classNames.bind(styles);

function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { user, initials } = location.state || {}; // Lấy thông tin từ state

    const handleScroll = () => {
        if (window.scrollY > 20) {
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
            <Header isScrolled={isScrolled} initials={initials} /> {/* Truyền initials vào Header */}
            <Background
                baseUrl="https://food.grab.com/static/page-home/VN-new-{number}.jpg"
                totalImages={4}
                height="31rem"
            />
            <LocationSearch />
            <hr
                style={{
                    marginTop: '-15px',
                    borderColor: 'rgba(121, 120, 120, 0.2)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    zIndex: -5,
                    position: 'relative',
                }}
            />
            <Title title="Ưu đãi GrabFood tại " address="74 Nguyễn Khang, P.An Khê, Pleiku, 50000, Vietnam" />

            <RestaurantContainer type="restaurant" />

            <button className={cx('restaurant-btn')}>See all promotions</button>

            <Title title="There's something for everyone!" />

            <RestaurantContainer type="category" />

            <Title title="Vì sao bạn nên Order trên GrabFood?" />

            <Content />

            <Title title="Những câu hỏi thường gặp" />

            <GrabFoodInfo />

            <DownloadSection/>

            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <Footer/>
        </div>
    );
}

export default Home;
