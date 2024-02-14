import { Link } from 'react-router-dom';
import logo from '../../../app/assets/66bit_logo.svg';
import { ThemeButton } from '../../../shared/ui/ThemeButton';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.container + ' shadow-card'}>
            <Link to={'/'}>
                <img src={logo} className={styles.logo} alt="66bit_logo" />
            </Link>
            <div className={styles.actions}>
                <div className={styles.contacts}>
                    <Link to={'tel:+73432908476'}>+7 343 290 84 76</Link>
                    <Link to={'mailto:info@66bit.ru'}>info@66bit.ru</Link>
                </div>
                <ThemeButton />
            </div>
        </header>
    );
}
