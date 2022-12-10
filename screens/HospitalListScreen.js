import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import Navbar from '../components/navbar';
import { hospitalListStyle } from '../styles/screens/HospitalListScreen.style';

const Item = ({ item }) => {
  return <View></View>;
};

const HospitalListScreen = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View>
      <Navbar />
      <View style={{ paddingHorizontal: 15 }}>
        <View style={hospitalListStyle.caption}>
          <Text style={hospitalListStyle.captionText}>Nearby Hospitals</Text>
          <View style={hospitalListStyle.captionImage__container}>
            <Image
              source={require('../assets/distance.jpeg')}
              style={{ width: 20, height: 20 }}
            />
            <Text style={hospitalListStyle.captionImage__smallText}>5 KM</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={hospitalListStyle.nearbyHospital__container}>
          <FlatList
            data={items}
            horizontal
            renderItem={({ item }) => (
              <View style={hospitalListStyle.smallImage__container}>
                <View style={hospitalListStyle.smallImage}></View>
                <Text style={hospitalListStyle.smallImage__text}>
                  X Hospital
                </Text>
              </View>
            )}
          />
        </ScrollView>
        <View style={hospitalListStyle.caption}>
          <Text style={hospitalListStyle.captionText}>Listed Hospitals</Text>
          <View style={hospitalListStyle.captionImage__container}>
            <Image
              source={require('../assets/nearby__search.jpeg')}
              style={{ width: 20, height: 20 }}
            />
            <Text style={hospitalListStyle.captionImage__smallText}>
              Filter
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={hospitalListStyle.listedHospital__container}>
          <FlatList
            data={items}
            numColumns={3}
            contentContainerStyle={hospitalListStyle.listedHospitals}
            renderItem={({ item }) => (
              <View style={hospitalListStyle.smallImage__container}>
                <View style={hospitalListStyle.largeImage}></View>
                <Text style={hospitalListStyle.largeImage__Text}>
                  X Hopsital
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HospitalListScreen;
