import { Calendar, Users, Shield, MapPin } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: Calendar,
      title: "Jadwal",
      desc: "Kualifikasi online setiap akhir pekan, Grand Final offline bulan depan.",
    },
    {
      icon: Users,
      title: "Format",
      desc: "5v5, BO3 untuk kualifikasi, BO5 di final. Draft pick resmi MLBB.",
    },
    {
      icon: Shield,
      title: "Rules",
      desc: "Fair play, akun resmi, dilarang cheat/bug abuse. Verifikasi sebelum match.",
    },
    {
      icon: MapPin,
      title: "Server",
      desc: "Lobby Asia Tenggara untuk kestabilan latency. Stream di YouTube & TikTok.",
    },
  ];

  return (
    <section id="highlights" className="relative bg-slate-950 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Highlight Turnamen</h2>
          <p className="mt-2 text-white/70">
            Semua yang perlu kamu tahu sebelum daftar dan bertanding.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 ring-1 ring-indigo-400/30">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
