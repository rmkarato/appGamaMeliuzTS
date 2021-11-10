import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import api from '../../Services/api';
import {IStoreDetails} from '../../Types';

const Details: React.FC = () => {
  const [storeValue, setStoreValue] = useState(1);
  const [] = useState<IStoreDetails>();

  useEffect(() => {
    api
      .get(`discounts?store=${storeValue}`)
      .then(response => {
        console.log('Store', response.data);
        // setStoreValue(response.data);
      })
      .catch(e => console.log(e));
  }, [storeValue]);

  return (
    <View style={styles.default}>
      <Text style={styles.title}>Nome da Loja</Text>
      <Image source={require('../../Assets/Images/desconto-logo.png')} />
      <Text style={styles.discountLabel}>15% de desconto</Text>
      <Text style={styles.infoDetails}>Válido até...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  discountLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  infoDetails: {
    fontSize: 16,
  },
});

export default Details;
