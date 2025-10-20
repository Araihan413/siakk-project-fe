'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function useAutoLogout() {
  const router = useRouter();
  const lastActivity = useRef<number>(Date.now());
  const INACTIVITY_LIMIT = 60 * 60 * 1000; 
  const REFRESH_INTERVAL = 50 * 60 * 1000;

  useEffect(() => {
    const updateActivity = () => {
      lastActivity.current = Date.now();
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('scroll', updateActivity);
    window.addEventListener('click', updateActivity);

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('scroll', updateActivity);
      window.removeEventListener('click', updateActivity);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const idleTime = Date.now() - lastActivity.current;

      if (idleTime >= INACTIVITY_LIMIT) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
          method: 'POST',
          credentials: 'include',
        });
        localStorage.clear();
        window.location.href = '/auth/login?expired=1';
      } else if (idleTime >= REFRESH_INTERVAL) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        });
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [router]);
}
