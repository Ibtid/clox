import { StyleSheet } from 'react-native';

export const reownedDoctorsListStyle = StyleSheet.create({
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

  screenBody: {
    height: 'calc(100vh - 6rem)',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  reownedDoctorsCaption: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  cardView: {
    height: '5.7rem',
    width: '100%',
    borderRadius: 15,
    borderWidth: '1px',
    borderColor: 'black',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginVertical: '0.5rem',
  },
  cardView__Left: {
    backgroundColor: 'black',
    height: '5rem',
    width: '5rem',
    borderRadius: 10,
  },
  cardView__Right: {
    marginLeft: '0.5rem',
    flex: 1,
  },
  cardView__doctorName: {
    fontSize: '1.1rem',
  },
  cardView__hospitalName: {
    fontSize: '1rem',
  },
  cardView__details: {
    fontSize: '0.9rem',
    lineHeight: '1rem',
    numberOfLines: 2,
  },
  reownedDoctorCardList: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '-0.5rem',
  },
});
