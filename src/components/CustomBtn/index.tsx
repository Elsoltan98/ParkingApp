import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../CustomText';
import {COLORS, SIZES} from '../../models';
interface btnProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  active?: boolean;
}

const CustomBtn: FC<btnProps> = ({title, onPress, active}) => {
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : styles.notActive]}
      onPress={onPress}>
      <CustomText size={SIZES.small} bold color={COLORS.white}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 17,
  },
  active: {backgroundColor: COLORS.blueMain},
  notActive: {backgroundColor: COLORS.blueSky},
});

export default CustomBtn;
