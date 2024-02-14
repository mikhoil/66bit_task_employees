import { useEffect } from 'react';
import { Filters } from '../../../features/filters';
import { SearchButton } from '../../../features/searchButton';
import { SearchByName } from '../../../features/searchByName';
import { setEmployeeName } from '../../../shared/store/employeeName';
import { ChosenFilters } from '../../../widgets/chosenFilters/ui/ChosenFilters';
import { EmployeesList } from '../../../widgets/employeesList';
import styles from './EmployeeListPage.module.scss';

export function EmployeesListPage() {
    useEffect(() => {
        setEmployeeName('');
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                <h1 className={styles.title}>Список сотрудников</h1>
                <Filters />
                <SearchByName />
            </div>
            <div className={styles.searchFooter}>
                <ChosenFilters />
                <SearchButton />
            </div>
            <div className={styles.results}>
                <EmployeesList />
            </div>
        </div>
    );
}
