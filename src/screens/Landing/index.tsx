import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Logo from './../../assets/Logomark.svg';
import CustomText from '../../components/CustomText';
import {COLORS} from '../../models';
import CustomIcon from '../../components/CustomIcon';
import CustomInput from '../../components/CustomInput';
import CustomBtn from '../../components/CustomBtn';
import {CREATE_ACCOUNT, FORGET_PASSWORD, KNOW_SCREEN} from '../../types';
import PhoneInput from 'react-native-phone-number-input';
const Landing = ({navigation}: any) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ImageBackground
      source={require('./../../assets/LandingBG.png')}
      style={styles.container}>
      {/* <Image source={require(Logo)} style={styles.logo} /> */}
      <Logo style={styles.logo} />
      <View style={styles.smartContainer}>
        <CustomText
          bold
          size={40}
          style={styles.smartText}
          color={COLORS.white}>
          Smart {'\n'}solutions
          {'\n'}for a better
          {'\n'}experience
        </CustomText>
        <TouchableOpacity
          onPress={() => navigation.navigate(KNOW_SCREEN)}
          style={styles.knowContainer}>
          <CustomText style={styles.knowText} size={25} color={COLORS.orange}>
            Know more
          </CustomText>
          <CustomIcon
            color={COLORS.orange}
            size={27}
            type="Feather"
            name="arrow-right"
            style={styles.knowIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        {/* <CustomInput textHolder="Phone Number" /> */}
        <PhoneInput
          defaultCode="EG"
          placeholder="Phone Number"
          layout="second"
          ref={phoneInput}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.phoneInputTextStyle}
          textInputStyle={styles.phoneInputStyle}
        />
        <CustomInput
          textHolder="Password"
          password
          show={showPassword}
          onPress={handleShowPassword}
        />
        <CustomBtn active={false} title="Login" />
      </View>
      <View style={styles.forgetContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(FORGET_PASSWORD)}>
          <CustomText
            style={styles.forgetText}
            color={COLORS.white}
            bold
            size={18}>
            Forget password?
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(CREATE_ACCOUNT)}>
          <CustomText
            style={styles.forgetText}
            color={COLORS.white}
            bold
            size={18}>
            Create account
          </CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
  },
  logo: {
    width: 100,
    marginTop: 50,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  smartContainer: {
    marginBottom: 50,
  },
  smartText: {
    fontWeight: '800',
    lineHeight: 55,
  },
  knowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  knowText: {
    fontWeight: '700',
    marginRight: 10,
  },
  knowIcon: {fontWeight: '700', marginTop: 5},
  inputsContainer: {},
  forgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },
  forgetText: {
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  phoneContainer: {
    width: '100%',
    borderRadius: 15,
    height: 60,
    marginBottom: 25,
  },
  phoneInputStyle: {
    height: 60,
    backgroundColor: COLORS.white,
  },
  phoneInputTextStyle: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
});

export default Landing;
