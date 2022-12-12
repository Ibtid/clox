import { StyleSheet } from 'react-native';

export const hospitalListStyle = StyleSheet.create({
  caption: {
    marginVertical: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  captionText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  captionImage__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  captionImage__smallText: {
    fontSize: '0.9rem',
    marginLeft: '0.5rem',
  },
  nearbyHospital__container: {
    width: '100%',
    height: '7rem',
  },
  listedHospital__container: {
    width: '100%',
    height: 'calc(100vh - 21rem)',
    display: 'flex',
    alignItems: 'center',
  },
  listedHospitals: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-strech',
  },
  smallImage: {
    height: '4.5rem',
    width: '4.5rem',
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 3.4,
  },
  smallImage__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallImage__text: {
    fontSize: '0.9rem',
  },
  largeImage: {
    width: '6rem',
    height: '6rem',
    borderRadius: 10,
    marginHorizontal: '2.5vw',
    backgroundColor: 'black',
  },
  largeImage__Text: {
    fontSize: '1rem',
    marginBottom: 10,
  },
});
