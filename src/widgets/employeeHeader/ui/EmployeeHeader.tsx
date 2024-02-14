import { IEmployee } from '../../../entities/employee/types';
import styles from './EmployeeHeader.module.scss';
import { StackItem } from './StackItem';

export function EmployeeHeader({
    name,
    photo,
    position,
    stack,
}: Pick<IEmployee, 'photo' | 'position' | 'name' | 'stack'>) {
    return (
        <div className={styles.container}>
            <img src={photo} alt="" className={styles.photo} />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <h2 className={styles.position}>{position}</h2>
            </div>
            <div className={styles.stack}>
                {stack.map(t => (
                    <StackItem key={t} title={t} />
                ))}
            </div>
        </div>
    );
}
