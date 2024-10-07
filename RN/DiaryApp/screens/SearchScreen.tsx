import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EmptySearchResult from '../components/EmptySearchResult';
import FeedList from '../components/FeedList';
import SearchHeader from '../components/SearchHeader';
import LogContext from '../context/LogContext';
import SearchContext from '../context/SearchContext';

function SearchScreen(): React.ReactElement {
  const {keyword}: any = useContext(SearchContext);
  const {logs}: any = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter((log: any) =>
          [log.title, log.body].some((text: string) => text.includes(keyword)),
        );
  let result: JSX.Element = <></>;
  if (keyword === '') {
    result = <EmptySearchResult type="EMPTY_KEYWORD" />;
  } else if (filtered.length === 0) {
    result = <EmptySearchResult type="NOT_FOUND" />;
  } else {
    result = <FeedList logs={filtered} />;
  }

  return (
    <View style={styles.block}>
      <SearchHeader />
      {result}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
