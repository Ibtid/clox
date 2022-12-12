import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const profileScreenStyle = StyleSheet.create({
  body: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    height: height,
    width: width,
  },
  iconRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },

  gradientBox: {
    backgroundImage: 'linear-gradient(to right, #7850dd , #41a1e0)',
    height: 0.35*width,
    width:  0.35*width,
    position: 'relative',
    borderRadius: 10,
    marginLeft:  0.15*width,
    padding: 7,
  },
  whiteCircle: {
    backgroundColor: '#f1f1f1',
    height:  0.40*width,
    width:  0.40*width,
    borderRadius: '50%',
    position: 'absolute',
    bottom: '-50%',
    left: '65%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeCircle: {
    backgroundColor: '#fd8469',
    height: '90%',
    width: '90%',
    borderRadius: '50%',
  },
  borderText: {
    width: '100%',
    paddingVertical: 7,
    paddingHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginBottom: 5,
  },
  gradientUnderline: {
    height: '0.1rem',
    width: '100%',
    backgroundImage: 'linear-gradient(to right, #7850dd , #fd8469)',
    marginTop: '22%',
    marginBottom: 10,
  },
});
