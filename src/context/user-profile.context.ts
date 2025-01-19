import { createContext } from 'react';

const UserProfileContext = createContext<{ user: any, loginStatus: boolean }>({
  user: {},
  loginStatus: false,
});
export default UserProfileContext;
