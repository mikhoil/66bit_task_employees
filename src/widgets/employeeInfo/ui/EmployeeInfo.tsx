import { IEmployee } from '../../../entities/employee/types';
import styles from './EmployeeInfo.module.scss';

export function EmployeeInfo({
    birthdate,
    dateOfEmployment,
    phone,
}: Pick<IEmployee, 'phone' | 'birthdate' | 'dateOfEmployment'>) {
    return (
        <div className="min-[320px]:mt-5 min-[1280px]:mt-10">
            <h1 className={styles.title}>Основная информация</h1>
            <div className={styles.info}>
                <div className={styles.rows}>
                    <p>Контактный телефон:</p>
                    <p>Дата рождения:</p>
                    <p>Дата устройства:</p>
                </div>
                <div className={styles.rows}>
                    <p>{phone}</p>
                    <p>{birthdate}</p>
                    <p>{dateOfEmployment}</p>
                </div>
            </div>
        </div>
    );
}
