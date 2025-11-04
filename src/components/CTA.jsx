import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-900 to-emerald-900 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Siap Menjadi Juara?
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-white/80"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Daftarkan timmu sekarang. Kuota terbatas, jangan sampai kehabisan slot!
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 16, delay: 0.15 }}
        >
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
        </motion.div>
        <p className="mt-6 text-xs text-white/60">Dengan mendaftar, kamu setuju dengan syarat dan ketentuan turnamen.</p>

        <motion.div
          className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {[1, 2, 3].map((i) => (
            <motion.img
              key={i}
              src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop`}
              alt={`Team highlight ${i}`}
              className="h-28 w-full rounded-lg object-cover opacity-90"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
