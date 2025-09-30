"use client";
export default function ResultCard({
  title,
  bean,
  method,
  steps,
  persona,
  productUrl
}: {
  title: string;
  bean: string;
  method: string;
  steps: string[];
  persona: string;
  productUrl?: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow p-6 md:p-8 space-y-5">
      <h2 className="text-3xl md:text-4xl font-bold">Today’s drink: {title}</h2>
      <p className="opacity-90">
        Made with <b>{bean}</b> • Brew: <b>{method}</b>
      </p>
      <div className="grid gap-3">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <img src="/icons/shot.svg" className="w-5 h-5 mt-1 opacity-80" alt="" />
            <p>{s}</p>
          </div>
        ))}
      </div>
      <div className="inline-block bg-muted rounded-full px-4 py-2">{`You’re… ${persona}`}</div>
      {productUrl ? (
        <a
          className="inline-flex items-center justify-center bg-cta text-white px-5 py-3 rounded-xl"
          href={productUrl}
          target="_blank"
        >
          Buy the beans
        </a>
      ) : null}
    </div>
  );
}
