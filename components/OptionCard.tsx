"use client";
import { motion } from "framer-motion";

export default function OptionCard({
  selected,
  icon,
  label,
  onClick
}: {
  selected?: boolean;
  icon?: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-2xl border p-4 md:p-6 text-center shadow-sm transition ${
        selected ? "border-cta bg-white" : "border-transparent bg-white/70 hover:bg-white"
      }`}
    >
      {icon ? (
        <img src={`/icons/${icon}.svg`} alt="" className="w-10 h-10 mb-3 opacity-90" />
      ) : null}
      <span className="font-medium">{label}</span>
    </motion.button>
  );
}
