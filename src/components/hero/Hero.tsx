import Image from 'next/image';
import { useHero } from './useHero';
import { cn } from '@/utils';
import Link from 'next/link';

export const Hero = () => {
    const {} = useHero();

    return (
        <div className="container">
            <div className="w-full p-4 flex flex-col lg:flex-row pt-12 lg:justify-between">
                <div
                    className={cn(
                        'w-full h-[70dvw] relative border border-b-0 bg-white-100 border-grey-100 rounded-tl-lg rounded-tr-lg',
                        'lg:w-[690px] lg:h-[480px] lg:bg-transparent lg:border-none rounded-none lg:order-2',
                    )}
                >
                    <Image fill alt="hero" src="/imgs/hero.png" />
                </div>

                <div
                    className={cn(
                        'w-full flex flex-col bg-white-100 items-center p-4 gap-4 pb-8 lg:p-0',
                        'bg-transparent lg:items-start lg:flex-[2] lg:order-1 lg:pt-12 lg:gap-8 lg:bg-transparent',
                    )}
                >
                    <h2 className="text-black-900 text-center text-lg font-bold lg:text-2xl">
                        کمپین‌های بازاریابی و تبلیغاتی
                    </h2>

                    <p className="text-black-500 text-center text-sm font-bold leading-6 lg:text-lg lg:text-start">
                        آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟
                        مشاوره رایگان ما به شما کمک می‌کند تا مسیر موفقیت را
                        پیدا کنید. همین حالا قدم اول را بردارید!
                    </p>

                    <p className="text-black-400 text-center text-xs font-semibold lg:text-base lg:text-start">
                        جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
                    </p>

                    <Link
                        href={'/'}
                        className={cn(
                            'text-white-100 rounded-lg text-sm font-semibold flex items-center justify-center h-10 px-8 bg-purple-500',
                            'lg:text-lg lg:font-bold lg:py-3 hover:opacity-80 lg:h-14 transition-all duration-300',
                        )}
                    >
                        دریافت مشاوره
                    </Link>
                </div>
            </div>
        </div>
    );
};
