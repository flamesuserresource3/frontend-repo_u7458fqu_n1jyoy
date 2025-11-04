import { Rocket, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_60%)] blur-2xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 ring-1 ring-indigo-400/40">
            <Trophy className="h-5 w-5 text-indigo-300" />
          </div>
          <span className="text-lg font-semibold tracking-wide">MLBB Cup 2025</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#prizes" className="hover:text-white">Prize Pool</a>
          <a href="#highlights" className="hover:text-white">Highlights</a>
          <a href="#register" className="rounded-full bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-500">Daftar</a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-emerald-300" />
              Season Open — Registrasi Dibuka!
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Turnamen Mobile Legends
              <span className="block bg-gradient-to-r from-indigo-200 via-white to-emerald-200 bg-clip-text text-transparent">National Community Cup</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/70 md:text-lg">
              Kumpulkan squad terbaikmu dan buktikan di Land of Dawn! Format 5v5, sistem BO3, siaran langsung, dan hadiah menggiurkan.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#register" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
                Daftar Sekarang
              </a>
              <a href="#highlights" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Lihat Detail
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center md:max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">64</p>
                <p className="text-xs text-white/60">Slot Tim</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">Rp 15 Jt</p>
                <p className="text-xs text-white/60">Total Hadiah</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">Online</p>
                <p className="text-xs text-white/60">Qualifiers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-700/40 via-slate-800/50 to-emerald-700/30 p-4 shadow-2xl">
              <div className="grid h-full w-full place-items-center rounded-xl border border-white/10 bg-black/30">
                <Trophy className="h-16 w-16 text-indigo-200" />
                <p className="mt-3 text-center text-sm text-white/70">Siapkan strategi, raih piala kebanggaan komunitas!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
