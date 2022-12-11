import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
} from 'react-native';
import Navbar from '../components/navbar';
import { styles } from '../styles/screens/HomeScreenStyle';

const Item = ({ item }) => {
  return (
    <View style={styles.hospitalCardContainer}>
      <View style={styles.DoctorCard}></View>
      <Text>Dr X</Text>
    </View>
  );
};

const HomeScreen = () => {
  let itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />
      <View style={[styles.firstSection, styles.shadowProp]}>
        {/* Hospitals */}
        <View style={styles.hospitals}>
          <View style={styles.sectionHeader}>
            <View style={styles.hospitalHeader}>
              <Text style={{ color: 'white' }}>Hospitals</Text>
            </View>
            <View>
              <Text style={{ color: 'white' }}>See all</Text>
            </View>
          </View>
          <View style={styles.hospitalCardList}>
            <View style={styles.hospitalCardContainer}>
              <View style={styles.hospitalCard}></View>
              <Text>X Hospital</Text>
            </View>
            <View style={styles.hospitalCardContainer}>
              <View style={styles.hospitalCard}></View>
              <Text>X Hospital</Text>
            </View>
            <View style={styles.hospitalCardContainer}>
              <View style={styles.hospitalCard}></View>
              <Text>X Hospital</Text>
            </View>
            <View style={styles.hospitalCardContainer}>
              <View style={styles.hospitalCard}></View>
              <Text>X Hospital</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Reowned Doctors */}
      <View style={styles.reownedDoctors}>
        <View style={styles.sectionHeader}>
          <View style={styles.reownedOwnerHeader}>
            <Text>Reowned Doctors</Text>
          </View>
          <View>
            <Text>See all</Text>
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.doctorCardList}
          data={itemData}
          numColumns={5}
          renderItem={Item}
          keyExtractor={(item, index) => index}
        />
      </View>
      {/* Crowd Funding and Blood bank */}
      <View style={[styles.crowdFundingAndBloodBank, styles.shadowPropUp]}>
        <View style={styles.thirdSectionCard}>
          <View style={styles.thirdSectionCardTextContainer}>
            <Text>Crowd Funding</Text>
          </View>
          <ImageBackground
            style={styles.thirdSectionCardButtonContainer}
            source={require('../assets/SVGs/pexels-karolina-grabowska-4386442.jpg')}>
            <View style={[styles.thirdSectionCardButton, styles.shadowProp]}>
              <Text>Raise</Text>
              <Text>Fund</Text>
            </View>
            <View style={[styles.thirdSectionCardButton, styles.shadowProp]}>
              <Text>Fund</Text>
              <Text>Someone</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.thirdSectionCard}>
          <View style={styles.thirdSectionCardTextContainer}>
            <Text>Blood Bank</Text>
          </View>
          <ImageBackground
            style={styles.thirdSectionCardButtonContainer}
            source={require('../assets/SVGs/pexels-anna-shvets-3786124.jpg')}>
            <View style={[styles.thirdSectionCardButton, styles.shadowProp]}>
              <Text>Search</Text>
              <Text>Blood</Text>
            </View>
            <View style={[styles.thirdSectionCardButton, styles.shadowProp]}>
              <Text>Donate</Text>
              <Text>Blood</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
