import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '~/components/Layout/DefaultLayout/Header';
import Title from '~/components/Layout/components/Title';
import styles from './Cuisine.module.scss';
import classNames from 'classnames/bind';
import RestaurantContainer from '~/components/Layout/DefaultLayout/RestaurantContainer';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import CartModal from '~/components/Layout/components/CartModal';
import Breadcrumb from '~/components/Layout/components/Breadcrumb';

const cx = classNames.bind(styles);

const categories = [
    { name: 'Gần tôi', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
    { name: 'Flash Sale mỗi ngày', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
    { name: 'Bữa xế tối OD', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
    { name: 'Deal chớp nhoáng', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
    { name: 'Quán mới giá hời', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
    { name: 'Trứ danh địa phương', img: 'https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg' },
];

function Cuisines() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { initials } = location.state || {};

    useEffect(() => {
        const handleScroll = () => setIsScrolled(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cx('container')}>
            <Header isScrolled={isScrolled} initials={initials} />
            {/* Thanh tìm kiếm */}
            <div className={cx('search-bar')}>
                <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                <input type="text" placeholder="Tìm món hoặc quán ăn" />
            </div>
            {/* Danh mục món ăn */}
            <div className={cx('categories')}>
                {categories.map((category, index) => (
                    <div className={cx('category')} key={index}>
                        <div className={cx('image-container')}>
                            <img src={category.img} alt={category.name} />
                            <div className={cx('overlay')}>{category.name}</div>
                        </div>
                    </div>
                ))}
                <div className={cx('arrow')}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <hr
                style={{
                    marginTop: '15px',
                    borderColor: 'rgba(242, 238, 238, 0.95)',
                    borderStyle: 'solid',
                    borderWidth: '4px',
                    position: 'relative',
                }}
            />
            <Breadcrumb /> {/* Thêm breadcrumb ở đây */}
            <Title title="Ưu đãi GrabFood tại " address="74 Nguyễn Khang, P.An Khê, Pleiku, 50000, Vietnam" />
            <RestaurantContainer type="restaurant" />
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Footer />
        </div>
    );
}

export default Cuisines;
