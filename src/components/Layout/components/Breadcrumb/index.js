import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className={cx("breadcrumb")}>
            <Link to="/" className={cx("breadcrumb-link")}>Trang chủ</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={index} className={cx("breadcrumb-item")}>
                        <span className={cx("breadcrumb-separator")}>›</span>
                        {!isLast ? (
                            <Link to={routeTo} className={cx("breadcrumb-link")}>{decodeURIComponent(name)}</Link>
                        ) : (
                            <span className={cx("breadcrumb-active")}>{decodeURIComponent(name)}</span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
