import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Header from '~/components/Layout/DefaultLayout/Header';
import Background from '~/components/Layout/components/Background';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LocationSearch from '~/components/Layout/components/LocationSearch';
import RestaurantContainer from '~/components/Layout/DefaultLayout/RestaurantContainer';

const cx = classNames.bind(styles);

function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Kiểm tra nếu state từ navigate chứa 'showToast'
        // if (location.state?.showToast) {
        //     toast.success('Đăng nhập thành công!', {
        //         position: 'top-right',
        //         autoClose: 2000,
        //         style: { fontSize: '0.875rem' },
        //     });
        // }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.state]);

    return (
        <div className={cx('container')}>
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
                    borderColor: 'rgba(121, 120, 120, 0.2)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    zIndex: -5,
                    position: 'relative',
                }}
            />
            {/* <ToastContainer /> */}
            <RestaurantContainer />

        </div>
    );
}

export default Home;
