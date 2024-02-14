import { Route, Routes } from 'react-router-dom';
import { EmployeeProfilePage } from '../../pages/employeeProfilePage/ui/EmployeeProfilePage';
import { EmployeesListPage } from '../../pages/employeesListPage';
import { useTheme } from '../../shared/hooks/useTheme';
import { MainLayout } from '../layouts/MainLayout';

export function RouterProvider() {
    useTheme();
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<EmployeesListPage />} />
                <Route path=":id" element={<EmployeeProfilePage />} />
            </Route>
        </Routes>
    );
}
