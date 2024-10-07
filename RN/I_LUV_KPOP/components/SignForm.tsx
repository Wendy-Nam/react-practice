import React, {useRef} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

function SignForm({isSignUp, onSubmit, form, createChangeTextHandler}) {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const primaryTitle = isSignUp ? 'Sign Up' : 'Sign In';

  return (
    <>
      <Text style={styles.inputTitle}>{primaryTitle}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#586173"
          value={form.email}
          returnKeyType="next"
          onChangeText={createChangeTextHandler('email')}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#586173"
          secureTextEntry={true}
          value={form.password}
          onChangeText={createChangeTextHandler('password')}
          returnKeyType={isSignUp ? 'next' : 'done'}
          ref={passwordRef}
          onSubmitEditing={() => {
            if (isSignUp) {
              confirmPasswordRef.current.focus();
            } else {
              onSubmit();
            }
          }}
        />
      </View>
      {isSignUp ? (
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password Verification."
            placeholderTextColor="#586173"
            secureTextEntry={true}
            value={form.confirmPassword}
            ref={confirmPasswordRef}
            returnKeyType="done"
            onChangeText={createChangeTextHandler('confirmPassword')}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  inputTitle: {
    fontWeight: '500',
    fontSize: 25,
    color: '#181d26',
    marginVertical: 30,
    alignSelf: 'flex-start',
    left: '10%',
  },
  inputView: {
    borderBottomColor: '#dfe9f2',
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginBottom: 30,
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
