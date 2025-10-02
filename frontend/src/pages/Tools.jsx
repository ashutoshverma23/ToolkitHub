import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YouTubeMarkdownEmbedder from "../tools/YouTubeMarkdownEmbedder";

const Tools = () => {
  const [activeTool, setActiveTool] = useState(null);

  const tools = [
    {
      id: "yt-embedder",
      name: "YouTube Markdown Embedder",
      description: "Embed YouTube videos inside Markdown with ease.",
      component: <YouTubeMarkdownEmbedder />,
    },
    // Add more tools later
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Available Tools</h1>

      {/* Tools List */}
      <div className="grid gap-6 md:grid-cols-2">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-5 bg-slate-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setActiveTool(tool)}
          >
            <h2 className="text-xl font-semibold text-emerald-400">
              {tool.name}
            </h2>
            <p className="text-slate-300 mt-2">{tool.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Active Tool Display */}
      <AnimatePresence>
        {activeTool && (
          <motion.div
            key={activeTool.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-6 bg-slate-900 border border-slate-700 rounded-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-emerald-400">
                {activeTool.name}
              </h2>
              <button
                className="text-red-400 hover:text-red-500 font-semibold"
                onClick={() => setActiveTool(null)}
              >
                Close
              </button>
            </div>
            {activeTool.component}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tools;
