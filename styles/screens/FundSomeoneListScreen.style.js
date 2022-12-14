import { StyleSheet } from 'react-native';

export const fundSomeonelistStyle = StyleSheet.create({
  caption: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: 10,
    padding: 10,
    height: '9.4rem',
  },
  cardView: {
    height: '5rem',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: '4rem',
    width: '4rem',
    borderRadius: 10,
  },
  cardView__Right: {
    marginLeft: '0.5rem',
    flex: 1,
  },
  cardView__Name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  cardView__hospitalName: {
    fontSize: '1rem',
  },
  cardView__RequiredAmount: {
    fontSize: '0.9rem',
    lineHeight: '1rem',
  },
  cardView__details: {
    marginTop: -10,
    fontSize: '0.85rem',
    lineHeight: '0.9rem',
  },
});
