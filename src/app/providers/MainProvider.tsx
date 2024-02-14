import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './QueryProvider';

export function MainProvider({ children }: PropsWithChildren) {
    return (
        <QueryProvider>
            <BrowserRouter>{children}</BrowserRouter>
        </QueryProvider>
    );
}
