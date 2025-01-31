import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cx(styles.footer)}>
            <div className={cx(styles.section)}>
                <img
                    src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
                    alt="GrabFood Logo"
                    className={cx(styles.logo)}
                />
            </div>
            <hr
                style={{
                    marginTop: '15px',
                    borderColor: 'rgba(121, 120, 120, 0.2)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    position: 'relative',
                }}
            />
            <div className={cx(styles.container)}>
                <div className={cx(styles.section)}>
                    <ul className={cx(styles.links)}>
                        <li>
                            <a href="#">Về GrabFood</a>
                        </li>
                        <li>
                            <a href="#">Mở quán trên GrabFood</a>
                        </li>
                        <li>
                            <a href="#">Trở thành tài xế Grab</a>
                        </li>
                        <li>
                            <a href="#">Về Grab</a>
                        </li>
                        <li>
                            <a href="#">Trung tâm hỗ trợ</a>
                        </li>
                        <li>
                            <a href="#">Câu hỏi thường gặp</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className={cx(styles.section)}>
                    <div className={cx(styles.socialIcons)}>
                        <a href="#" className={cx(styles.icon)}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className={cx(styles.icon)}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className={cx(styles.icon)}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    marginTop: '15px',
                    borderColor: 'rgba(121, 120, 120, 0.2)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    position: 'relative',
                }}
            />
            <div className={cx(styles.footerBottom)}>
                <div className={cx(styles.downloadButtons)}>
                    <img
                        src="https://food.grab.com/static/images/logo-appstore.svg"
                        alt="Download on the App Store"
                        className={cx(styles.appStore)}
                    />
                    <img
                        src="https://food.grab.com/static/images/logo-playstore.svg"
                        alt="Get it on Google Play"
                        className={cx(styles.googlePlay)}
                    />
                </div>
                <div className={cx(styles.copyright)}>
                    © 2025 Grab • <a href="#">Câu hỏi thường gặp</a> • <a href="#">Chính sách bảo mật</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
