import { StyleSheet } from 'react-native';

export const applyForCrowdFundingScreenStyle = StyleSheet.create({
  input: {
    height: 30,
    width: '60%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    height: 30,
    width: '38%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexedRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  imagesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {
    height: '4rem',
    width: '4rem',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
  inputsingle: {
    height: 30,
    width: '60%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginTop: 15,
  },
});
