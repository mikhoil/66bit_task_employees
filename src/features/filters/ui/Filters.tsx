import { FilterMultiple } from './FilterMultiple';
import { FilterSingle } from './FilterSingle';
import styles from './Filters.module.scss';

export function Filters() {
    return (
        <div className={styles.container}>
            <FilterSingle title="Должность" />
            <FilterSingle title="Пол" />
            <FilterMultiple title="Стек технологий" />
        </div>
    );
}
