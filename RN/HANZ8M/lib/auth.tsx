import auth from '@react-native-firebase/auth';

interface signProps {
  [key: string]: string;
}

export function signIn({email, password}: signProps) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}: signProps) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}
