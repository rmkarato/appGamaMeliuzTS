import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Contact: React.FC = () => {
  return (
    <View style={styles.default}>
      <Text style={styles.textWrapper}>Contatos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  textWrapper: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Contact;
