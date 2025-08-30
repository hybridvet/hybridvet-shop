import React, { useState } from "react";
import { Check, Instagram, Mail, CreditCard, Shield, Timer, Bike, Dumbbell, Heart } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "5k-beginner",
    name: "Plan za početnike – 5K",
    price: "€19",
    desc: "4 tjedna do prve 5K utrke. 3 treniranja tjedno + mobilnost.",
    features: ["3 treninga tjedno", "Video upute za mobilnost", "PDF + Google Sheets verzija"],
    icon: <RunnerIcon />,
    checkoutUrl: "#",
    badge: "Najbolje za početak",
  },
  {
    id: "half-tri",
    name: "Triatlon – Half Distance",
    price: "€49",
    desc: "12-tjedni strukturirani plan za half distance (70.3).",
    features: ["Periodizacija: base/build/peak", "Plivanje + Bicikl + Trčanje", "RPE/HR/zona snage"],
    icon: <TriIcon />,
    checkoutUrl: "#",
    badge: "Popularno",
  },
  {
    id: "hybrid-gym",
    name: "HybridVet – Snaga + izdržljivost",
    price: "€29",
    desc: "6 tjedana za gradnju snage bez žrtvovanja kondicije.",
    features: ["4 treninga tjedno", "Superset strukture + intervali", "Video demonstracije (linkovi)"],
    icon: <HybridIcon />,
    checkoutUrl: "#",
    badge: "Novo",
  },
];

export default function LinkInBioShop() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-sky-500/10 to-emerald-500/10" />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
              <Shield className="w-4 h-4" />
              Programi provjereni u praksi
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Kupite moje <span className="bg-gradient-to-r from-fuchsia-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">planove treninga</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">Struktura. Dosljednost. Rezultati. Preuzmite plan odmah i krenite danas – bez pretplate.</p>
            <div className="mt-6 inline-flex items-center gap-4 text-neutral-400 justify-center">
              <div className="flex items-center gap-2"><Timer className="w-4 h-4"/> Instant download</div>
              <div className="flex items-center gap-2"><CreditCard className="w-4 h-4"/> Sigurno plaćanje</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4"/> 7 dana garancije</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid md:grid-cols-3 gap-6 -mt-10">
          {PRODUCTS.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 shadow-xl">
              {p.badge && (<span className="absolute -top-3 left-4 rounded-full bg-emerald-500 text-white text-xs px-3 py-1 shadow">{p.badge}</span>)}
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-neutral-300 mt-1">{p.desc}</p>
              <div className="mt-4 text-3xl font-bold">{p.price}<span className="text-base font-normal text-neutral-400"> jednokratno</span></div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={p.checkoutUrl} className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-black font-medium py-3 hover:bg-neutral-200 transition">Kupi sada</a>
              <p className="mt-2 text-xs text-neutral-400">PDF + Excel predložak uključeni.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter / kontakt */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Želiš popust i nove planove prvi?</h3>
              <p className="text-neutral-300">Upiši email – šaljem 1-2× mjesečno, bez spama.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tvoj@email.com" className="flex-1 md:w-72 rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" />
              <button className="rounded-xl bg-emerald-500 px-4 py-3 font-medium hover:bg-emerald-400 transition" type="submit">Prijavi se</button>
            </form>
          </div>
          {submitted && (<p className="mt-3 text-sm text-emerald-400">Hvala! Provjeri inbox za potvrdu prijave.</p>)}
        </div>
        <div className="mt-6 flex items-center justify-between text-neutral-400 text-sm">
          <a href="https://instagram.com/your_handle" className="inline-flex items-center gap-2 hover:text-white transition"><Instagram className="w-4 h-4"/> @your_handle</a>
          <a href="mailto:kontakt@hybridvet.com" className="inline-flex items-center gap-2 hover:text-white transition"><Mail className="w-4 h-4"/> kontakt@hybridvet.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-neutral-400 text-xs">
        <p>© {new Date().getFullYear()} HybridVet – Sva prava pridržana.</p>
        <p className="mt-2">Izjava o odricanju odgovornosti: uvijek se savjetujte s liječnikom prije početka programa.</p>
      </footer>
    </div>
  );
}

function RunnerIcon(){ return (<div className="p-2"><Heart className="w-6 h-6"/></div>); }
function TriIcon(){ return (<div className="p-2 flex"><Bike className="w-6 h-6"/></div>); }
function HybridIcon(){ return (<div className="p-2 flex"><Dumbbell className="w-6 h-6"/></div>); }
