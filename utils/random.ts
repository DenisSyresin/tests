// utils/random.ts

export type CategoryId =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export type HowDidId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type MrrId = 1 | 2 | 3 | 4 | 5 | 6 ;

export type InterestedId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomUnion<T extends number>(values: readonly T[]): T {
  return values[Math.floor(Math.random() * values.length)];
}

export function randomMultiUnion<T extends number>(
  values: readonly T[],
  minCount = 1,
  maxCount = values.length
): T[] {
  const count = randomInt(minCount, maxCount);
  const shuffled = [...values].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count) as T[];
}

export function randomEmail(base: string): string {
  return base.replace('@', `+${Date.now()}@`);
}

export function randomAppName(prefix = 'app'): string {
  return `${prefix}_${Date.now()}`;
}

export function randomSignUpOptions(): {
  howDid: HowDidId;
  mrr: MrrId;
  interested: InterestedId;
  category: CategoryId; 
} {
  const howDid = [1,2,3,4,5,6,7] as const;
  const mrr = [1,2,3,4,5,6] as const;
  const interested = [1,2,3,4,5,6,7] as const;
  const category = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ] as const;
    
  return {
    howDid: randomUnion(howDid),
    mrr: randomUnion(mrr),
    interested: randomUnion(interested),
    category: randomUnion(category),  
  };
}
