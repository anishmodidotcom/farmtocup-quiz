import data from "../content/logic.json";

export type Answers = {
  gear?: string[];
  flavor?: string;
  style?: string;
  strength?: string;
  vibe?: string;
  time?: string;
};

type Drink = typeof data.drinks[number];

function gearAllows(drink: Drink, gear: string[]) {
  if (!drink.requiredGear || drink.requiredGear.length === 0) return true;
  return drink.requiredGear.some((g: string) => gear.includes(g));
}

export function evaluate(answers: Answers) {
  const gear = answers.gear || [];
  const candidates = data.drinks.filter((d: any) => gearAllows(d, gear));

  const beanScores: Record<string, number> = {};
  const familyScores: Record<string, number> = {};

  const flavor = answers.flavor as keyof typeof data.weights["flavor→bean"] | undefined;
  if (flavor && (data as any).weights["flavor→bean"][flavor]) {
    Object.entries((data as any).weights["flavor→bean"][flavor]).forEach(([bean, val]) => {
      beanScores[bean] = (beanScores[bean] || 0) + (val as number);
    });
  }

  const style = answers.style as keyof typeof data.weights["style→family"] | undefined;
  if (style && (data as any).weights["style→family"][style]) {
    Object.entries((data as any).weights["style→family"][style]).forEach(([fam, val]) => {
      familyScores[fam] = (familyScores[fam] || 0) + (val as number);
    });
  }

  const strength = answers.strength as keyof typeof data.weights["strength"] | undefined;
  if (strength && (data as any).weights["strength"][strength]) {
    Object.entries((data as any).weights["strength"][strength]).forEach(([key, val]) => {
      beanScores[key] = (beanScores[key] || 0) + (val as number);
      familyScores[key] = (familyScores[key] || 0) + (val as number);
    });
  }

  const vibe = answers.vibe as keyof typeof data.weights["vibe"] | undefined;
  if (vibe && (data as any).weights["vibe"][vibe]) {
    Object.entries((data as any).weights["vibe"][vibe]).forEach(([key, val]) => {
      beanScores[key] = (beanScores[key] || 0) + (val as number);
      familyScores[key] = (familyScores[key] || 0) + (val as number);
    });
  }

  const time = answers.time as keyof typeof data.weights["time"] | undefined;
  if (time && (data as any).weights["time"][time]) {
    Object.entries((data as any).weights["time"][time]).forEach(([key, val]) => {
      beanScores[key] = (beanScores[key] || 0) + (val as number);
      familyScores[key] = (familyScores[key] || 0) + (val as number);
    });
  }

  const scored = candidates.map((d: any) => {
    const beanScore = beanScores[d.bean] || 0;
    const famScore = familyScores[d.family] || 0;
    return { drink: d, score: beanScore + famScore };
  }).sort((a: any, b: any) => b.score - a.score);

  const pick = scored.length > 0 ? scored[0].drink : (data.drinks as any)[0];
  const product = (data.products as any).find((p: any) => p.id === pick.bean);
  return { pick, product };
}
