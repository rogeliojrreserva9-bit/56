export const metadata = {
  title: "Projects | Rara Reserva",
};

const projects = [
  {
    id: 1,
    name: "Student Task Tracker",
    description: "A simple web app for organizing assignments and deadlines.",
  },
  {
    id: 2,
    name: "Campus Event Board",
    description: "A project that displays upcoming activities for students.",
  },
  {
    id: 3,
    name: "Personal Budget Planner",
    description: "A small budgeting tool for recording income and expenses.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-950">
        Projects
      </h1>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {project.name}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
