// routes.js
import { createBrowserRouter } from 'react-router-dom';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Home from '~/pages/Home';
import Restaurant from '~/pages/Restaurant';
import Profile from '~/pages/Profile';
import Checkout from '~/pages/Checkout';
import Cuisines from '~/pages/Cuisines';
import ForgotPassword from '~/pages/ForgotPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />, 
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/forgotpassword',
        element: <ForgotPassword />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/restaurant',
        element: <Restaurant />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
    {
        path: '/cuisines',
        element: <Cuisines />,
    },
]);

export default router;
