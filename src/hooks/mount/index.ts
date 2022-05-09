import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useMountTransition = (
  isMounted: boolean,
  unmountDelay: number,
) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  let timeoutId: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  useEffect(() => {
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId.current = setTimeout(
        () => setHasTransitionedIn(false),
        unmountDelay,
      );
    }
    return () => {
      clearTimeout(timeoutId.current as NodeJS.Timeout);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};
