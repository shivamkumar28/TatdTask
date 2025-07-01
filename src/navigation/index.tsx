import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationConfig from '../config/navigation-config';
import {routes} from '../constant';
import AuthStack from './auth-stack';
import AppStack from './app-stack';

const Stack = createNativeStackNavigator();

const InitialNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavigationConfig}>
        <Stack.Screen name={routes.authStack} component={AuthStack} />
        <Stack.Screen name={routes.appStack} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitialNavigation;
