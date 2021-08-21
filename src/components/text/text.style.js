import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: ({color, textAlign, bold, size}) => ({
    fontSize: size || 12,
    color: color || 'black',
    textAlign: textAlign || 'left',
    fontFamily: bold ? 'Manrope-Bold' : 'Manrope-Regular',
  }),
});
