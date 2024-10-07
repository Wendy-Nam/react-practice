import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

function CustomButton({theme, title, hasMarginTop, onClick, loading}) {
  const isPrimary = theme === 'primary';
  return (
    <>
      <TouchableOpacity
        style={[isPrimary && styles.primaryBtn, hasMarginTop && styles.margin]}
        onPress={onClick}>
        {loading ? (
          <ActivityIndicator animating={true} size={28} color="white" />
        ) : (
          <Text
            style={[
              isPrimary && styles.primaryText,
              !isPrimary && styles.secondaryText,
            ]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}

CustomButton.defaultProps = {
  theme: 'primary',
};

const styles = StyleSheet.create({
  margin: {
    marginTop: 20,
  },
  primaryBtn: {
    flexDirection: 'row',
    width: '80%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#d9487d',
  },
  primaryText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
  secondaryBtn: {
    flexDirection: 'row',
    width: '80%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    fontWeight: '600',
    color: '#d9487d',
    fontSize: 16,
  },
});

export default CustomButton;
