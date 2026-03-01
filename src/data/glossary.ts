export interface GlossaryTerm {
  az: string;
  en: string;
  description?: string;
  link?: string;
}

export const glossary: GlossaryTerm[] = [
  {
    az: "tıxac nəzarəti",
    en: "congestion control",
    description:
      "Şəbəkədə tıxanmanın qarşısını almaq üçün istifadə edilən mexanizmlər.",
    link: "https://en.wikipedia.org/wiki/Network_congestion#Congestion_control",
  },
];

const lookupMap = new Map<string, GlossaryTerm>();

for (const term of glossary) {
  lookupMap.set(term.en.toLowerCase(), term);
  lookupMap.set(term.az.toLowerCase(), term);
}

export function lookupTerm(key: string): GlossaryTerm | undefined {
  return lookupMap.get(key.toLowerCase());
}
