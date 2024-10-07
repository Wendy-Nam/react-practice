import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignButtons from '../components/SignButtons';
import SignForm from '../components/SignForm';
import {signIn, signUp} from '../lib/auth';
import {getUser} from '../lib/users';
import {useUserContext} from '../contexts/UserContext';

function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params ?? {};
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const {setUser} = useUserContext();

  // const createChangeTextHandler = async (name: string, value: string) => {
  //   setForm({...form, [name]: value});
  // };
  const onSubmit = async (
    userEmail: string,
    userPwd: string,
    userConfirmPwd?: string,
  ) => {
    Keyboard.dismiss();
    // await setEmail(userEmail);
    // await setPassword(userPwd);
    // if (userConfirmPwd !== undefined) {
    //   await setConfirmPassword(userConfirmPwd);
    // }
    console.log(userEmail, userPwd);
    // if (isSignUp && password !== confirmPassword) {
    //   Alert.alert('Fail', 'Incorrect password verification.');
    //   return;
    // }
    if (userEmail === '' || userPwd === '') {
      Alert.alert('Fail', 'Please fill in all fields.');
      return;
    }
    setLoading(true);
    const info = {userEmail, userPwd};
    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      const profile = await getUser(user.uid);
      if (!profile) {
        navigation.navigate('Welcome', {uid: user.uid});
      } else {
        setUser(profile);
      }
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': 'Email already in use',
        'auth/weak-password': 'Weak Password',
        'auth/invalid-email': 'Invalid email',
        'auth/user-not-found': 'User not found',
        'auth/wrong-password': 'Wrong Password',
        'auth/operation-not-allowed': 'Email sign-in is not enabled',
        'auth/user-disabled': 'User disabled',
      };
      const msg =
        messages[e.code] ?? `${isSignUp ? 'Sign up' : 'Sign in'} Failed`;
      Alert.alert('Fail', msg);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.full}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.full}>
        <StatusBar style="auto" />
        <SignForm isSignUp={isSignUp} onSubmit={onSubmit} />
        {/* <SignButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          /> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default SignInScreen;
