'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Icon from './Icon';
import { useIsLg } from '../hooks/useIsLg';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  const router = useRouter();
  const lg = useIsLg();
  const iconSize = lg ? 60 : 45;

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <h1 className="tracking-tightest text-[42px] font-bold text-text-primary lg:text-6xl">
        {title}
      </h1>
      <button
        onClick={handleGoBack}
        className="p-2 hover:opacity-80 transition-opacity"
        aria-label="Go back to previous page"
        type="button"
      >
        <Icon url="arrow" height={iconSize} width={iconSize} alt="Back arrow" />
      </button>
    </div>
  );
}
