// src/api/login.js
import bcrypt from 'bcryptjs';

export const fetchLogin = async (usernameOrEmail, password) => {
    try {
        const response = await fetch(`http://localhost:3001/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Kiểm tra nếu usernameOrEmail là email hợp lệ hoặc phonenumber hợp lệ
        const user = data.find((user) => user.phonenumber === usernameOrEmail || user.email === usernameOrEmail);

        if (!user) {
            throw new Error('Tên người dùng hoặc email/số điện thoại không đúng.');
        }

        if (user.password === password) {
            return user;
        } else {
            throw new Error('Mật khẩu không đúng.');
        }
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        throw error;
    }
};

// Hàm kiểm tra email hợp lệ
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
