import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const hospitalDetailStyle = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 0.5*width,
    backgroundColor: '#e0e0e0',
  },
  hospitalName: {
    fontSize: 1.5,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  card_section: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 2.5,
  },
  card__description: {
    fontSize: 0.85,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: '0.5rem',
  },
  caption: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 1.25,
  },

  underline: {
    height: '0.1rem',
    marginVertical: 7,
    width: '100%',
    backgroundColor: '#a0a0a0',
  },

  greenText: {
    color: 'green',
  },
  servicesList: {
    width: '100%',
    marginTop: 7,
  },
  serviceCard: {
    width: '48%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '1%',
    marginVertical: 5,
    fontSize: 0.7,
  },
});
