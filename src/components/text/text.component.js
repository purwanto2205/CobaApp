import React from 'react';
import {Text} from 'react-native';

import styles from './text.style';

const MyText = ({children, color, textAlign, bold, size}) => {
  return (
    <Text style={styles.text({color, textAlign, bold, size})}>{children}</Text>
  );
};

export default MyText;
