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
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignButtons from '../components/SignButtons';
import SignForm from '../components/SignForm';
import {signIn, signUp} from '../lib/auth';
import {getUser} from '../lib/users';
import {useUserContext} from '../contexts/UserContext';

function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const {setUser} = useUserContext();

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, confirmPassword} = form;
    if (isSignUp && password !== confirmPassword) {
      Alert.alert('Fail', 'Incorrect password verification.');
      return;
    }
    if (email === '' || password === '') {
      Alert.alert('Fail', 'Please fill in all fields.');
      return;
    }
    setLoading(true);
    const info = {email, password};
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
      style={styles.fullscreen}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <LinearGradient
          style={styles.container}
          colors={['#d9487d', '#dfe9f2', '#586173']}>
          <View style={styles.title}>
            <Image
              style={styles.image}
              source={require('../assets/LOGO_outlined.png')}
            />
            <Text style={styles.logoText}>I LUV KPOP</Text>
          </View>
          <StatusBar style="auto" />
          <View style={styles.body}>
            <SignForm
              isSignUp={isSignUp}
              onSubmit={onSubmit}
              form={form}
              createChangeTextHandler={createChangeTextHandler}
            />
            <SignButtons
              isSignUp={isSignUp}
              onSubmit={onSubmit}
              loading={loading}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    position: 'absolute',
    top: '22%',
    paddingTop: 20,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: '5%',
    left: '8%',
  },
  image: {
    width: 50,
    height: 57,
    resizeMode: 'cover',
  },
  logoText: {
    fontWeight: '600',
    fontSize: 25,
    color: '#fff',
    marginTop: 12,
    marginLeft: 12,
  },
});

export default SignInScreen;
