import Link from 'next/link';
import { cn } from '@/utils';
import { Navbar } from './navbar';
import { useHeader } from './useHeader';
import { MenuIcon, SearchIcon, UserIcon } from '@/assets/icons';

export const Header = () => {
    const { buttonStyles } = useHeader();

    return (
        <header className="w-full bg-white-100 fixed inset-x-0 top-0 z-50">
            <div className=" container flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                    <button className={`${buttonStyles} lg:hidden`}>
                        <MenuIcon className="stroke-black-500 w-6 h-6" />
                    </button>

                    <Link
                        href={'/'}
                        className={cn(
                            'bg-grey-100 text-grey-900 h-8 flex items-center justify-center rounded-lg font-semibold text-xs px-6',
                            'hover:bg-black-200 hover:text-black-900 transition-all duration-500 lg:h-10 lg:font-medium lg:text-lg lg:px-8',
                        )}
                    >
                        logo
                    </Link>
                </div>

                <div className="hidden lg:flex">
                    <Navbar />
                </div>

                <div className="flex items-center gap-4">
                    <button className={buttonStyles}>
                        <SearchIcon className="stroke-black-900 w-6 h-6 lg:w-7 lg:h-7" />
                    </button>

                    <button className={buttonStyles}>
                        <UserIcon className="stroke-black-900 w-6 h-6 lg:w-7 lg:h-7" />
                    </button>
                </div>
            </div>
        </header>
    );
};
