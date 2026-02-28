export type FocusSession = {
  id: string;
  label?: string;
  startedAt: string;
  durationMinutes?: number;
  stoppedAt?: string;
};

export function health() {
  return { ok: true, service: "focus-timer-api" };
}
