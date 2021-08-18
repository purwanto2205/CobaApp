import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {APP_ACTION} from '../../actions';
import {Images} from '../../../assets';
import {MyText} from '../../components';

import styles from './on-boarding.style';

import dataJson from './data.json';

const OnBoarding = ({navigation}) => {
  const dispatch = useDispatch();

  const [contentSlider] = useState(dataJson.slide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPressNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onPressSkip();
    }
  };

  const onPressSkip = () => {
    dispatch({
      type: APP_ACTION.SET_ONBOARDING,
      payload: true,
    });
  };

  return (
    <View style={styles.container}>
      <ContentSlide index={currentIndex} />
      <View style={styles.sliderContainer}>
        <TouchableOpacity onPress={onPressSkip}>
          <MyText>Skip</MyText>
        </TouchableOpacity>
        <View style={styles.indexSlide}>
          {contentSlider.map(c => (
            <View key={c.id} style={styles.bullets(c.id === currentIndex)} />
          ))}
        </View>
        <TouchableOpacity onPress={onPressNext}>
          <MyText>Next</MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ContentSlide = ({index}) => {
  const handleText = () => {
    switch (index) {
      case 0:
        return 'WELCOME TO Monumental habits';
      case 1:
        return 'Create New Habbits Easily';
      case 2:
        return 'Keep Track on Your Progress';
      case 3:
        return 'Join a Supportive Community';
      default:
        return 'WELCOME TO Monumental habits';
    }
  };

  const handleImage = () => {
    switch (index) {
      case 0:
        return Images.Illustration;
      case 1:
        return Images.habits;
      case 2:
        return Images.Progress;
      case 3:
        return Images.CommunitySupport;
      default:
        return Images.Illustration;
    }
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.contentSlide}>
        <MyText textAlign="center" color="#573353" size={25}>
          {handleText()}
        </MyText>
        <Image source={handleImage()} style={styles.illustrationImage} />
        <MyText textAlign="center" color="#573353" size={17}>
          We can{' '}
          <MyText color="#FC9D45" size={17}>
            help you
          </MyText>{' '}
          to be a better version of{' '}
          <MyText color="#FC9D45" size={17}>
            yourself.
          </MyText>
        </MyText>
      </View>
    </View>
  );
};
export default OnBoarding;
