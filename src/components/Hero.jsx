import { Rocket, Trophy, Play } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-black text-white md:h-screen">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <motion.div
          className="absolute -top-24 left-1/2 h-[720px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.28),transparent_60%)] blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28),transparent_60%)] blur-3xl"
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <motion.div
          className="flex items-center gap-3"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 ring-1 ring-indigo-400/40">
            <Trophy className="h-5 w-5 text-indigo-300" />
          </div>
          <span className="text-lg font-semibold tracking-wide">MLBB Cup 2025</span>
        </motion.div>
        <nav className="hidden items-center gap-6 text-sm text-white/85 md:flex">
          <a href="#prizes" className="transition hover:text-white">Prize Pool</a>
          <a href="#highlights" className="transition hover:text-white">Highlights</a>
          <a href="#register" className="rounded-full bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-500">Daftar</a>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[calc(100%-84px)] max-w-6xl items-center px-6 md:px-10">
        <div className="grid w-full items-center gap-10 md:grid-cols-2">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85 backdrop-blur"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <Rocket className="h-3.5 w-3.5 text-emerald-300" />
              Season Open — Registrasi Dibuka!
            </motion.div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Turnamen Mobile Legends
              <span className="block bg-gradient-to-r from-indigo-200 via-white to-emerald-200 bg-clip-text text-transparent">National Community Cup</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/80 md:text-lg">
              Kumpulkan squad terbaikmu dan buktikan di Land of Dawn! Format 5v5, sistem BO3, siaran langsung, dan hadiah menggiurkan.
            </p>
            <motion.div
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.a
                href="#register"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Daftar Sekarang
              </motion.a>
              <motion.a
                href="#highlights"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Detail
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 text-center md:max-w-md"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {["64", "Rp 15 Jt", "Online"].map((val, i) => (
                <motion.div
                  key={val}
                  className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                >
                  <p className="text-2xl font-bold text-white">{val}</p>
                  <p className="text-xs text-white/65">
                    {i === 0 ? "Slot Tim" : i === 1 ? "Total Hadiah" : "Qualifiers"}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right panel: compact media card floating above 3D */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.3),transparent_60%)] blur-2xl" />
            <motion.div
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-700/30 via-slate-800/30 to-emerald-700/25 p-2 shadow-2xl backdrop-blur-md"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 160, damping: 16 }}
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop"
                  alt="Esports Team celebrating victory"
                  className="h-full w-full object-cover"
                />
                <motion.button
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur-md"
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="h-4 w-4 text-emerald-300" />
                  Tonton Trailer
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
