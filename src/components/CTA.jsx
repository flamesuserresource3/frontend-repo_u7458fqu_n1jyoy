export default function CTA() {
  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-900 to-emerald-900 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Siap Menjadi Juara?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Daftarkan timmu sekarang. Kuota terbatas, jangan sampai kehabisan slot!
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Daftar via Google Form
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
          >
            Lihat Peraturan
          </a>
        </div>
        <p className="mt-6 text-xs text-white/60">Dengan mendaftar, kamu setuju dengan syarat dan ketentuan turnamen.</p>
      </div>
    </section>
  );
}
