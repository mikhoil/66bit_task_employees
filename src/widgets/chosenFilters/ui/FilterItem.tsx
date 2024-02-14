import { genders, positions, stack } from '../../../shared/constants';
import {
    removeFromStack,
    setGender,
    setPosition,
} from '../../../shared/store/filters';
import styles from './FilterItem.module.scss';

export function FilterItem({
    name,
    filter,
}: {
    name: string;
    filter: 'Должность' | 'Пол' | 'Стек технологий';
}) {
    return (
        <p className={styles.container}>
            <button
                className={styles.cross}
                onClick={() => {
                    if (filter === 'Должность') setPosition(undefined);
                    else if (filter === 'Пол') setGender(undefined);
                    else removeFromStack(name as keyof typeof stack);
                }}
            />
            {filter === 'Должность'
                ? positions[name as keyof typeof positions]
                : filter === 'Пол'
                ? genders[name as keyof typeof genders]
                : stack[name as keyof typeof stack]}
        </p>
    );
}
