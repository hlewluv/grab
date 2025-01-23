import { Component } from 'react';
import Home from '~/pages/Home';
import Restaurant from '~/pages/Restaurant';
import Profile from '~/pages/Profile';
import Checkout from '~/pages/Checkout';
import Cuisines from '~/pages/Cuisines';

const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/restaurant', Component: Restaurant },
    { path: '/profile', Component: Profile },
    { path: '/checkout', Component: Checkout, Layout: null },
    { path: '/cuisines', Component: Cuisines },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
