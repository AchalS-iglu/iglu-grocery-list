import { User } from 'firebase/auth';
import { createContext } from 'react';

export const UserContext = createContext<{ user: User | null | undefined }>({ user: null });