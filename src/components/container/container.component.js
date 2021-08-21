import React from 'react';
import {View, StatusBar} from 'react-native';
import {Colors} from '../../styles';

import styles from './container.style';

const Container = ({children, style}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.LightOrange} />
      <View style={[styles.flex1, style]}>{children}</View>
    </View>
  );
};

export default Container;
