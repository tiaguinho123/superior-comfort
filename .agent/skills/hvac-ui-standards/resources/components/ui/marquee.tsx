import React from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 30,
  pauseOnHover = true,
  direction = 'left',
  fade = true,
  fadeAmount = 8,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);
  const items = React.Children.toArray(children);
  const isVertical = direction === 'up' || direction === 'down';

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes marquee-scroll-y {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes marquee-scroll-y-reverse {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        .marquee-inner {
          display: flex;
          animation: ${
            isVertical
              ? direction === 'up' ? 'marquee-scroll-y' : 'marquee-scroll-y-reverse'
              : direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse'
          } ${duration}s linear infinite;
        }
        .marquee-inner.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={cn(
          'flex w-full overflow-hidden',
          isVertical && 'flex-col',
          className,
        )}
        style={fade ? {
          maskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
          WebkitMaskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
        } : undefined}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        <div className={cn('marquee-inner flex shrink-0', isVertical && 'flex-col', isPaused && 'paused')}>
          {items.map((item, i) => (
            <div key={`a-${i}`} className={cn('flex shrink-0', isVertical && 'w-full')}>
              {item}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, i) => (
            <div key={`b-${i}`} className={cn('flex shrink-0', isVertical && 'w-full')}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
