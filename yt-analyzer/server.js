const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.use(cors()); 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');  // Allow requests from any source
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// ✅ Handle preflight (OPTIONS) requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});


app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});
app.get("/analyze", async (req, res) => {
    const videoUrl = req.query.url;
    if (!videoUrl) {
        return res.status(400).json({ error: "Video URL is required" });
    }

    exec(`yt-dlp -J ${videoUrl}`, (error, stdout) => {
        if (error) {
            return res.status(500).json({ error: "Failed to fetch data" });
        }
        try {
            const videoData = JSON.parse(stdout);

            const seoScore = (videoData.title.length > 20 ? 30 : 0) +
                             (videoData.description?.length > 100 ? 40 : 0) +
                             (videoData.tags?.length > 5 ? 30 : 0);

            res.json({
                title: videoData.title,
                thumbnail: videoData.thumbnail,
                duration: videoData.duration,
                views: videoData.view_count,
                likes: videoData.like_count,
                dislikes: videoData.dislike_count,
                comments: videoData.comment_count,
                total_playtime: videoData.view_count * videoData.duration,
                subscriber_gain: videoData.channel_follower_count || "N/A",
                seo_score: seoScore,
                total_videos: videoData.channel_video_count || "N/A",
                total_subscribers: videoData.channel_follower_count || "N/A",
                tags: videoData.tags || [],
              });
        } catch (parseError) {
            res.status(500).json({ error: "Error parsing video data" });
        }
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
{
  console.log(`✅ Server is running on port ${PORT}`);
})
