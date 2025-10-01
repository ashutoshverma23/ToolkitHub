import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-8 px-6 overflow-hidden">
      {/* Circular Grid Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            {/* Grid pattern */}
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(16, 185, 129, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>

            {/* Radial mask to limit grid visibility */}
            <radialGradient id="fadeMask" r="60%" cx="50%" cy="50%">
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mask">
              <rect width="100%" height="100%" fill="url(#fadeMask)" />
            </mask>

            {/* Subtle glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blurred" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid only visible inside glow area */}
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            mask="url(#mask)"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/10 rounded-full blur-[180px]"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Powerful Toolkits for
              <span className="text-emerald-400"> Developers</span>
            </h1>
            <p className="text-xl text-slate-300">
              A collection of modern, efficient tools designed to streamline
              your development workflow and boost productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105">
                Browse Tools
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold text-lg transition">
                Documentation
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-emerald-400">15+</p>
                <p className="text-slate-400">Tools Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">5k+</p>
                <p className="text-slate-400">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">100%</p>
                <p className="text-slate-400">Open Source</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-slate-400">$ npm install toolkit-hub</div>
                <div className="text-emerald-400">
                  ✓ Package installed successfully
                </div>
                <div className="text-slate-400">$ toolkit init</div>
                <div className="text-blue-400">Creating new project...</div>
                <div className="text-emerald-400">✓ Ready to use!</div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-emerald-500/20 rounded-2xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
