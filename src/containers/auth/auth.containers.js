import React from 'react';
import {View} from 'react-native';

import {MyText} from '../../components';

import styles from './auth.style';

const Auth = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MyText>HELLO AUTH</MyText>
    </View>
  );
};

export default Auth;
