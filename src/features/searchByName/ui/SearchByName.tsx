import { useUnit } from 'effector-react';
import { $name, setName } from '../../../shared/store/filters';
import styles from './SearchByName.module.scss';

export function SearchByName() {
    const name = useUnit($name);

    return (
        <input
            className={styles.container}
            type="text"
            value={name}
            placeholder="Поиск"
            onChange={e => setName(e.target.value)}
        />
    );
}
