export const fetchRegister = async (fullname, email, phonenumber, username, password) => {
    try {
        // Lấy dữ liệu từ db.json
        const response = await fetch(`http://localhost:3001/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Kiểm tra xem email và số điện thoại đã tồn tại chưa
        const isEmailExist = data.some(user => user.email === email);
        const isPhoneExist = data.some(user => user.phonenumber === phonenumber);

        if (isEmailExist) {
            throw new Error('Email này đã được đăng ký. Vui lòng chọn email khác.');
        }

        if (isPhoneExist) {
            throw new Error('Số điện thoại này đã được đăng ký. Vui lòng chọn số điện thoại khác.');
        }

        // Tạo đối tượng người dùng mới
        const newUser = {
            id: data.length + 1, 
            fullname,
            email,
            phonenumber,  // Số điện thoại mới
            username,
            password, // Mật khẩu mới
        };

        // Gửi yêu cầu POST để lưu người dùng mới vào db.json
        const createResponse = await fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (!createResponse.ok) {
            throw new Error(`Error creating user! status: ${createResponse.status}`);
        }

        return newUser; // Trả về thông tin người dùng mới
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};
