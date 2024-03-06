import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

import type { ReactNode } from 'react';

type PrivateRoutePropsT = {
  authorizationStatus: AuthorizationStatus;
  children: ReactNode;
}

export const PrivateRoute = ({ authorizationStatus, children }: PrivateRoutePropsT) => (
  authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
);
