import { cn } from '@/utils';

export const useHeader = () => {
    const buttonStyles = cn(
        'w-8 h-8 flex items-center justify-center border border-grey-100 rounded-lg',
        'lg:w-10 lg:h-10 hover:border-black-200 transition-all duration-500',
    );

    return { buttonStyles };
};
