import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../models';
import CustomIcon from '../CustomIcon';

interface inputProps {
  textHolder: string;
  password?: boolean;
  show?: boolean;
  onPress?: () => void;
}

const CustomInput: FC<inputProps> = ({textHolder, password, show, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!show}
        placeholder={textHolder}
        onChangeText={e => console.log(e)}
      />
      {password && (
        <CustomIcon
          type="Entypo"
          size={25}
          name={show ? 'eye-with-line' : 'eye'}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#000',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 22,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    fontSize: 20,
    width: '80%',
  },
});

export default CustomInput;
