# YouTube Downloader

A full-stack YouTube downloader built with Node.js, Express, and yt-dlp.

## Features

* Extract video metadata
* Display video thumbnail
* Display title and channel name
* Display upload date
* Display view count
* Display duration
* Fetch available video/audio formats
* Select download format
* Download videos directly using yt-dlp

## Tech Stack

* Node.js
* Express.js
* yt-dlp
* HTML
* JavaScript
* Fetch API

## Installation

```bash
npm install
pip install yt-dlp
```

## Run

Start the backend:

```bash
node app.js
```

Open:

```txt
index.html
```

in your browser.

## Project Structure

```txt
node-learning/
│
├── app.js
├── index.html
├── package.json
├── package-lock.json
├── downloads/
└── README.md
```

## How It Works

1. Enter a YouTube URL.
2. Fetch metadata using yt-dlp.
3. Display available formats.
4. Select a format.
5. Download the video/audio.

## Screenshots

![Metadata Page](image.png)
![Download preview](image-1.png)

## Future Improvements

* Better UI with CSS
* Download progress indicator
* Best quality video + audio merging
* Chrome Extension integration
* Playlist support
* AI-generated video documentation


