import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListItem = ({name, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text numberOfLines={1} style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
  },
});
