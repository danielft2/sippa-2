'use client';

import { Context } from '@/@types/context';
import { AuthProvider } from './Auth';

const AppProvider = ({ children }: Context) => {
   return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
