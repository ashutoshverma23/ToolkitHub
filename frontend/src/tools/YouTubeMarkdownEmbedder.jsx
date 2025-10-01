import React, { useState } from "react";
// import { FaYoutube } from "react-icons/fa6";

const YouTubeMarkdownEmbedder = () => {
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("Watch this video on YouTube");
  const [videoId, setVideoId] = useState(null);

  // Extract video ID from YouTube link
  const extractVideoId = (link) => {
    try {
      const urlObj = new URL(link);
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      } else if (
        urlObj.hostname.includes("youtube.com") &&
        urlObj.searchParams.get("v")
      ) {
        return urlObj.searchParams.get("v");
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  const handleGenerate = () => {
    const id = extractVideoId(url);
    setVideoId(id);
  };

  const markdown =
    videoId &&
    `[![${label}](https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)](${url})\n\n### [${label}](${url})`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="bg-slate-900 text-white p-6 rounded-2xl max-w-2xl w-full space-y-4 shadow-lg">
        <h2 className="text-2xl font-bold">
          🎥 YouTube Markdown Embed Generator
        </h2>

        <input
          type="text"
          placeholder="Paste YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="text"
          placeholder="Video label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition"
        >
          Generate Markdown
        </button>

        {videoId && (
          <div className="space-y-4">
            {/* Thumbnail Preview */}
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={label}
                className="rounded-lg shadow-md"
              />
              {/* Optional YouTube icon overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-red-600 text-6xl drop-shadow-lg" />
              </div> */}
            </div>

            {/* Markdown Output */}
            <div>
              <p className="font-semibold mb-2">📋 Markdown Output:</p>
              <pre className="bg-slate-800 p-4 rounded-lg text-sm whitespace-pre-wrap">
                {markdown}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeMarkdownEmbedder;
