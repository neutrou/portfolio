'use client';

import { useMemo } from 'react';
import { useIsLg } from '../hooks/useIsLg';
import useMouseGlow from '../hooks/useMouseGlow';

const GLOW_BLUR = 'blur-3xl';
const GLOW_SIZE = 'w-64 h-64';

export default function MouseGlow() {
  const { x, y } = useMouseGlow(0.1);
  const isLg = useIsLg();

  const glowClasses = useMemo(
    () => (isLg ? `bg-accent/30` : 'transparent'),
    [isLg]
  );

  const style = useMemo(
    () => ({
      left: x,
      top: y,
      transform: 'translate(-50%, -50%)',
    }),
    [x, y]
  );

  return (
    <div className="pointer-events-none fixed z-9999" style={style}>
      <div className={`${GLOW_SIZE} rounded-full ${glowClasses} ${GLOW_BLUR}`} />
    </div>
  );
}
