import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

const contentData = [
    {
        title: 'Nhanh nhất',
        description: ' - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.',
    },
    {
        title: 'Dễ dàng nhất',
        description:
            ' - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tại xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.',
    },
    {
        title: 'Đáp ứng mọi nhu cầu',
        description:
            ' - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.',
    },
    {
        title: 'Thanh toán dễ dàng',
        description: ' - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.',
    },
    {
        title: 'Nhiều quà tặng hơn',
        description:
            ' - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.',
    },
];

const Content = () => {
    return (
        <div className={cx('content-container')}>
            {contentData.map((item, index) => (
                <div key={index} className={cx('content-item')}>
                    <div className={cx('content-item')}>
                        <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                        <div className={cx('text-wrapper')}>
                            <p className={cx('title')}>{item.title}</p>
                            <p className={cx('description')}>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
