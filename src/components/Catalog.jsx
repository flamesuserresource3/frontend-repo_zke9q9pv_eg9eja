import React from 'react';

const products = [
  {
    id: 'ring-aurora',
    name: 'Aurora Halo Ring',
    price: 899,
    accent: 'from-cyan-300 via-sky-400 to-indigo-500',
    emoji: '💎',
  },
  {
    id: 'necklace-lumen',
    name: 'Lumen Diamond Necklace',
    price: 1290,
    accent: 'from-rose-300 via-fuchsia-400 to-purple-500',
    emoji: '✨',
  },
  {
    id: 'earrings-nova',
    name: 'Nova Stud Earrings',
    price: 420,
    accent: 'from-amber-300 via-orange-400 to-pink-500',
    emoji: '🌟',
  },
  {
    id: 'bracelet-arc',
    name: 'Arc Platinum Bracelet',
    price: 690,
    accent: 'from-emerald-300 via-teal-400 to-cyan-500',
    emoji: '💠',
  },
];

function Currency({ value }) {
  return <span>${value.toLocaleString()}</span>;
}

export default function Catalog() {
  const handleBuy = (item) => {
    alert(`Added to bag: ${item.name}`);
  };
  const handlePay = (item) => {
    alert(`Proceeding to payment for: ${item.name}`);
  };

  return (
    <section id="catalog" className="relative py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Featured Collection</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Carefully curated pieces that reflect light and craft with every angle. Explore the highlights of Digiwelry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <article key={item.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-44 w-full bg-gradient-to-tr ${item.accent} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
                <span className="relative text-5xl drop-shadow-sm select-none" aria-hidden>{item.emoji}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 leading-tight">{item.name}</h3>
                <p className="mt-1 text-slate-600 text-sm">
                  <Currency value={item.price} />
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleBuy(item)}
                    className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 active:scale-[0.99] transition"
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePay(item)}
                    className="px-4 py-2 rounded-full border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 text-sm"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="about" className="mt-20 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">About Digiwelry</h3>
            <p className="mt-2 text-slate-600">
              Digiwelry blends artistic craftsmanship with futuristic design. Our premium catalog celebrates crystalline forms,
              luminous finishes, and timeless silhouettes — designed for those who appreciate elegance with a modern edge.
            </p>
          </div>
          <div id="contact" className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-slate-900">Concierge</h4>
            <p className="mt-1 text-slate-600 text-sm">Looking for a bespoke piece or gift advice? Our team is here to help.</p>
            <a
              href="mailto:concierge@digiwelry.com"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
