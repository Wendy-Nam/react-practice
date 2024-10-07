import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import FeedListItem from '../components/FeedListItem';
// interface contextType {
//   text: string;
//   setText: (text: string) => void | undefined;
// }

function FeedList({
  logs,
  onScrolledToBottom,
  ListHeaderComponent,
}: any): React.ReactElement {
  const onScroll = e => {
    if (!onScrolledToBottom) return;
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 72
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
    console.log({contentSize, layoutMeasurement, contentOffset});
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e8e8e8',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
