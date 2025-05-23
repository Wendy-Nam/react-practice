import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TransparentCircleButtonProps {
  name: string;
  color: string;
  hasMarginRight?: boolean;
  onPress?: () => void;
}

function TransparentCircleButton({
  name,
  color,
  hasMarginRight,
  onPress,
}: TransparentCircleButtonProps): React.ReactElement {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
        ]}
        onPress={onPress}
        android_ripple={{color: '#ededed'}}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}

TransparentCircleButton.defaultProps = {
  name: 'check',
  color: 'grey',
  hasMarginRight: false,
  onPress: null,
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
