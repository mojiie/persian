'use client';

import { usePathname } from 'next/navigation';
import { NavbarItemProps } from './NavbarItemProps';

export const useNavbar = () => {
    const pathname = usePathname();

    const navbarItems: NavbarItemProps[] = [
        {
            href: '/',
            title: 'خانه',
        },
        {
            href: '/web-design',
            title: 'طراحی سایت',
        },
        {
            href: '/marketing-campaigns',
            title: 'کمپین‌های بازاریابی و تبلیغاتی',
        },
        {
            href: '/automation',
            title: 'اتوماسیون و بازاریابی',
        },
        {
            href: '/content-creation',
            title: 'تولید محتوا',
        },
        {
            href: '/seo',
            title: 'سئو',
        },
        {
            href: '/contact',
            title: 'تماس با ما',
        },
    ];

    return { navbarItems, pathname };
};
