'use client';

import { cn } from '@/utils';
import { useFAQ } from './useFAQ';
import { MinusIcon, PlusIcon } from '@/assets/icons';

export const FAQ = () => {
    const { faqs, openIndex, toggleAccordion } = useFAQ();

    return (
        <div className="container p-4">
            <div
                className={cn(
                    'flex flex-col gap-8 lg:flex-row lg:justify-between',
                    'lg:bg-white-100 lg:py-20 lg:px-10 lg:rounded-lg',
                )}
            >
                <div className="flex flex-col gap-4 lg:w-4/12">
                    <h2 className="text-lg font-bold text-black-900 text-center lg:text-start">
                        FAQ
                    </h2>

                    <p className="text-base font-bold text-black-900 text-center lg:text-start">
                        سوالات متداولی که از ما می‌پرسید
                    </p>

                    <p className="text-base font-medium text-black-500 hidden lg:block text-start">
                        سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا
                        پاسخ داده شده اند:
                    </p>
                </div>

                <div className="flex flex-col gap-4 lg:flex-[2]">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={`faq-item-key${index}`}
                                className="border rounded-lg border-grey-100 bg-white-100"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={cn(
                                        'w-full flex justify-between items-center px-4 py-2 text-xs text-black-900 font-bold',
                                        'lg:px-6 lg:py-4 lg:text-base hover:border-opacity-75',
                                    )}
                                >
                                    <span className="text-current">
                                        {faq.question}
                                    </span>

                                    <span className="relative w-5 h-5">
                                        <PlusIcon
                                            className={cn(
                                                'absolute inset-0 w-5 h-5 stroke-grey-800 transition-opacity duration-500',
                                                isOpen
                                                    ? 'opacity-0'
                                                    : 'opacity-100',
                                            )}
                                        />
                                        <MinusIcon
                                            className={cn(
                                                'absolute inset-0 w-5 h-5 stroke-grey-800 transition-opacity duration-500',
                                                isOpen
                                                    ? 'opacity-100'
                                                    : 'opacity-0',
                                            )}
                                        />
                                    </span>
                                </button>

                                <div
                                    className={cn(
                                        'text-xs text-black-500 overflow-hidden transition-all duration-300 lg:text-base',
                                        isOpen
                                            ? 'max-h-40 opacity-100 px-4 py-2'
                                            : 'max-h-0 opacity-0 px-4 py-0',
                                    )}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
