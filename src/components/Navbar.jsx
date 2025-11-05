import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5" id="home">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 shadow-md group-hover:scale-110 transition" />
          <span className="font-semibold tracking-tight text-slate-900 text-lg">Digiwelry</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#catalog" className="hover:text-slate-900 transition-colors">Catalog</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => alert('Secure checkout coming soon!')}
            className="px-3 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 active:scale-[0.99] transition"
          >
            Pay
          </button>
        </div>
      </div>
    </header>
  );
}
