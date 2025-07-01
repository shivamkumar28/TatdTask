import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ActivityOpacity, colors, images, routes } from '../../../../constant';
import { CustomButton, Loader } from '../../../../components';
import { OTPcodeInput } from '../../auth-component';
import { CommonActions } from '@react-navigation/native';
import { styles } from './styles';
import { useState } from 'react';
import { otpVerification } from '../../../../provider/api-services';
import { showToast } from '../../../../utilities';
import { useDispatch } from 'react-redux';
import { updateUserToken } from '../../../../redux/general.slice';
import { setAuthToken } from '../../../../provider/api-config';

const otpRegex = /^\d{1,4}$/;

const Verification = ({ navigation, route }: any) => {
  const dispatch = useDispatch();
  const phone = route?.params?.phone;
  const otp = route?.params?.otp;

  const [loading, setLoading] = useState<boolean>(false);
  const [pin, setPin] = useState('');

  const onVerification = async () => {
    try {
      if (!pin && !otpRegex.test(pin)) {
        showToast('Please Enter OTP');
        return;
      }

      setLoading(true);
      const params = {
        mobile: phone,
        otp: pin,
        user_type: 'Driver',
        app_version: '2.37',
        app_type: 'android',
      };
      const res: any = await otpVerification(params);
      if (res?.status_code == '200') {
        console.log('res--', res);
        setAuthToken(res?.jwt || '');
        dispatch(updateUserToken(res?.jwt || ''));
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: routes.appStack }],
          }),
        );
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const topView = () => {
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.imgV}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          activeOpacity={ActivityOpacity}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.leftArrowIc} />
        </TouchableOpacity>

        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{'We Just Sent An SMS'}</Text>
          <Text style={styles.subHeadingText}>
            {`Enter The Security Code We Sent To`}
          </Text>

          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>{`+91 ${phone}`}</Text>
            <Text style={styles.editText} onPress={() => navigation.goBack()}>
              {'Edit'}
            </Text>
          </View>
        </View>

        <View style={styles.otpContainer}>
          <OTPcodeInput
            onTextChange={val => setPin(val)}
            pin={pin}
            length={4}
            containerStyle={styles.pinContainer}
            error={''}
            onSubmitEditing={(e: any) => {
              // console.log(e);
            }}
          />
        </View>

        <View style={{ marginTop: 36 }}>
          <Text style={{ color: colors.black }}>{`Otp: ${otp}`}</Text>
        </View>
      </View>
    );
  };

  const bottomView = () => {
    return (
      <View style={styles.bottomContainer}>
        <CustomButton title={'Submit'} onPress={onVerification} />
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

export default Verification;
