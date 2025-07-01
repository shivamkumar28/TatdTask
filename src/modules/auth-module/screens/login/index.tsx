import { Text, TextInput, View } from 'react-native';
import { colors, screens } from '../../../../constant';
import { useState } from 'react';
import { CustomButton, Loader } from '../../../../components';
import { styles } from './styles';
import { loginWithOtp } from '../../../../provider/api-services';
import { showToast } from '../../../../utilities';

const phoneRegex = /^[6-9]\d{9}$/;

const Login = ({ navigation, route }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');

  const onLogin = async () => {
    try {
      if (!phone) {
        showToast('Please Enter Mobile Number');
        return;
      }

      if (!phoneRegex.test(phone)) {
        showToast('Invalid Mobile Number');
        return;
      }
      setLoading(true);
      const params = {
        mobile: phone,
        user_type: 'Driver',
        app_version: '2.37',
        app_type: 'android',
      };
      const res: any = await loginWithOtp(params);
      if (res?.status_code == '200') {
        console.log('res--', res);
        navigation.navigate(screens.verification, {
          phone: phone,
          otp: res?.otp.split(' ')[0],
        });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const topView = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.imgV}></View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            {'Login With Your Phone Number'}
          </Text>
          <Text style={styles.subHeadingText}>
            {`We'll Send You A Code. It Helps Keep Your Account Secure.`}
          </Text>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.countryCodeText}>{'🇮🇳 +91'}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={phone}
              onChangeText={val => setPhone(val)}
              placeholder={'Mobile Number'}
              placeholderTextColor={colors.limeGrey}
              keyboardType={'number-pad'}
              style={styles.input}
            />
          </View>
        </View>
      </View>
    );
  };

  const bottomView = () => {
    return (
      <View style={styles.bottomContainer}>
        <CustomButton title={'Send Me a Code'} onPress={onLogin} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {topView()}
      {bottomView()}
      <Loader show={loading} />
    </View>
  );
};

export default Login;
