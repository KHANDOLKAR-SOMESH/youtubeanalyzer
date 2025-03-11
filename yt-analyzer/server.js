const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello"); 
})
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
