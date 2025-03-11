"use client";
import { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import Footer from "./footer";
import Navbar from "./nav";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const analyzeVideo = async () => {
    setError("");
    try {
      const response = await axios.get(
        `https://youtubeanalyzer.vercel.app/analyze?url=${encodeURIComponent(url)}`
      );
      setData(response.data);
    } catch (err) {
      setError("Failed to analyze video.");
    }
  };

  return (
    <>
      <Navbar />
      <h1
        style={{ color: "#00aaff", marginBottom: "20px" }}
        className="text-3xl my-3.5 ml-3 font-extrabold"
      >
        YouTube Video Analyzer
      </h1>
      <div className="mx-12 sm:text-center">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="my-8 ml-auto bg-white rounded-md w-full h-8
          border-none
          sm:w-3xl"
        />
      </div>
      <div className="text-center">
        <button
          onClick={analyzeVideo}
          className="bg-blue-600 text-white w-32 h-7 rounded-3xl"
        >
          Analyse
        </button>
      </div>

      <div className="w-full bg-zinc-950 min-h-[30vh] overflow-x-hidden text-white">
        {error && <p style={{ color: "red" }}>{error}</p>}

        {data && (
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#1e1e1e",
              textAlign: "left",
            }}
          >
            {/* Cover Thumbnail */}
            <div
              style={{
                backgroundImage: `url(${data.thumbnail})`,
                // marginLeft:"60vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
              className=" sm:ml-[60vh] h-[300px] sm:mx-14 sm:h-[60vh] sm:w-[100vh] flex items-center justify-center "
            />

            <h2 className="py-6 m-[20px] text-xl font-bold sm:text-3xl text-center">
              {data.title}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                textAlign: "left",
                marginTop: "20px",
              }}
              className="
            p-1.5 *:my-6
              sm:ml-96
              "
            >
              <p>
                <strong>Duration:</strong> {data.duration} sec
              </p>
              <p>
                <strong>Views:</strong> {data.views}
              </p>
              <p>
                <strong>Likes:</strong> {data.likes}
              </p>
              <p>
                <strong>Dislikes:</strong> {data.dislikes}
              </p>
              <p>
                <strong>Comments:</strong> {data.comments}
              </p>
              <p>
                <strong>Total Playtime:</strong> {data.total_playtime} sec
              </p>
              <p>
                <strong>Subscriber Gain:</strong> {data.subscriber_gain}
              </p>
              <p>
                <strong>SEO Score:</strong> {data.seo_score}%
              </p>
            </div>

            {/* Engagement Chart */}
            <h3
              style={{ marginTop: "20px", color: "#00aaff" }}
              className="py-6 m-[20px] text-xl font-bold sm:text-3xl text-center"
            >
              Engagement Metrics
            </h3>

            <div className="sm:flex sm:flex-col gap-10 sm:items-center sm:justify-center">
              <BarChart
                width={350}
                height={300}
                data={[
                  { name: "Views", value: data.views },
                  { name: "Likes", value: data.likes },
                  { name: "Dislikes", value: data.dislikes },
                  { name: "Comments", value: data.comments },
                  { name: "Subscriber Gain", value: data.subscriber_gain || 0 },
                ]}
              >
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#00aaff" />
              </BarChart>

              {/* SEO Score Breakdown (Pie Chart) */}
              <h3 style={{ marginTop: "20px", color: "#00aaff" }} 
               className="py-6 m-[20px] text-xl font-bold sm:text-3xl text-center"
               >
                SEO Score Breakdown
              </h3>
              <PieChart width={400} height={300}>
                <Pie
                  data={[
                    { name: "Title Optimization", value: 30 },
                    { name: "Description Optimization", value: 40 },
                    { name: "Tags Optimization", value: 30 },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#00aaff"
                >
                  <Cell fill="#00ff99" />
                  <Cell fill="#ffcc00" />
                  <Cell fill="#ff4444" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>

              {/* Channel Growth Trend (Line Chart) */}
              <h3 style={{ marginTop: "20px", color: "#00aaff" }}
              className="py-6 m-[20px] text-xl font-bold sm:text-3xl text-center">
                Channel Growth
              </h3>
              <LineChart
                width={350}
                height={300}
                data={[
                  { name: "Total Videos", value: data.total_videos || 0 },
                  {
                    name: "Total Subscribers",
                    value: data.total_subscribers || 0,
                  },
                ]}
              >
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#00aaff" />
              </LineChart>
            </div>
          </div>
        )}

        {/* Video Tags Section */}
        {data && data.tags && data.tags.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-lg font-semibold" >Video Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ) : data ? (
          <p className="text-gray-400 mt-6">No tags available</p>
        ) : null}

        <Footer />
      </div>
    </>
  );
}
