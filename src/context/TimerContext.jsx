import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  // Countdown timer state
  const [cdTotal, setCdTotal] = useState(25 * 60);
  const [cdRemaining, setCdRemaining] = useState(25 * 60);
  const [cdRunning, setCdRunning] = useState(false);
  const [cdFinished, setCdFinished] = useState(false);

  // Stopwatch state
  const [swElapsed, setSwElapsed] = useState(0);
  const [swRunning, setSwRunning] = useState(false);
  const [swLaps, setSwLaps] = useState([]);

  // Alarm state
  const [alarmTarget, setAlarmTarget] = useState(null); // Date object
  const [alarmFired, setAlarmFired] = useState(false);

  // Music auto-stop
  const [musicAutoStop, setMusicAutoStop] = useState(true);
  const [timerFinishedSignal, setTimerFinishedSignal] = useState(0); // increment to signal finish

  const cdIntervalRef = useRef(null);
  const swIntervalRef = useRef(null);
  const alarmIntervalRef = useRef(null);
  const notifiedRef = useRef(false);

  // --- Countdown ---
  useEffect(() => {
    if (cdRunning && cdRemaining > 0) {
      cdIntervalRef.current = setInterval(() => {
        setCdRemaining(r => {
          if (r <= 1) {
            setCdRunning(false);
            setCdFinished(true);
            setTimerFinishedSignal(s => s + 1);
            clearInterval(cdIntervalRef.current);
            // Browser notification
            if (Notification.permission === 'granted') {
              new Notification('RevisionFlow Timer', { body: 'Countdown finished!' });
            }
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    } else {
      clearInterval(cdIntervalRef.current);
    }
    return () => clearInterval(cdIntervalRef.current);
  }, [cdRunning]);

  const cdStart = useCallback(() => { setCdFinished(false); setCdRunning(true); }, []);
  const cdPause = useCallback(() => setCdRunning(false), []);
  const cdReset = useCallback((total) => {
    setCdRunning(false);
    setCdFinished(false);
    const t = total ?? cdTotal;
    setCdTotal(t);
    setCdRemaining(t);
  }, [cdTotal]);
  const cdSetPreset = useCallback((seconds) => {
    setCdRunning(false);
    setCdFinished(false);
    setCdTotal(seconds);
    setCdRemaining(seconds);
  }, []);

  // --- Stopwatch ---
  useEffect(() => {
    if (swRunning) {
      swIntervalRef.current = setInterval(() => {
        setSwElapsed(e => e + 1);
      }, 1000);
    } else {
      clearInterval(swIntervalRef.current);
    }
    return () => clearInterval(swIntervalRef.current);
  }, [swRunning]);

  const swStart = useCallback(() => setSwRunning(true), []);
  const swPause = useCallback(() => setSwRunning(false), []);
  const swReset = useCallback(() => { setSwRunning(false); setSwElapsed(0); setSwLaps([]); }, []);
  const swLap = useCallback(() => setSwLaps(l => [...l, swElapsed]), [swElapsed]);

  // --- Alarm ---
  useEffect(() => {
    if (alarmTarget) {
      notifiedRef.current = false;
      alarmIntervalRef.current = setInterval(() => {
        if (new Date() >= alarmTarget && !notifiedRef.current) {
          notifiedRef.current = true;
          setAlarmFired(true);
          setTimerFinishedSignal(s => s + 1);
          if (Notification.permission === 'granted') {
            new Notification('RevisionFlow Alarm', { body: 'Your alarm is going off!' });
          }
          clearInterval(alarmIntervalRef.current);
        }
      }, 1000);
    }
    return () => clearInterval(alarmIntervalRef.current);
  }, [alarmTarget]);

  const setAlarm = useCallback((date) => { setAlarmFired(false); setAlarmTarget(date); }, []);
  const clearAlarm = useCallback(() => { setAlarmTarget(null); setAlarmFired(false); }, []);

  return (
    <TimerContext.Provider value={{
      // Countdown
      cdTotal, cdRemaining, cdRunning, cdFinished,
      cdStart, cdPause, cdReset, cdSetPreset,
      // Stopwatch
      swElapsed, swRunning, swLaps,
      swStart, swPause, swReset, swLap,
      // Alarm
      alarmTarget, alarmFired, setAlarm, clearAlarm,
      // Music
      musicAutoStop, setMusicAutoStop,
      timerFinishedSignal,
    }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}
