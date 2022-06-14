import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext";
import {AuthStore} from "./store/auth/AuthStore";

export const authStore = new AuthStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <AuthContextProvider authStore={authStore}>
            <App/>
        </AuthContextProvider>
    </React.StrictMode>
);

