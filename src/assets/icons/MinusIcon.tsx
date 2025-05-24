// components/MinusIcon.tsx
import { IconProps } from './IconProps';

export const MinusIcon = (props: IconProps) => {
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
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 12H16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
