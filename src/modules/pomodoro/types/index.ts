import { TimeType } from "types";

export type TimerType = "work" | "break";

export interface PomodoroState {
  timeLimit: number;
  isRunning: boolean;
  time: TimeType;
  pausedAt: number;
  timerType: TimerType;
  finishedCount: number;
}
