import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';

function SignButtons({isSignUp, onSubmit, loading}) {
  const navigation = useNavigation();
  return (
    <>
      {isSignUp ? (
        <>
          <CustomButton
            title="SIGN UP"
            onClick={onSubmit}
            theme="primary"
            hasMarginTop={true}
            loading={loading}
          />
          <CustomButton
            title="CANCEL"
            onClick={() => {
              navigation.goBack();
            }}
            theme="secondary"
            hasMarginTop={true}
            loading={loading}
          />
        </>
      ) : (
        <>
          <CustomButton
            title="LOGIN"
            onClick={onSubmit}
            theme="primary"
            hasMarginTop={true}
            loading={loading}
          />
          <View style={styles.signup}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signupBtn}
              onPress={() => {
                navigation.push('SignIn', {isSignUp: true});
              }}>
              <Text style={styles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  forgot_button: {
    height: 30,
    marginTop: 20,
  },
  signup: {
    flexDirection: 'row',
    height: 20,
    marginTop: 20,
  },
  signupBtn: {
    marginLeft: 15,
  },
  signupText: {
    fontWeight: '800',
    color: '#d9487d',
  },
});

export default SignButtons;
