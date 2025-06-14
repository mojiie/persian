import { IconProps } from './IconProps';

export const LeftIcon = (props: IconProps) => {
    const { className = 'fill-black-500 w-4 h-4' } = props;

    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M13.98 5.31999L10.77 8.52999L8.8 10.49C7.97 11.32 7.97 12.67 8.8 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z" />
        </svg>
    );
};
