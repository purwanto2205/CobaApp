import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LightOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width,
    height: height,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flex1: {
    flex: 1,
  },
  oauthIcon: {
    width: 25,
    height: 25,
    marginLeft: '15%',
    marginRight: 25,
    resizeMode: 'center',
  },
  oauthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 12,
    padding: 10,
    height: 40,
    marginTop: 10,
    width: '100%',
  },
  loginSection: {
    position: 'absolute',
    bottom: '0%',
    right: '0%',
    left: '0%',
    top: '60.27%',
    backgroundColor: Colors.White,
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.SoftPrimary,
    borderRadius: 12,
  },
  textInput: {
    fontSize: 12,
    width: '80%',
    height: 35,
    color: Colors.Secondary,
    fontFamily: 'Klasik-Regular',
  },
  iconContainer: {
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textInputIcon: {
    fontSize: 15,
    color: Colors.Primary,
  },
  loginButton: {
    backgroundColor: Colors.Secondary,
    height: 45,
    justifyContent: 'center',
    borderRadius: 12,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  textWellcome: {
    fontFamily: 'Klasik Regular',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  welcome: {
    padding: 15,
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
});
