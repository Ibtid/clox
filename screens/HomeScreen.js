import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
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
  const [value, onChangeText] = React.useState('Search');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navbar */}
      <View style={[styles.homeNavbarContainer, styles.shadowProp]}>
        <View style={[styles.navbar, styles.shadowProp]}>
          <View style={styles.navbarFirstRow}>
            <View style={styles.avatarContainer}></View>
            <View
              style={{
                color: 'white',
                flex: 0.6,
                display: 'flex',
                alignItems: 'flex-start',
              }}>
              <Text style={{ color: 'white' }}>Ishmam Tasnim</Text>
              <View style={styles.navbarSearchbarContainer}>
                <View style={styles.navbarSearchbar}>
                  <Image
                    source={require('../assets/search.jpeg')}
                    style={{ width: 20, height: 20, borderRadius: '50%' }}
                  />
                  <TextInput
                    numberOfLines={1}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    style={{ backgroundColor: 'white', width: '80%' }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.navbarButtonSection}>
              <Image
                source={require('../assets/blood-plus.jpeg')}
                style={{ width: 30, height: 30, borderRadius: '50%' }}
              />
              <Image
                source={require('../assets/heart-taka.jpeg')}
                style={{ width: 30, height: 30, borderRadius: '50%' }}
              />
            </View>
          </View>
        </View>
        {/* <View style={styles.navbarSearchbarContainer}>
          <View style={styles.navbarSearchbar}>
            <Image
              source={require('../assets/search.jpeg')}
              style={{ width: 20, height: 20, borderRadius: '50%' }}
            />
            <TextInput
              numberOfLines={1}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ backgroundColor: 'white', width: '80%' }}
            />
          </View>
        </View> */}
      </View>
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
          <View style={styles.thirdSectionCardButtonContainer}>
            <View style={styles.thirdSectionCardButton}>
              <Text>Raise</Text>
              <Text>Fund</Text>
            </View>
            <View style={styles.thirdSectionCardButton}>
              <Text>Fund</Text>
              <Text>Someone</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdSectionCard}>
          <View style={styles.thirdSectionCardTextContainer}>
            <Text>Blood Bank</Text>
          </View>
          <View style={styles.thirdSectionCardButtonContainer}>
            <View style={styles.thirdSectionCardButton}>
              <Text>Search</Text>
              <Text>Blood</Text>
            </View>
            <View style={styles.thirdSectionCardButton}>
              <Text>Donate</Text>
              <Text>Blood</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
