export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} YouTube Analyzer. All rights reserved.
        </p>
        <p className="text-xs">
          Built with ❤️ using by somesh using Next.js & Recharts
        </p>
      </footer>
    );
  }
  