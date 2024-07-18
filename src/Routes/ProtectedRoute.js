// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
    // Votre logique d'authentification ici
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/connexion" replace state={{ from: rest.location }} />
    );
};

export default ProtectedRoute;
