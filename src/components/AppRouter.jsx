import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes} from '../router/index';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route 
                    path="*" 
                    element={<Navigate to='/posts' />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route 
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
                )}
                <Route 
                    path="*" 
                    element={<Navigate to='/login' />} 
                />
            </Routes>
    )
}

export default AppRouter;