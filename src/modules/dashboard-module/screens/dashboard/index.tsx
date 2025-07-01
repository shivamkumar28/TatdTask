import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';
import { Loader } from '../../../../components';
import { fetchAppLanguage } from '../../../../provider/api-services';
import { AppLanguage, colors, routes, screens } from '../../../../constant';
import {
  updateAppLanguage,
  updateUserToken,
} from '../../../../redux/general.slice';
import { CommonActions } from '@react-navigation/native';

const Dashboard = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state?.general?.language);
  const [loading, setLoading] = useState<boolean>(false);

  let morning = 'Good Morning';
  let welcome = 'Welcome to my application';
  let hindiMorning = 'सुप्रभात';
  let hindiWelcome = 'मेरे एप्लिकेशन में आपका स्वागत है';
  useEffect(() => {
    console.log('language--', language);
  }, []);

  const onSwitchLanguage = async () => {
    try {
      setLoading(true);
      const params = {
        action: 'update_language',
        current_language: language,
      };
      const res: any = await fetchAppLanguage(params);
      if (res?.status_code == '200') {
        console.log('languageRes---', res);
        dispatch(
          updateAppLanguage(
            language == AppLanguage.english
              ? AppLanguage.hindi
              : AppLanguage.english,
          ),
        );
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const logoutView = () => {
    return (
      <TouchableOpacity
        style={styles.logoutV}
        onPress={() => {
          dispatch(updateUserToken(''));
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: routes.authStack, params: { screen: screens.login } },
              ],
            }),
          );
        }}
      >
        <Text style={styles.logout}>{'Logout'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        {language == AppLanguage.hindi ? hindiMorning : morning}
      </Text>
      <Text style={styles.mainTitle}>
        {language == AppLanguage.hindi ? hindiWelcome : welcome}
      </Text>

      <TouchableOpacity style={styles.switchV} onPress={onSwitchLanguage}>
        <Text style={styles.switch}>{'Switch Language'}</Text>
      </TouchableOpacity>

      {logoutView()}

      <Loader show={loading} />
    </View>
  );
};

export default Dashboard;
