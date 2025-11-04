import { Calendar, Users, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Highlights() {
  const items = [
    {
      icon: Calendar,
      title: "Jadwal",
      desc: "Kualifikasi online setiap akhir pekan, Grand Final offline bulan depan.",
      img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Format",
      desc: "5v5, BO3 untuk kualifikasi, BO5 di final. Draft pick resmi MLBB.",
      img: "https://images.unsplash.com/photo-1511715281055-61b508e07798?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: Shield,
      title: "Rules",
      desc: "Fair play, akun resmi, dilarang cheat/bug abuse. Verifikasi sebelum match.",
      img: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: MapPin,
      title: "Server",
      desc: "Lobby Asia Tenggara untuk kestabilan latency. Stream di YouTube & TikTok.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

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

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map(({ icon: Icon, title, desc, img }) => (
            <motion.div
              key={title}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 ring-1 ring-indigo-400/30">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
