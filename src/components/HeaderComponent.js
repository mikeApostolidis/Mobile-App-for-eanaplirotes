import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.headerText}>eAnaplirotes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgb(8 145 178)', // Customize the background color
    padding: 20,
    alignItems: 'flex-start',
  },
  headerText: {
    color: '#fff', // Customize the text color
    fontSize: 20,
    fontWeight: 'bold',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
});

export default HeaderComponent;