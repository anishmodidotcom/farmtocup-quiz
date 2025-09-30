export default function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div className="h-full bg-cta transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}
