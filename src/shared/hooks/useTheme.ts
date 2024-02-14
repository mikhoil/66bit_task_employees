import { useLayoutEffect, useState } from 'react';

const systemTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'dark' | 'light') || systemTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
