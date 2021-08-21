import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../styles';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: width * 0.7,
    height: '75%',
    resizeMode: 'contain',
  },
  contentSlide: {
    height: height * 0.8,
    padding: '5%',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    height: height * 0.2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10%',
    alignItems: 'center',
  },
  indexSlide: {
    width: '20%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullets: current => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: current ? Colors.Primary : Colors.Secondary,
  }),
  flex1: {
    flex: 1,
  },
  textKlasik: {
    fontFamily: 'Klasik Regular',
    color: '#573353',
    fontSize: 25,
    textAlign: 'center',
  },
});
