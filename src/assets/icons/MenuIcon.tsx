import { IconProps } from './IconProps';

export const MenuIcon = (props: IconProps) => {
    const { className = 'stroke-black-500 w-4 h-4' } = props;

    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 12H21" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};
