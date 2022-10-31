import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import {COLORS} from '../../models';
import KnowLogo from './../../assets/know.svg';
import CustomText from '../../components/CustomText';

const KnowMore = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.contentContainer}>
        <KnowLogo />
        <CustomText size={25} bold style={styles.easierText}>
          An easier & smarter {'\n'}hospitality experience
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  easierText: {
    textAlign: 'center',
    marginVertical: 40,
  },
});

export default KnowMore;
