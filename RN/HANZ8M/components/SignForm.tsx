import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import LoginScreen, {
  SocialButton,
  TextInputContainer,
  MailButton,
} from 'react-native-login-screen';
import ModernLoginScreen from 'react-native-modern-login-screen';
import {Input} from '@rneui/base';

function SignForm({isSignUp, onSubmit, createChangeTextHandler}) {
  let userEmail = '';
  let userPassword = '';
  let userConfirmPassword = 'test12345';
  // const [email1, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation();
  const [isCreateAccount, setCreateAccount] = useState(false);
  return (
    <>
      {isSignUp ? (
        <>
          {isCreateAccount ? (
            <>
              <LoginScreen
                logoImageSource={require('../assets/Login/titleLOGO.png')}
                loginButtonText={'Sign Up'}
                onLoginPress={() => {
                  onSubmit(userEmail, userPassword, userConfirmPassword);
                }}
                onSignupPress={() => {}}
                disableDivider
                disableSignup
                disableSocialButtons
                enableConfirmPassword
                onEmailChange={(email: string) => {
                  userEmail = email;
                }}
                onPasswordChange={(password: string) => {
                  userPassword = password;
                }}
                onConfirmPasswordChange={(confirmPassword: string) => {
                  userConfirmPassword = confirmPassword;
                }}
              />
            </>
          ) : (
            <ModernLoginScreen
              title="Welcome"
              style={styles.center}
              description="Create an account to sync all your data and access them from anywhere."
              logoSource={require('../assets/Login/titleLOGO.png')}
              onEmailPress={() => {
                setCreateAccount(true);
              }}
              onFacebookPress={() => {}}
              onGooglePress={() => {}}
            />
          )}
        </>
      ) : (
        <>
          <LoginScreen
            logoImageSource={require('../assets/Login/titleLOGO.png')}
            loginButtonText={'Login'}
            onLoginPress={() => {
              onSubmit(userEmail, userPassword);
            }}
            onSignupPress={() => navigation.push('SignIn', {isSignUp: true})}
            onEmailChange={(email: string) => (userEmail = email)}
            onPasswordChange={(password: string) => (userPassword = password)}>
            <SocialButton
              style={styles.marginTop}
              text="Continue with Google"
              imageSource={require('../assets/social/logo-google.png')}
              onPress={() => {}}
            />
            <SocialButton
              style={styles.marginTop}
              text="Continue with Facebook"
              imageSource={require('../assets/social/logo-facebook.png')}
              onPress={() => {}}
            />
          </LoginScreen>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 20,
  },
  inputTitle: {
    fontWeight: '500',
    fontSize: 25,
    color: '#181d26',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  inputView: {
    borderBottomColor: '#dfe9f2',
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginBottom: 20,
    marginTop: 0,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
});

export default SignForm;
