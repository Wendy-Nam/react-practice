import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export function createUser({uid, displayName, photoURL}) {
  return usersCollection.doc(uid).set({
    uid,
    displayName,
    photoURL,
  });
}

export async function getUser(id) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}
