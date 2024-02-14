import { useUnit } from 'effector-react';
import { Link, useParams } from 'react-router-dom';
import arrowRight from '../../../app/assets/arrow_right.svg';
import { $employeeName } from '../../../shared/store/employeeName';
import styles from './Breadcrumbs.module.scss';

export function BreadCrumbs() {
    const params = useParams();
    const employeeName = useUnit($employeeName);

    return (
        <div className={styles.container}>
            <Link
                to={'/'}
                className={
                    'id' in params
                        ? 'min-[320px]:hidden min-[1280px]:inline'
                        : ''
                }
            >
                Главная
            </Link>
            <img
                src={arrowRight}
                alt=""
                className={
                    styles.img +
                    ('id' in params
                        ? ' min-[320px]:hidden min-[1280px]:inline'
                        : '')
                }
            />
            <Link to={'/'}>Список сотрудников</Link>
            {'id' in params && (
                <>
                    <img src={arrowRight} />
                    <span className="text-ellipsis">{employeeName}</span>
                </>
            )}
        </div>
    );
}
