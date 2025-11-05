import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[72vh] w-full">
        <Spline
          scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient glow on top of the interactive scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Digiwelry
              </h1>
              <p className="mt-4 text-slate-700 text-lg md:text-xl">
                An elegant online catalog of premium jewelry — where crystalline design meets futuristic craft.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#catalog" className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm md:text-base hover:bg-slate-800 active:scale-[0.99] transition">
                  Explore Collection
                </a>
                <button
                  type="button"
                  onClick={() => alert('Instant Pay coming soon. Secure, fast, and delightful.')}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-800 bg-white/70 hover:bg-white shadow-sm text-sm md:text-base"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
