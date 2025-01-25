import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './SocialButtons.module.scss';

const cx = classNames.bind(styles);

function SocialButtons() {
    return (
        <div className={cx('social-buttons')}>
            <button type="button" className={cx('social-button', 'facebook')}>
                <FontAwesomeIcon icon={faFacebookF} className={cx('icon')} />
                Facebook
            </button>
            <button type="button" className={cx('social-button', 'google')}>
                <FontAwesomeIcon icon={faGoogle} className={cx('icon')} />
                Google
            </button>
            <button type="button" className={cx('social-button', 'linkedin')}>
                <FontAwesomeIcon icon={faLinkedinIn} className={cx('icon')} />
                LinkedIn
            </button>
        </div>
    );
}

export default SocialButtons;
