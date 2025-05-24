'use client';

import Link from 'next/link';
import { cn } from '@/utils';
import { useNavbar } from './useNavbar';

export const Navbar = () => {
    const { navbarItems, pathname } = useNavbar();

    return (
        <nav className="flex items-center justify-center gap-4">
            {navbarItems.map((item, index) => {
                const isActive = item.href === pathname;

                return (
                    <Link
                        href={item.href}
                        key={`nav-item-key-${index}`}
                        className={cn(
                            'text-sm font-medium hover:text-black-400 transition-all duration-500 font-[IRANSansWebMedium]',
                            isActive ? 'text-black-900' : 'text-black-200',
                        )}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
};
