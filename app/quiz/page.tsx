"use client";
import { useRouter } from "next/navigation";

export default function QuizIndex() {
  const router = useRouter();
  if (typeof window !== "undefined") router.replace("/quiz/gear");
  return null;
}
