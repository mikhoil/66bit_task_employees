import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';
import { EmployeeListItem } from '../../../entities/employee/ui/EmployeeListItem';
import { genders, positions, stack } from '../../../shared/constants';
import {
    setGender,
    setName,
    setPosition,
    setStack,
} from '../../../shared/store/filters';
import { useEmployees } from '../queries';
import styles from './EmployeesList.module.scss';

export function EmployeesList() {
    const [params] = useSearchParams();

    const { data, isLoading, hasNextPage, fetchNextPage } = useEmployees({
        name: params.get('name') ?? '',
        position: params.get('position') ?? '',
        gender: params.get('gender') ?? '',
        stack: params.get('stack')?.split(',') ?? [],
    });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    useEffect(() => {
        setName(params.get('name') ?? '');
        setGender(params.get('gender') as keyof typeof genders);
        setPosition(params.get('position') as keyof typeof positions);
        setStack(
            (params.get('stack')?.split(',') as (keyof typeof stack)[]) ?? [],
        );
    }, [params]);

    return (
        <table className={styles.container}>
            <thead>
                <tr className={styles.header}>
                    <th className="w-1/3" align="left">
                        ФИО
                    </th>
                    <th className="w-1/3" align="left">
                        Должность
                    </th>
                    <th className="w-1/3" align="left">
                        Телефон
                    </th>
                    <th className="w-1/3" align="left">
                        Дата рождения
                    </th>
                </tr>
            </thead>
            {!isLoading && data && (
                <tbody>
                    {data?.pages.map(page =>
                        page.map((e, index) => (
                            <EmployeeListItem
                                ref={page.length === index + 1 ? ref : null}
                                key={e.id}
                                birthdate={e.birthdate}
                                name={e.name}
                                phone={e.phone}
                                position={e.position}
                                id={e.id}
                            />
                        )),
                    )}
                </tbody>
            )}
        </table>
    );
}
