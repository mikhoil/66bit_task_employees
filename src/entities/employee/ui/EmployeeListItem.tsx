import { PropsWithoutRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEmployee } from '../types';
import styles from './EmployeeListItem.module.scss';

export const EmployeeListItem = forwardRef<
    HTMLTableRowElement,
    PropsWithoutRef<
        Pick<IEmployee, 'name' | 'position' | 'phone' | 'birthdate' | 'id'>
    >
>(({ birthdate, name, phone, position, id }, ref) => {
    const navigate = useNavigate();

    return (
        <tr
            ref={ref}
            className={styles.container}
            onClick={() => {
                navigate(`/${id}`);
            }}
        >
            <td className="w-1/2">{name}</td>
            <td className="w-1/5">{position}</td>
            <td className="w-1/6 text-nowrap">{phone}</td>
            <td className="w-1/6 text-nowrap">{birthdate}</td>
        </tr>
    );
});
