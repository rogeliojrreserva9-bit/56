import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Hello, my name is Rara Reserva
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          I am a third-year BSIT student who enjoys learning web development,
          programming, and building useful digital experiences.
        </p>

        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          See my projects
        </Link>
      </section>
    </main>
  );
}
