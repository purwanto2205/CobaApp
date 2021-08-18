import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: ({color, textAlign, bold, size}) => ({
    fontSize: size || 14,
    color: color || 'black',
    textAlign: textAlign || 'left',
    fontFamily: 'Klasik Regular',
    fontWeight: bold ? 'bold' : 'normal',
  }),
});
