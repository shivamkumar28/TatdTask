import { StyleSheet, Text, View } from 'react-native';
import { colors, routes, screens } from '../../../../constant';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setAuthToken } from '../../../../provider/api-config';

const Splash = ({ navigation }: any) => {
  const token = useSelector((state: any) => state?.general?.token);

  useEffect(() => {
    console.log('token--', token);
    setTimeout(() => {
      navigation.navigate(screens.login);
      if (!!token) {
        setAuthToken(token);
        navigation.replace(routes.appStack);
      } else {
        navigation.replace(routes.authStack, { screen: screens.login });
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{'Welcome'}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBlue,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
  },
});
