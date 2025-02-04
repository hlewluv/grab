import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartModal.module.scss';

const cx = classNames.bind(styles);

function CartModal({ isOpen, onClose }) {
    return (
        <div className={cx('modal-overlay', { active: isOpen })} onClick={onClose}>
            <div className={cx('modal-container', { active: isOpen })} onClick={(e) => e.stopPropagation()}>
                <div className={cx('modal-content')}>
                    <img src="https://food.grab.com/static/images/ilus-basket-empty.svg" alt="Empty Basket" />
                    <h5 className={cx('modal-title')}>Start Grabbing Food!</h5>
                    <div className={cx('modal-caption')}>Add items to your basket and place order here.</div>
                    <p className={cx('continue-link')} onClick={onClose}>
                        Continue browsing
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartModal;
