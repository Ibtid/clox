import { StyleSheet } from 'react-native';

export const doctorDetailStyle = StyleSheet.create({
  rotatedOval: {
    height: '22rem',
    width: '150%',
    marginTop: '-14.5rem',
    marginLeft: '-2rem',
    backgroundColor: '#3598db',
    borderRadius: '45%',
    position: 'relative',
  },
  avatar: {
    height: '10rem',
    width: '10rem',
    borderRadius: '50%',
    position: 'absolute',
    bottom: -60,
    left: '40%',
    backgroundColor: 'orange',
  },

  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  smallDetails: {
    fontSize: '0.9rem',
    lineHeight: '0.9rem',
    marginBottom: 10,
  },
  card: {
    marginVertical: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderWidth: '1px',
    borderRadius: 10,
    borderColor: 'black',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: '0.5rem',
  },
  card__description: {
    flex: 1,
  },
  caption: {
    margin: 5,
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  chamberCard: {
    width: '100%',
    padding: 10,
    borderWidth: '1px',
    borderRadius: 10,
    borderColor: 'black',
  },
  alignRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: '4rem',
    width: '100%',
  },
  appointmentButton: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
