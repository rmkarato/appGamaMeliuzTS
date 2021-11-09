import React from 'react';

import {View, StyleSheet, Dimensions, Image} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.default}>
      <Image source={require('../../Assets/Images/desconto-logo.png')} />
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

export default Home;
