"use client";
import { useRouter } from "next/navigation";
import type { Route } from "next";

export default function StepFooter({
  backHref,
  nextHref,
  disabled
}: {
  backHref?: string;
  nextHref: string;
  disabled?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-3 sticky bottom-0 bg-bg/70 backdrop-blur p-4 border-t border-muted">
      <button
        onClick={() => (backHref ? router.push(backHref as Route) : router.back())}
        className="px-4 py-2 rounded-lg border border-muted"
      >
        Back
      </button>
      <button
        disabled={disabled}
        onClick={() => router.push(nextHref as Route)}
        className={`px-5 py-2 rounded-lg text-white ${disabled ? "bg-gray-400" : "bg-cta hover:opacity-95"}`}
      >
        Next
      </button>
    </div>
  );
}
