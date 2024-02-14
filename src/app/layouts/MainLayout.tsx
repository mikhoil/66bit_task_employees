import { Outlet } from 'react-router-dom';
import { BreadCrumbs } from '../../widgets/breadcrumbs';
import { Header } from '../../widgets/header';

export function MainLayout() {
    return (
        <div className="flex flex-col items-stretch">
            <Header />
            <BreadCrumbs />
            <Outlet />
        </div>
    );
}
