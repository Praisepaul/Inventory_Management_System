import React from 'react';
import { Link } from 'react-router-dom';
import { iconsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home, path: '/dashboard' },
    { id: 2, title: 'Orders', image: iconsImgs.budget, path: '/orders' },
    { id: 3, title: 'Stocks', image: iconsImgs.report, path: '/stocks' },
    { id: 4, title: 'Add Stocks', image: iconsImgs.plus, path: '/add_stock' },
    { id: 5, title: 'Edit Stocks', image: iconsImgs.bills, path: '/edit_order' },
    { id: 6, title: 'Log Out', image: iconsImgs.alert, path: '/logout' },
];

// In your component rendering the navigation links
{navigationLinks.map((link) => (
    <Link to={link.path} key={link.id}>
        <img src={link.image} alt={link.title} />
        <span>{link.title}</span>
    </Link>
))}
