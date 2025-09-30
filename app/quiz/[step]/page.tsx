"use client";
import data from "../../../content/logic.json";
import { useParams, useRouter } from "next/navigation";
import { useQuiz } from "../../../lib/store";
import OptionCard from "../../../components/OptionCard";
import ProgressBar from "../../../components/ProgressBar";
import StepFooter from "../../../components/StepFooter";

export default function StepPage() {
  const params = useParams<{ step: string }>();
  const stepId = params.step;
  const router = useRouter();
  const { answers, setAnswer } = useQuiz();

  const allQs = data.questions;
  const idx = allQs.findIndex((q: any) => q.id === stepId);
  if (idx === -1) {
    if (typeof window !== "undefined") router.replace("/quiz/gear");
    return null;
  }
  const q: any = allQs[idx];
  const total = allQs.length;

  const currentValue = (answers as any)[q.id];

  const toggle = (optId: string) => {
    if (q.multi) {
      const arr = Array.isArray(currentValue) ? currentValue.slice() : [];
      const i = arr.indexOf(optId);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(optId);
      setAnswer(q.id as any, arr);
    } else {
      setAnswer(q.id as any, optId);
    }
  };

  const nextHref = idx === total - 1 ? "/quiz/result" : `/quiz/${allQs[idx + 1].id}`;
  const backHref = idx === 0 ? "/quiz/gear" : `/quiz/${allQs[idx - 1].id}`;

  const disabled = q.multi
    ? !Array.isArray(currentValue) || (currentValue as any[]).length === 0
    : !currentValue;

  return (
    <main className="min-h-screen p-5 md:p-10 max-w-3xl mx-auto space-y-6">
      <div className="space-y-4">
        <ProgressBar step={idx + 1} total={total} />
        <h1 className="text-3xl md:text-4xl font-bold">{q.title}</h1>
        {q.helper ? <p className="opacity-80">{q.helper}</p> : null}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {q.options.map((opt: any) => {
          const sel = q.multi
            ? Array.isArray(currentValue) && (currentValue as string[]).includes(opt.id)
            : currentValue === opt.id;
          return (
            <OptionCard
              key={opt.id}
              selected={!!sel}
              icon={opt.icon}
              label={opt.label}
              onClick={() => toggle(opt.id)}
            />
          );
        })}
      </div>
      <StepFooter backHref={backHref} nextHref={nextHref} disabled={disabled} />
    </main>
  );
}
