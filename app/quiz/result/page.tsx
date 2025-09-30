"use client";
import { useQuiz } from "../../../lib/store";
import ResultCard from "../../../components/ResultCard";
import { evaluate } from "../../../lib/scoring";

export default function ResultPage() {
  const { answers } = useQuiz() as any;
  const { pick, product } = evaluate(answers);

  return (
    <main className="min-h-screen p-5 md:p-10 max-w-3xl mx-auto space-y-6">
      <ResultCard
        title={pick.title}
        bean={product ? product.title : pick.bean}
        method={pick.method}
        steps={pick.steps}
        persona={pick.persona}
        productUrl={product?.productUrl}
      />
      <div className="pt-4">
        <a href="/quiz/gear" className="underline">Try another idea</a>
      </div>
    </main>
  );
}
