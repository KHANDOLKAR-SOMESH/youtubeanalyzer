import Navbar from "../nav";
import Footer from "../footer";
export default function About() {
    return (
      <>
      <Navbar></Navbar>
      <div className="w-full min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            About Our YouTube Video Analyzer
          </h1>
  
          <p className="text-lg text-gray-300">
            Our <strong>YouTube Video Analyzer</strong> is designed to transform complex YouTube analytics into 
            easy-to-understand reports. Whether you're a content creator, marketer, or analyst, our tool 
            helps you decode YouTube video performance with ease.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8">Why Use Our Tool?</h2>
          <p className="text-gray-300 mt-2">
            Unlike traditional analytics platforms that provide complex graphs and statistics, our tool 
            simplifies the process. It offers a visually appealing, intuitive interface that highlights 
            key video performance metrics, making it accessible for everyone.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Instant insights into video views, likes, comments, and engagement rate.</li>
            <li>Compare performance with the last 10 videos uploaded on the channel.</li>
            <li>Extract video tags to improve YouTube SEO strategy.</li>
            <li>Competitive analysis by evaluating any public YouTube video.</li>
            <li>Simple, shareable reports for better collaboration.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8">How It Works</h2>
          <p className="text-gray-300 mt-2">
            Using our YouTube Video Analyzer is straightforward. Simply follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-300 mt-2 space-y-2">
            <li><strong>Enter the Video URL</strong> – Paste the YouTube video link into the input field.</li>
            <li><strong>Analyze the Video</strong> – Click the “Analyze” button to process the data.</li>
            <li><strong>View the Report</strong> – Instantly access key metrics in an easy-to-read format.</li>
            <li><strong>Share the Report</strong> – Copy and share the analytics with one click.</li>
          </ol>
  
          <h2 className="text-2xl font-semibold mt-8">Detailed Analytics Breakdown</h2>
          <p className="text-gray-300 mt-2">
            Our tool provides a structured report with insights into:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li><strong>Video Metrics:</strong> Engagement rate, views, likes, and comments.</li>
            <li><strong>Video Tags:</strong> Analyze the most effective keywords used.</li>
            <li><strong>Channel Insights:</strong> Check subscriber count, total views, and video count.</li>
            <li><strong>Comparison with Last 10 Videos:</strong> Track performance trends.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8">Competitive Analysis</h2>
          <p className="text-gray-300 mt-2">
            Want to study your competitors? Our tool allows you to analyze any public YouTube video to 
            understand what works best in your niche. Get insights into top-performing content and 
            optimize your strategy accordingly.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8">Pricing</h2>
          <p className="text-gray-300 mt-2">
            The best part? Our YouTube Video Analyzer is <strong>completely free</strong>. You can analyze an 
            unlimited number of videos at no cost. We also offer premium services like advanced channel 
            growth strategies, SEO optimization, and content marketing for YouTubers looking to 
            accelerate their success.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8">Pros & Cons</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>✅ 100% free to use</li>
            <li>✅ Analyze any YouTube video</li>
            <li>✅ Engagement rate and performance comparison</li>
            <li>✅ Intuitive report interface</li>
            <li>✅ Shareable reports</li>
            <li>❌ Does not provide average watch time (YouTube API restriction)</li>
            <li>❌ Does not include viewer location data (also restricted by YouTube API)</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
          <p className="text-gray-300 mt-2">
            Our YouTube Video Analyzer simplifies data interpretation for content creators and marketers. 
            With its intuitive reports and competitor analysis feature, you can easily optimize your YouTube 
            strategy and boost engagement. Whether you’re tracking your own performance or studying 
            competitors, this tool provides the insights you need – all for free!
          </p>
  
          <p className="text-lg font-semibold text-center text-green-400 mt-6">
            Ready to optimize your YouTube strategy? Try our YouTube Video Analyzer today!
          </p>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  