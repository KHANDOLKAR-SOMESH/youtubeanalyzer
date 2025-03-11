import Navbar from "../nav";
import Footer from "../footer";
export default function ComingSoon() {
    return (
        <>
        <Navbar/>
      <div className="w-full min-h-screen bg-black text-gold-400 p-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-yellow-400 animate-pulse">
            🚀 Premium Features Coming Soon! 🚀
          </h1>
  
          <p className="text-lg text-gray-300 mt-4">
            We are working on exclusive premium features to enhance your YouTube analytics experience.
            Stay tuned for game-changing tools that will take your insights to the next level!
          </p>
  
          <div className="mt-8 space-y-6">
            <div className="border border-yellow-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-yellow-400">📊 Advanced Video Analytics</h2>
              <p className="text-gray-400 mt-2">
                Get deeper insights into watch time, audience retention, and traffic sources.
              </p>
            </div>
  
            <div className="border border-yellow-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-yellow-400">🔍 SEO & Tag Optimization</h2>
              <p className="text-gray-400 mt-2">
                Discover high-ranking keywords and optimize your video tags for maximum reach.
              </p>
            </div>
  
            <div className="border border-yellow-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-yellow-400">📈 Competitor Analysis</h2>
              <p className="text-gray-400 mt-2">
                Compare your videos with competitors and find out what works best in your niche.
              </p>
            </div>
  
            <div className="border border-yellow-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-yellow-400">🔔 Real-Time Notifications</h2>
              <p className="text-gray-400 mt-2">
                Get instant alerts on video trends, ranking changes, and engagement spikes.
              </p>
            </div>
  
            <div className="border border-yellow-500 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-yellow-400">📅 Scheduled Reports</h2>
              <p className="text-gray-400 mt-2">
                Receive weekly or monthly reports straight to your inbox with detailed analytics.
              </p>
            </div>
          </div>
  
          <p className="text-lg text-gray-400 mt-6">
            🚀 **Stay Tuned!** These features will be available soon. Get ready for the ultimate YouTube analytics experience!
          </p>
  
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-md hover:bg-yellow-400 transition">
            Get Notified
          </button>
        </div>
      </div>
      <Footer/>
        </>
    );
  }
  