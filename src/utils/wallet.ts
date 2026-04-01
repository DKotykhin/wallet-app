export const MAX_BALANCE = 1500;

export function randomBalance(): number {
  return parseFloat((Math.random() * MAX_BALANCE).toFixed(2));
}

function getSeasonDay(date: Date): number {
  const month = date.getMonth() + 1; // 1–12
  const year = date.getFullYear();

  let seasonStartMonth: number;
  let seasonStartYear: number;

  if (month >= 3 && month <= 5) {
    seasonStartMonth = 3;
    seasonStartYear = year; // Spring: Mar 1
  } else if (month >= 6 && month <= 8) {
    seasonStartMonth = 6;
    seasonStartYear = year; // Summer: Jun 1
  } else if (month >= 9 && month <= 11) {
    seasonStartMonth = 9;
    seasonStartYear = year; // Autumn: Sep 1
  } else {
    seasonStartMonth = 12; // Winter: Dec 1
    seasonStartYear = month === 12 ? year : year - 1;
  }

  const seasonStart = new Date(seasonStartYear, seasonStartMonth - 1, 1);
  const current = new Date(year, date.getMonth(), date.getDate());
  const msPerDay = 1000 * 60 * 60 * 24;
  // Math.round handles DST edge cases where a day can be 23 or 25 hours
  return Math.round((current.getTime() - seasonStart.getTime()) / msPerDay) + 1;
}

export function calculateDailyPoints(date: Date): number {
  const day = getSeasonDay(date);
  if (day === 1) return 2;
  if (day === 2) return 3;

  let prev2 = 2;
  let prev1 = 3;
  for (let i = 3; i <= day; i++) {
    const current = prev2 + 0.6 * prev1;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

export function formatPoints(points: number): string {
  const rounded = Math.round(points);
  if (rounded > 1000) {
    return `${Math.round(rounded / 1000)}k`;
  }
  return rounded.toString();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (diffDays < 7) {
    return date.toLocaleDateString(undefined, { weekday: "long" });
  }
  return date.toLocaleDateString();
}
