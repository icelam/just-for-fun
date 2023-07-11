import { useState, useCallback } from 'react';

const useCallbackRef = <T = Element>() => {
  const [ref, setRef] = useState<T | null>(null);
  const attachRef = useCallback((node: T) => {
    setRef(node);
  }, []);

  return {
    ref,
    attachRef,
  };
};

export default useCallbackRef;
