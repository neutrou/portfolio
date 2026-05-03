interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Separator({
  className = '',
  orientation = 'horizontal',
}: SeparatorProps) {
  const baseClasses = 'border-0';
  const orientationClasses =
    orientation === 'vertical'
      ? 'h-full w-0.5 bg-[radial-gradient(50%_50%_at_50%_50%,#F7F5FB_0%,rgba(115,115,115,0)_100%)]'
      : 'h-0.5 w-full bg-[radial-gradient(50%_50%_at_50%_50%,#F7F5FB_0%,rgba(115,115,115,0)_100%)]';

  return <hr className={`${baseClasses} ${orientationClasses} ${className}`} />;
}
