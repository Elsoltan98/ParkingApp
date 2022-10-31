import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomIcon from '../CustomIcon';
import CustomText from '../CustomText';
import {COLORS} from '../../models';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <CustomIcon
        color={COLORS.black}
        size={40}
        type="MaterialIcons"
        name="keyboard-arrow-left"
      />
      <CustomText style={{marginLeft: 10}} bold size={30}>
        Know More
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomHeader;
