import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

import type { ReactNode } from 'react';
import { getAuthorizationStatus } from '../../mocks/authorizationStatus';

type PrivateRouteProps = {
  isReverse?: boolean;
  children: ReactNode;
}

export const PrivateRoute = ({ isReverse, children }: PrivateRouteProps) => {
  const authorizationStatus = getAuthorizationStatus();
  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth) ? children :
      <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login}/>
  );
};
