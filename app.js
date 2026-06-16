const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.post("/download", (req, res) => {
    const url = req.body.url;
    console.log(req.body);
    res.json({
        receivedUrl: url
    });
});

const { exec } = require("child_process");

app.post("/metadata", (req, res) => {

    const url = req.body.url;

    exec(
        `python -m yt_dlp -J "${url}"`,
        (error, stdout, stderr) => {

            if (error) {
                return res.status(500).json({
                    error: error.message
                });
            }

            const videoData = JSON.parse(stdout);

            res.json({
    title: videoData.title,
    channel: videoData.channel,
    thumbnail: videoData.thumbnail,
    duration: videoData.duration
});
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});