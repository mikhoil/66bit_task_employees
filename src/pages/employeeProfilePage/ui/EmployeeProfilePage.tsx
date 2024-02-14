import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setEmployeeName } from '../../../shared/store/employeeName';
import { EmployeeHeader } from '../../../widgets/employeeHeader';
import { EmployeeInfo } from '../../../widgets/employeeInfo/ui';
import { useEmployee } from '../queries';
import styles from './EmployeeProfilePage.module.scss';

export function EmployeeProfilePage() {
    const params = useParams();

    const { data } = useEmployee(params.id!);

    useEffect(() => {
        if (data) {
            setEmployeeName(data.name);
        }
    }, [data]);

    return (
        <div className={styles.container}>
            {data && (
                <>
                    <EmployeeHeader
                        name={data.name}
                        photo={data.photo}
                        position={data.position}
                        stack={data.stack}
                    />
                    <hr className="bg-primary min-[320px]:-mx-6 min-[1280px]:mx-0" />
                    <EmployeeInfo
                        birthdate={data.birthdate}
                        dateOfEmployment={data.dateOfEmployment}
                        phone={data.phone}
                    />
                </>
            )}
        </div>
    );
}
