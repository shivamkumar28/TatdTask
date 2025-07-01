import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constant';
import Login from '../../modules/auth-module/screens/login';
import Verification from '../../modules/auth-module/screens/verification';
import NavigationConfig from '../../config/navigation-config';
import Splash from '../../modules/auth-module/screens/splash';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={NavigationConfig}>
      <Stack.Screen name={screens.splash} component={Splash} />
      <Stack.Screen name={screens.login} component={Login} />
      <Stack.Screen name={screens.verification} component={Verification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
