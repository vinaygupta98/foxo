import React from 'react';
import UserProfileContext from './user-profile.context';

export const useUserProfile = () => React.useContext(UserProfileContext);