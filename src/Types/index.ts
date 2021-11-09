export interface IPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IList {
  id: number;
  label: string;
  logo: string;
  localization: {
    lat: number;
    lng: number;
  };
  address: {
    street: string;
    zipcode: string;
    city: string;
    state: string;
  };
}
