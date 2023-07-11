import type { FC, PropsWithChildren } from 'react';
import { Children, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useMeasure } from '../../hooks';
import { bem } from '../../utils';
import { PlainButton } from '..';

interface ActiveIndicatorPosition {
  left: number;
  right: number;
}

export interface TabProps {
  className?: string;
  tabs: string[];
  fullscreen?: boolean;
  defaultActiveTabIndex?: number;
}

const componentName = 'tab';

const transitionOptions = {
  tension: 150,
  friction: 70,
  mass: 0.4,
  // IMPORTANT: If duration is changed, $tab-animation-duration in tab.scss
  // will also need to be changed
  duration: 0.15,
};

const Tab: FC<PropsWithChildren<TabProps>> = ({
  className,
  tabs,
  children,
  fullscreen = true,
  defaultActiveTabIndex = 0,
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    defaultActiveTabIndex,
  );
  const tabItemRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [
    activeIndicatorPosition,
    setActiveIndicatorPosition,
  ] = useState<ActiveIndicatorPosition | null>(null);
  const { bounds, ref } = useMeasure<HTMLDivElement>();

  useEffect(() => {
    const target = tabItemRefs.current?.[selectedTabIndex];
    const container = containerRef.current;

    if (container && target) {
      const containerRect = container.getBoundingClientRect();

      if (containerRect.width === 0) {
        return;
      }

      const targetRect = target.getBoundingClientRect();
      const left = targetRect.left - containerRect.left;
      const right = containerRect.right - targetRect.right;

      setActiveIndicatorPosition({ left, right });
    }
  }, [tabs, selectedTabIndex, bounds]);

  return (
    <div
      className={classNames(className, bem(componentName), {
        [bem(componentName, { modifier: 'fullscreen' })]: fullscreen,
      })}
      ref={ref}
    >
      <div
        className={bem(componentName, { element: 'tab-group' })}
        ref={containerRef}
      >
        {tabs.map((tab, index) => (
          <PlainButton
            key={tab}
            className={classNames(bem(componentName, { element: 'tab-item' }), {
              [bem(componentName, {
                element: 'tab-item',
                modifier: 'active',
              })]: index === selectedTabIndex,
            })}
            ref={(element) => {
              tabItemRefs.current[index] = element;
            }}
            onClick={() => setSelectedTabIndex(index)}
            id={`tab-${index}-button`}
          >
            {tab}
          </PlainButton>
        ))}
        {activeIndicatorPosition ? (
          <motion.div
            animate={activeIndicatorPosition}
            transition={transitionOptions}
            initial={false}
            className={bem(componentName, { element: 'active-indicator' })}
          />
        ) : null}
      </div>

      <motion.div className={bem(componentName, { element: 'content-group' })}>
        <motion.div
          className={bem(componentName, { element: 'contents' })}
          transition={transitionOptions}
          initial={false}
          animate={{ x: `${selectedTabIndex * -100}%` }}
        >
          {Children.map(children, (child, index) => (
            <div key={tabs[index]} id={`tab-${index}-content`}>
              {child}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tab;
