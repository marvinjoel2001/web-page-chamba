'use client';
import { useSyncExternalStore } from 'react';

// La página se regenera cada minuto como mucho, pero puede servirse más
// tarde: "hace cuánto" se calcula en el navegador. En el servidor (y hasta que
// hidrata) se muestra la fecha, que nunca queda desactualizada.
const subscribe = (tick: () => void) => {
  const id = window.setInterval(tick, 30_000);
  return () => window.clearInterval(id);
};
const currentMinute = () => Math.floor(Date.now() / 60_000);
const serverMinute = () => null;

export function timeAgo(iso: string, locale: string, now: number): string {
  const seconds = (Date.parse(iso) - now) / 1000;
  const format = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  if (seconds > -3600) return format.format(Math.min(-1, Math.round(seconds / 60)), 'minute');
  if (seconds > -86400) return format.format(Math.round(seconds / 3600), 'hour');
  return format.format(Math.round(seconds / 86400), 'day');
}

export default function TimeAgo({ iso, locale, fallback }: { iso: string; locale: string; fallback: string }) {
  const minute = useSyncExternalStore(subscribe, currentMinute, serverMinute);
  return <time dateTime={iso}>{minute === null ? fallback : timeAgo(iso, locale, minute * 60_000)}</time>;
}
