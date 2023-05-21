import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { userData } = useAuth();

  return (
    <NavigationContainer>
      {userData.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
