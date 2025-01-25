import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

function Checkbox({ id, label }) {
    return (
        <div className={cx('checkbox')}>
            <input type="checkbox" id={id} className={cx('checkbox-input')} />
            <label htmlFor={id} className={cx('checkbox-label')}>
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
