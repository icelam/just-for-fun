import { useState, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import useCallbackRef from './useCallbackRef';

const useMeasure = <T = Element>() => {
  const { ref: element, attachRef } = useCallbackRef();
  const [bounds, setBounds] = useState({});

  useLayoutEffect(() => {
    const onResize: ResizeObserverCallback = ([entry]) => {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    };

    const observer = new ResizeObserver(onResize);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    bounds,
    ref: attachRef as (node: T) => void,
  };
};

export default useMeasure;
