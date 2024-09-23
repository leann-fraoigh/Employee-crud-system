import { useEffect, useState } from "react";
import { Fetcher } from "react-router-dom";

export function useFromWithFetcher(fetcher: Fetcher) {
  const [formState, setFormState] = useState<'success' | 'initial' | 'submitting'>('initial');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (fetcher.state === 'submitting') {
      setFormState('submitting');
    } else if (fetcher.state === 'idle' && formState === 'submitting') {
      setFormState('success');
    } else if (fetcher.state === 'idle' && formState === 'success') {
      timeoutId = setTimeout(() => {
        setFormState('initial');
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [fetcher, formState]);

  return { formState };
}
