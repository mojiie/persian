'use client';

import Image from 'next/image';
import { cn } from '@/utils';
import { useRef, useEffect } from 'react';
import { useObstaclesSlider } from './useObstaclesSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { LeftIcon, RightIcon } from '@/assets/icons';

export const ObstaclesSlider = () => {
    const { swiperRef, obstacles } = useObstaclesSlider();
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation &&
            typeof swiperRef.current.params.navigation !== 'boolean'
        ) {
            swiperRef.current.params.navigation.prevEl =
                navigationPrevRef.current;
            swiperRef.current.params.navigation.nextEl =
                navigationNextRef.current;

            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [swiperRef.current]);

    return (
        <div className="w-full relative mb-8">
            <div className="w-full h-56 lg:h-60 bg-gradient-to-b from-purple-800 to-purple-500">
                <h2 className="text-lg font-bold text-white-100 lg:text-xl text-center py-8 px-4">
                    موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
                </h2>
            </div>

            <div className="absolute inset-x-0 -bottom-16">
                <div
                    className="relative w-full group container pr-4 xl:pr-0"
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                >
                    <div className="absolute inset-x-0 bottom-20 justify-between gap-4 pr-4 xl:pr-0 z-20 hidden lg:flex">
                        <div
                            ref={navigationPrevRef}
                            className="w-8 h-8 bg-white-100 rounded-lg border border-grey-100 flex items-center justify-center cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <RightIcon className="fill-grey-600" />
                        </div>

                        <div
                            ref={navigationNextRef}
                            className="w-8 h-8 bg-white-100 rounded-lg border border-grey-100 flex items-center justify-center cursor-pointer"
                            aria-label="Next slide"
                        >
                            <LeftIcon className="fill-grey-600" />
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={16}
                        slidesPerView="auto"
                        loop={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="w-full px-4"
                    >
                        {obstacles.map((item, index) => (
                            <SwiperSlide
                                key={`slide-item-key-${index}`}
                                style={{ width: '15rem' }}
                            >
                                <div
                                    className={cn(
                                        'w-full h-48 border bg-white-100 border-gray-200 bg-white rounded-lg py-3 px-4',
                                        'flex flex-col gap-4 items-center justify-start',
                                    )}
                                >
                                    <span className="w-8 h-8 relative lg:w-11 lg:h-11">
                                        <Image
                                            fill
                                            alt="icon"
                                            quality={100}
                                            src={item.icon}
                                            className="object-contain"
                                        />
                                    </span>

                                    <h3 className="text-xs font-bold text-black">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs font-medium text-black">
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
