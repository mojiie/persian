import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-full min-h-full flex flex-col items-center justify-center gap-2 pt-16">
            <h2 className="text-black-900 text-3xl">Not Found</h2>
            <p className="text-black-500 text-xl">
                Could not find requested resource
            </p>
            <Link
                href="/"
                className="text-white-100 rounded-lg flex items-center justify-center px-8 py-2 bg-purple-500 hover:opacity-80"
            >
                Return Home
            </Link>
        </div>
    );
}
