// type Words = [singular: string, plural: string];

export function singularOrPlural(verify: number, words: string[]) {
  if (verify > 1) return words[1];
  return words[0];
}
