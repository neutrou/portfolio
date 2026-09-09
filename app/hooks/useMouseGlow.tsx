'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

const INITIAL_POSITION: Position = { x: 0, y: 0 };

export default function useMouseGlow(speed: number = 0.1): Position {
  const target = useRef<Position>(INITIAL_POSITION);
  const current = useRef<Position>(INITIAL_POSITION);
  const [pos, setPos] = useState<Position>(INITIAL_POSITION);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    target.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * speed;
      current.current.y += (target.current.y - current.current.y) * speed;

      setPos({
        x: current.current.x,
        y: current.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, handleMouseMove]);

  return pos;
}
