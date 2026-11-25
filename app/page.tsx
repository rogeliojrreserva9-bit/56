
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1>Hello, my name is Rara reserva</h1>

      <p>
        I am a third-year BSIT student.
        I enjoy learning web development and programming.
        My goal is to become a successful developer.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block underline"
      >
        See my projects
      </Link>
    </main>
  );
}
