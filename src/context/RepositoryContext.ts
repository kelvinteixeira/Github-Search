import {createContext } from 'react';
import { RepositoryContextType } from '../Global/Types';

export const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);
