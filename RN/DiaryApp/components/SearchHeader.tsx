import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../context/SearchContext';

function SearchHeader(): React.ReactElement {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useContext(SearchContext);

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={onChangeText}
        placeholder="검색어를 입력하세요"
        autoFocus
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => onChangeText('')}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    marginLeft: 16,
    marginVertical: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  input: {
    flex: 1,
  },
  button: {
    marginRight: 8,
  },
});

export default SearchHeader;
