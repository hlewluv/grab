import classNames from 'classnames/bind';
import styles from './ErrorMessage.module.scss';

const cx = classNames.bind(styles);

function ErrorMessage({ message }) {
    return message ? <div className={cx('error')}>{message}</div> : null;
}

export default ErrorMessage;
