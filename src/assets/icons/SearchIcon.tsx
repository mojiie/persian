import { IconProps } from './IconProps';

export const SearchIcon = (props: IconProps) => {
    const { className = 'stroke-black-500 w-4 h-4' } = props;

    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 22L20 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
