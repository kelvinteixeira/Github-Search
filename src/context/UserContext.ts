import {createContext } from 'react';
import { UserContextType } from '../Global/Types';

export const UserContext = createContext<UserContextType | undefined>(undefined);
