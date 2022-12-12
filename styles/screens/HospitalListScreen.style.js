import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
    fontSize: 1.2,
    fontWeight: 'bold',
  },
  captionImage__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  captionImage__smallText: {
    fontSize: 0.9,
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
    fontSize: 0.9,
  },
  largeImage: {
    width: '6rem',
    height: '6rem',
    borderRadius: 10,
    marginHorizontal: 0.025*width,
    backgroundColor: 'black',
  },
  largeImage__Text: {
    fontSize: 1,
    marginBottom: 10,
  },
});
