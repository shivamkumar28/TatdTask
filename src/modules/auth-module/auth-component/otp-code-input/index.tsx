import React, { createRef, PureComponent, RefObject } from 'react';
import {
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputProps,
  ViewStyle,
  StyleProp,
  AccessibilityRole,
} from 'react-native';
import { colors } from '../../../../constant';
import { styles } from './style';

interface OTPCodeInputProps extends TextInputProps {
  pin: string;
  length?: number;
  onTextChange: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  circleContainerStyle?: StyleProp<ViewStyle>;
  circleEmptyStyle?: StyleProp<ViewStyle>;
  circleFilledStyle?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  error?: string;
  onSubmitEditing: (data?: any) => void;
}

interface OTPCodeInputState {
  shakeAnim: Animated.Value;
}

export default class OTPcodeInput extends PureComponent<
  OTPCodeInputProps,
  OTPCodeInputState
> {
  static defaultProps = {
    length: 4,
    containerStyle: {},
    circleContainerStyle: {},
    circleEmptyStyle: {
      borderWidth: 1,
      borderColor: colors.border1,
    },
    circleFilledStyle: {
      backgroundColor: colors.lightGrey,
    },
    keyboardType: 'numeric',
    accessible: true,
    accessibilityLabel: 'Pincode',
    accessibilityHint: 'Enter your pincode',
    accessibilityRole: 'text',
  };

  textRef: any = createRef<TextInput>();

  constructor(props: OTPCodeInputProps) {
    super(props);
    this.state = {
      shakeAnim: new Animated.Value(0),
    };
  }

  shake = () => {
    const { shakeAnim } = this.state;
    const values = [10, -7.5, 5, -2.5, 0];
    const duration = 75;
    Animated.sequence(
      values.map(toValue =>
        Animated.timing(shakeAnim, {
          toValue,
          duration,
          useNativeDriver: false,
        }),
      ),
    ).start();
  };

  onTextChange = (text: string) => {
    const regex = /^[0-9]*$/;
    const { onTextChange, length } = this.props;
    if (regex.test(text) && text.length <= (length || 4)) {
      onTextChange(text);
    } else {
      this.onFocus();
    }
  };

  onFocus = () => {
    this.textRef.current?.blur();
    this.textRef.current?.focus();
  };

  render() {
    const { shakeAnim } = this.state;
    const {
      pin,
      containerStyle,
      circleContainerStyle,
      circleEmptyStyle,
      circleFilledStyle,
      length,
      error,
      ...props
    } = this.props;

    const inputLength = length || 4;

    const circles = [];
    for (let i = 0; i < inputLength; i += 1) {
      circles.push(
        <View
          key={i}
          style={{
            ...styles.pinView,
            borderColor: pin.length > i ? colors.appBlue : colors.border1,
          }}
        >
          <Text
            style={{
              ...styles.title,
              color: pin.length > i ? colors.black : colors.darkGrey,
            }}
          >
            {pin[i] || ''}
          </Text>
        </View>,
      );
    }

    return (
      <View style={containerStyle}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onFocus}
          style={styles.container}
        >
          <View style={styles.circleContainer}>{circles}</View>
        </TouchableOpacity>
        <TextInput
          ref={this.textRef}
          style={styles.text}
          caretHidden
          maxLength={inputLength}
          keyboardType="numeric"
          returnKeyType="done"
          value={pin}
          {...props}
          onChangeText={this.onTextChange}
        />
      </View>
    );
  }
}
