"use client";
import { create } from "zustand";

type Answers = {
  gear?: string[];
  flavor?: string;
  style?: string;
  strength?: string;
  vibe?: string;
  time?: string;
};
type Store = {
  answers: Answers;
  setAnswer: (key: keyof Answers, value: string | string[]) => void;
  reset: () => void;
};
export const useQuiz = create<Store>((set) => ({
  answers: {},
  setAnswer: (key, value) => set((state) => ({
    answers: { ...state.answers, [key]: value }
  })),
  reset: () => set({ answers: {} })
}));
