import { Trophy } from "lucide-react";

export default function PrizePool() {
  const tiers = [
    { place: "Juara 1", amount: "Rp 8.000.000", perks: ["Trophy", "Medali", "Merch"] },
    { place: "Juara 2", amount: "Rp 4.000.000", perks: ["Medali", "Merch"] },
    { place: "Juara 3", amount: "Rp 2.000.000", perks: ["Medali", "Merch"] },
    { place: "MVP", amount: "Rp 1.000.000", perks: ["Sertifikat"] },
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
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">
            <Trophy className="h-4 w-4" />
            Sponsor utama: Coming Soon
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.place}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{t.place}</h3>
                <Trophy className="h-5 w-5 text-yellow-300" />
              </div>
              <p className="mt-2 text-2xl font-extrabold text-yellow-200">{t.amount}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.perks.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
