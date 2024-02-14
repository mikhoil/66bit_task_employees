import { useEffect, useRef, useState } from 'react';

export function useOutside(initialVisible: boolean = false) {
  const [isShow, setIsShow] = useState(initialVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node))
      setIsShow(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return { ref, isShow, setIsShow };
}
