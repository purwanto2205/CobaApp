import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

import {Container, MyText} from '../../components';
import {Images} from '../../../assets';

import styles from './auth.style';
import {useState} from 'react';

const Auth = ({navigation}) => {
  return (
    <Container>
      <View style={styles.container}>
        <ImageBackground
          source={Images.Background}
          imageStyle={styles.imageStyle}
          style={styles.bgImage}>
          <View style={styles.welcome}>
            <Text style={styles.textWellcome}>
              WELCOME TO Monumental habits
            </Text>
            <TouchableOpacity style={styles.oauthButton}>
              <Image source={Images.GoogleIcon} style={styles.oauthIcon} />
              <MyText bold>Continue with Google</MyText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.oauthButton}>
              <Image source={Images.FacebookIcon} style={styles.oauthIcon} />
              <MyText bold>Continue with Facebook</MyText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <LoginSection />
      </View>
    </Container>
  );
};

const LoginSection = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.loginSection}>
      <MyText style={styles.marginBottom}>Login with email</MyText>
      <CustomTextInput
        value={email}
        placeholder="email"
        onChangeText={setEmail}
        style={styles.marginTop20}
        icon={
          <MaterialCommunityIcons
            name="email-outline"
            style={styles.textInputIcon}
          />
        }
      />
      <CustomTextInput
        value={password}
        placeholder="password"
        style={styles.marginTop}
        secureTextEntry={secureTextEntry}
        icon={<Feather name="lock" style={styles.textInputIcon} />}
        rightComponent={
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <MyText size={10}>{secureTextEntry ? 'Show' : 'Hide'}</MyText>
          </TouchableOpacity>
        }
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton}>
        <MyText bold>Login</MyText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.marginTop}>
        <MyText>Forgot Password?</MyText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.marginTop}>
        <MyText>
          Don’t have an account? <MyText bold> Sign up</MyText>
        </MyText>
      </TouchableOpacity>
    </View>
  );
};

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  icon,
  secureTextEntry,
  rightComponent,
  style,
}) => {
  return (
    <View style={[styles.textInputContainer, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      <View style={[styles.iconContainer, styles.flexEnd]}>
        {rightComponent}
      </View>
    </View>
  );
};

export default Auth;
