import { StyleSheet } from 'react-native';

export const reownedDoctorsListStyle = StyleSheet.create({
  screenBody: {
    height: 'calc(100vh - 7rem)',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  reownedDoctorsCaption: {
    fontSize: 1.2,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardView: {
    height: '5.7rem',
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: '0.25rem',
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
    fontSize: 1.1,
  },
  cardView__hospitalName: {
    fontSize: 1,
  },
  cardView__details: {
    fontSize: 0.9,
    lineHeight: '1rem',
    numberOfLines: 2,
  },
  reownedDoctorCardList: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '-0.5rem',
  },
});
