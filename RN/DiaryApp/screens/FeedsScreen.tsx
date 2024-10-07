import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import LogContext from '../context/LogContext';
import FloatingWriteButton from '../components/FloatingWritingButton';
import FeedList from '../components/FeedList';
// interface contextType {
//   text: string;
//   setText: (text: string) => void | undefined;
// }

function FeedsScreen(): React.ReactElement {
  const {text, setText} = useContext(LogContext);
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  console.log(JSON.stringify(logs, null, 2));

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요."
        style={styles.input}
      />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
