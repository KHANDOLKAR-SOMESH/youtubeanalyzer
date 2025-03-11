import "./globals.css";
import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Free YouTube Video Analyzer & Downloader | Fast & Secure</title>
        <meta 
          name="description" 
          content="Analyze and download YouTube videos quickly with our free and secure tool. Get video insights, SEO metrics, and high-quality downloads in multiple formats." 
        />
        <meta 
          name="keywords" 
          content="YouTube downloader, video downloader, free YouTube download, online video analyzer, fast YouTube downloader, terabox downloader, YouTube to MP4, high-quality video download" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Brand or Name" />

        {/* Open Graph Meta Tags (For Social Media Sharing) */}
        <meta property="og:title" content="Free YouTube Video Analyzer & Downloader" />
        <meta 
          property="og:description" 
          content="Download and analyze YouTube videos in seconds. Get detailed insights and high-quality video downloads." 
        />
        <meta property="og:image" content="https://1024terabox.com" />
        <meta property="og:url" content="https://www.lenostube.com/en/youtube-video-analytics-checker/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (For Twitter Sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free YouTube Video Analyzer & Downloader" />
        <meta 
          name="twitter:description" 
          content="Download and analyze YouTube videos quickly with our free and secure tool." 
        />
        <meta name="twitter:image" content="https://www.lenostube.com/en/youtube-video-analytics-checker/" />

        {/* Canonical Tag to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://yourwebsite.com" />

        {/* Favicons for Different Devices */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema Markup for Google Search SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Video Analyzer & Downloader",
            "url": "https://yourwebsite.com",
            "image": "https://yourwebsite.com/preview-image.jpg",
            "description": "Analyze and download YouTube videos quickly with our free and secure tool. Get insights, SEO metrics, and high-quality downloads.",
            "author": {
              "@type": "Person",
              "name": "Your Brand"
            }
          })}
        </script>
      </head>
      <body className="w-screen bg-black">
        {children}
      </body>
    </html>
  );
}
