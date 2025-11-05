import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Digiwelry. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#catalog" className="hover:text-slate-900">Catalog</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
