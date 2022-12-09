import { StyleSheet } from 'react-native';

export const navbarStyle = StyleSheet.create({
  //navbar
  homeNavbarContainer: {
    position: 'sticky',
    top: 0,
    left: 0,
    // backgroundColor: '#3598db',
    zIndex: 3, // works on ios
    elevation: 3, // works on android
    width: '100%',
    height: '5rem',
    // flex: 1,
    // justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 20,
  },
  navbar: {
    position: 'sticky',
    top: 0,
    left: 0,
    // backgroundColor: '#3598db',

    width: '100%',
    height: '4rem',
    // flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: 'black',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 15,
  },
  navbarSearchbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: '0.5rem',
  },
  navbarSearchbar: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    flex: 0.6,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  navbarFirstRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  avatarContainer: {
    height: '3rem',
    width: '3rem',
    borderRadius: '50%',
    backgroundColor: 'white',
  },

  navbarButtonSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.25,
  },
});
