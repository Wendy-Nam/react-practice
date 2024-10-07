import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import {signOut} from '../lib/auth';
import {createUser} from '../lib/users';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from './CustomButton';
import {useUserContext} from '../contexts/UserContext';

function SetUpProfile() {
  const [displayName, setDisplayName] = useState('');
  const navigation = useNavigation();
  const {params} = useRoute();
  const {uid} = params ?? {};
  const {setUser} = useUserContext();

  const onSubmit = () => {
    const user = {
      uid: uid,
      displayName,
      photoURL: null,
    };
    createUser(user);
    setUser(user);
  };
  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.circleWrapper}>{/* <Image /> */}</View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nickname"
          placeholderTextColor="lightgray"
          value={displayName}
          onChangeText={setDisplayName}
          returnKeyType={'next'}
          onSubmitEditing={onSubmit}
        />
      </View>
      <CustomButton
        title="NEXT"
        theme="primary"
        onClick={onSubmit}
        loading={false}
        hasMarginTop={false}
      />
      <CustomButton
        title="CANCEL"
        theme="secondary"
        onClick={onCancel}
        loading={false}
        hasMarginTop={true}
      />
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>NEXT</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
        <Text style={styles.cancelText}>CANCEL</Text>
      </TouchableOpacity> */}
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  circleWrapper: {
    marginTop: 30,
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#dfe9f2',
  },
  inputView: {
    borderColor: '#dfe9f2',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginVertical: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: '#d9487d',
  },
  loginText: {
    fontWeight: '500',
    color: 'white',
  },
  cancelBtn: {
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontWeight: '500',
    color: '#d9487d',
  },
});

export default SetUpProfile;
