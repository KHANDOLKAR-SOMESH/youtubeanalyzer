import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-xl font-bold text-blue-400 cursor-pointer">YT Analyzer</span>
                </Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <Link href="/analytics" className="hover:text-blue-400">Analytics</Link>
                    <Link href="/premium" className="hover:text-blue-400">Premium</Link>
                </div>
            </div>
        </nav>
    );
}
