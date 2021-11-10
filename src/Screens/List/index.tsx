import React, {useEffect, useState} from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import api from '../../Services/api';
import {IPosition, IList} from '../../Types';

const List: React.FC = () => {
  const [position, setPosition] = useState<IPosition>({
    latitude: -23.62306,
    longitude: -46.5511,
    latitudeDelta: 0.0911,
    longitudeDelta: 0.0411,
  });
  const [list, setList] = useState<IList[]>([]);

  const handlePosition = () => {
    setPosition({
      latitude: -23.62306,
      longitude: -46.5511,
      latitudeDelta: 0.0911,
      longitudeDelta: 0.0411,
    });
  };

  useEffect(() => {
    api
      .get('stores')
      .then(response => {
        setList(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.default}>
      <MapView
        style={styles.mapStyle}
        initialRegion={position}
        // provider={PROVIDER_GOOGLE}
      >
        {list.map(store => (
          <Marker
            key={store.id}
            pinColor="purple"
            coordinate={{
              latitude: store.localization.lat,
              longitude: store.localization.lng,
            }}>
            <Callout onPress={handlePosition}>
              <View style={styles.default}>
                <Text>{store.label}</Text>
                <Text>
                  <Image source={{uri: store.logo}} style={styles.logoStyle} />
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mapStyle: {
    height: '100%',
    width: '100%',
  },
  logoStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});

export default List;
