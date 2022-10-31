import {Text, StyleSheet, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../models';

interface Props {
  children: React.ReactNode;
  bold?: boolean;
  color?: string;
  size?: number;
  style?: TextStyle;
}

const CustomText: FC<Props> = ({children, bold, color, size, style}) => {
  return (
    <Text
      style={[
        bold ? styles.boldFont : styles.lightFont,
        style,
        {
          color: color ? color : COLORS.black,
          fontSize: size ? size : SIZES.medium,
        },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  lightFont: {
    fontFamily: 'Poppins-Light',
  },
});

export default CustomText;
