import dark_icon from '../../app/assets/dark_theme_icon.svg';
import light_icon from '../../app/assets/light_theme_icon.svg';
import styles from './ThemeButton.module.scss';

import { useTheme } from '../hooks/useTheme';

export function ThemeButton() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className={styles.button}
            onClick={() => {
                setTheme(t => (t === 'dark' ? 'light' : 'dark'));
            }}
        >
            <img
                className={
                    styles.img +
                    (theme === 'dark'
                        ? ' min-[320px]:left-6 min-[1280px]:left-7'
                        : '')
                }
                src={theme === 'dark' ? dark_icon : light_icon}
            />
        </button>
    );
}
