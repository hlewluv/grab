import React, { useEffect, useState } from 'react';
import styles from './Background.module.scss'; // Import CSS Module

const Background = ({ baseUrl, totalImages = 4, height = '10rem' }) => {
    const [randomImageIndex, setRandomImageIndex] = useState(1);

    useEffect(() => {
        // Tạo số ngẫu nhiên mỗi khi trang tải lại
        const randomIndex = Math.floor(Math.random() * totalImages) + 1;
        setRandomImageIndex(randomIndex);
    }, [totalImages]); // Chỉ chạy khi totalImages thay đổi

    const backgroundImageUrl = `${baseUrl.replace('{number}', randomImageIndex)}`;

    return (
        <div
            className={styles.background}
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height,
                overflow: 'hidden',
            }}
        ></div>
    );
};

export default Background;
