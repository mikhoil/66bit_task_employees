import { useUnit } from 'effector-react';
import { $gender, $position, $stack } from '../../../shared/store/filters';
import styles from './ChosenFilter.module.scss';
import { FilterItem } from './FilterItem';

export function ChosenFilters() {
    const position = useUnit($position);
    const gender = useUnit($gender);
    const stack = useUnit($stack);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Выбранные фильтры:</span>
            <div className={styles.filters}>
                {position && <FilterItem filter="Должность" name={position} />}
                {gender && <FilterItem filter="Пол" name={gender} />}
                {stack.length !== 0 &&
                    stack.map(t => (
                        <FilterItem key={t} filter="Стек технологий" name={t} />
                    ))}
            </div>
        </div>
    );
}
