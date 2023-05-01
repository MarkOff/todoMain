import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {TodolistsList} from 'features/todolists-list/TodolistsList';
import {Login} from 'features/auth/Login/Login';
import {Container} from '@mui/material';

export const Routing = () => {

    return (
        <Container fixed>
            <Routes>
                <Route path={'/'} element={<TodolistsList/>}/>
                <Route path={'/todoMain'} element={<TodolistsList/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>PAGE NOT FOUND 404</h1>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>

            </Routes>
        </Container>
    );
};

