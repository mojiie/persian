import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'خانه',
};

export default function HomePage() {
    return (
        <div className="container h-full flex items-center justify-center">
            Home page
        </div>
    );
}
