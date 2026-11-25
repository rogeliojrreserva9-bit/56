export const metadata = { title: "About | Rara Reserva", description: 
  "Learn more about me" };
  const projects = [
    { id: 1, name: "LOANS", description: "An online shopping website built with React and Node.js" },
    { id: 2, name: "Online booking system", description: "A personal portfolio website built with Next.js and Tailwind CSS" },
    { id: 3, name: "BLOG WEBSITE", description: "A blog website built with Gatsby and GraphQL" },
  ]

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-950">About</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
        My name is Rara Reserva. I am a third-year BSIT student who enjoys
        learning programming and developing websites.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
        I want to keep improving my technical skills and build projects that
        solve practical problems.
      </p>
    </main>
  );
}
