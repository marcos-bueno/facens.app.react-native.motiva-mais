import { Box } from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '@hooks/useAuth';
import { Home } from '@screens/Home';
import { Quiz } from '@screens/Quiz';

type AppRoutes = {
  home: undefined;
  quiz: undefined;
};

export type AuthNavigatorRoutesProps = DrawerNavigationProp<AppRoutes>;

const { Navigator, Screen } = createDrawerNavigator<AppRoutes>();

export function AppRoutes() {
  const { signOut } = useAuth();

  function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
      <DrawerContentScrollView {...props}>
        <Box mt={6}>
          <DrawerItem
            icon={() => <FontAwesome name="home" size={25} />}
            label="Página Inicial"
            onPress={() => {
              props.navigation.navigate('home');
            }}
          />
          <DrawerItem
            icon={() => <Feather name="check-square" size={25} />}
            label="Questionário"
            onPress={() => {
              props.navigation.navigate('quiz');
            }}
          />
          <DrawerItem
            icon={() => <MaterialIcons name="logout" size={25} />}
            label="Sair"
            onPress={signOut}
          />
        </Box>
      </DrawerContentScrollView>
    );
  }

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Screen name="home" component={Home} />
      <Screen name="quiz" component={Quiz} />
    </Navigator>
  );
}
