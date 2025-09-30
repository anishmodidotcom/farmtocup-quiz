"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Find your next coffee drink ☕</h1>
        <p className="text-lg opacity-90">Answer 6 quick questions. Get a tailored recipe + beans.</p>
        <Link href="/quiz/gear">
          <button className="bg-cta text-white px-6 py-3 rounded-xl text-lg shadow hover:opacity-95 transition">
            Take the quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
