import { IconProps } from './IconProps';

export const CheckIcon = (props: IconProps) => {
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
                d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6666 18.3333 12.5V7.49996C18.3333 3.33329 16.6666 1.66663 12.5 1.66663H7.49996C3.33329 1.66663 1.66663 3.33329 1.66663 7.49996V12.5C1.66663 16.6666 3.33329 18.3333 7.49996 18.3333Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.45837 10.0001L8.81671 12.3584L13.5417 7.64172"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
