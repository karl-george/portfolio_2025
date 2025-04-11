'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
}

interface Separator {
  type: 'separator';
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  activeIndex?: number;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? '.5rem' : 0,
    paddingLeft: isSelected ? '1rem' : '.5rem',
    paddingRight: isSelected ? '1rem' : '.5rem',
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: 'auto',
    opacity: 1,
  },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = 'text-primary',
  onChange,
  activeIndex,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef(null);
  const prevActiveIndexRef = React.useRef<number | undefined>(undefined);

  // Only reset selected state when activeIndex changes from scroll, not from click
  React.useEffect(() => {
    if (
      activeIndex !== undefined &&
      activeIndex !== selected &&
      prevActiveIndexRef.current !== activeIndex
    ) {
      setSelected(null);
    }
    prevActiveIndexRef.current = activeIndex;
  }, [activeIndex, selected]);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    // If clicking the same button that's already selected, deselect it
    if (selected === index) {
      setSelected(null);
      onChange?.(null);
    } else {
      // Otherwise, select the new button
      setSelected(index);
      onChange?.(index);
    }
  };

  const Separator = () => (
    <div className='mx-1 h-[24px] w-[1.2px] bg-border' aria-hidden='true' />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm',
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === 'separator') {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        // A button is active if it's either selected or matches the activeIndex
        // But if selected is not null, prioritize selected over activeIndex
        const isActive =
          selected !== null ? selected === index : activeIndex === index;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate='animate'
            custom={isActive}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              'relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300',
              isActive
                ? cn('bg-muted', activeColor)
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  variants={spanVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  transition={transition}
                  className='overflow-hidden'
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
