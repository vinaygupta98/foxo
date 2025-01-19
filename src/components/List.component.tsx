import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
const List = ({ items, style }: { items: string[]; style?: ViewStyle }) => {
  return (
    <View style={[styles.container, style]}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.number}>{index + 1}.</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  number: {
    fontWeight: 'bold',
    marginRight: 8,
    color: 'white',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
  },
});
export default List;
