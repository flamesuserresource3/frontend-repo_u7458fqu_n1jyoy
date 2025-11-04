import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function PrizePool() {
  const tiers = [
    { place: "Juara 1", amount: "Rp 8.000.000", perks: ["Trophy", "Medali", "Merch"], img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop" },
    { place: "Juara 2", amount: "Rp 4.000.000", perks: ["Medali", "Merch"], img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop" },
    { place: "Juara 3", amount: "Rp 2.000.000", perks: ["Medali", "Merch"], img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" },
    { place: "MVP", amount: "Rp 1.000.000", perks: ["Sertifikat"], img: "https://images.unsplash.com/photo-1533108344127-cb2a76679d98?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <section id="prizes" className="relative bg-gradient-to-b from-black to-slate-950 py-16 text-white">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Prize Pool</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Total hadiah lebih dari Rp 15.000.000 beserta trophy, medali, dan merchandise eksklusif.
            </p>
          </div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            <Trophy className="h-4 w-4" />
            Sponsor utama: Coming Soon
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.place}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-28 w-full overflow-hidden">
                <img src={t.img} alt={t.place} className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{t.place}</h3>
                  <Trophy className="h-5 w-5 text-yellow-300" />
                </div>
                <p className="mt-2 text-2xl font-extrabold text-yellow-200">{t.amount}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.perks.map((p) => (
                    <motion.span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                      whileHover={{ scale: 1.06 }}
                    >
                      {p}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
