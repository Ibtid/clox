import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // height: '100vh',
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  firstSection: {
    backgroundColor: '#3598db',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
  },
  hospitals: {
    height: '17rem',
    width: '100%',
    display: 'flex',
    // flex: 0.3,
    marginTop: '-4.7rem',
    justifyContent: 'space-evenly',
    backgroundColor: '#3598db',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: '4.7rem',
    paddingBottom: 10,
  },
  reownedDoctors: {
    height: '15rem',
    display: 'flex',
    // flex: 0.3,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  crowdFundingAndBloodBank: {
    height: 'calc(100vh - 14rem - 20rem)',
    minHeight: '15rem',
    display: 'flex',
    flexDirection: 'row',
    // flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3598db',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 60,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reownedOwnerHeader: {
    backgroundColor: '#3598db',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  doctorCardList: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '90%',
  },
  hospitalHeader: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  shadowPropUp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  hospitalCardList: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  hospitalCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospitalCard: {
    height: '18vw',
    width: '18vw',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  DoctorCard: {
    height: '14vw',
    width: '14vw',
    backgroundColor: 'black',
    borderRadius: 4,
    marginHorizontal: 7,
  },
  thirdSectionCard: {
    height: '42vw',
    width: '42vw',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  thirdSectionCardTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '6vw',
    width: '100%',
  },
  thirdSectionCardButtonContainer: {
    height: '30vw',
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  thirdSectionCardButton: {
    height: '17vw',
    width: '17vw',
    backgroundColor: '#fd0101',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderWidth: 2,
  },
});
