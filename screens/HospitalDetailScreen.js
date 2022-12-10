import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import Navbar from '../components/navbar';
import { hospitalDetailStyle } from '../styles/screens/HospitalDetailScreen.style';

const Item = ({ item }) => {
  return (
    <Text style={hospitalDetailStyle.serviceCard}>
      <Text>Wednesday</Text>
      <Text style={hospitalDetailStyle.greenText}>Open 24 hours</Text>
    </Text>
  );
};

const HospitalDetailScreen = () => {
  let itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView>
      <Navbar />
      <View style={hospitalDetailStyle.coverImage}></View>
      <View style={{ padding: 20, marginBottom: '4rem' }}>
        <Text style={hospitalDetailStyle.hospitalName}>
          Evercare Hospital Bangladesh
        </Text>
        <View style={hospitalDetailStyle.card}>
          <View style={hospitalDetailStyle.card_section}>
            <Image
              style={hospitalDetailStyle.icon}
              source={require('../assets/hospital.jpeg')}
            />
            <Text style={hospitalDetailStyle.card__description}>
              <Text>
                Road 18, Plot 81, Bashundhara Residential Area, Dhaka 1229.{' '}
              </Text>
              <Text
                style={{ textDecorationLine: 'underline', color: '#3598db' }}>
                View on Google Map
              </Text>
            </Text>
          </View>
          <View style={hospitalDetailStyle.card_section}>
            <Image
              style={hospitalDetailStyle.icon}
              source={require('../assets/hospital.jpeg')}
            />
            <Text style={hospitalDetailStyle.card__description}>
              01914001234
            </Text>
          </View>
          <View style={hospitalDetailStyle.card_section}>
            <Image
              style={hospitalDetailStyle.icon}
              source={require('../assets/hospital.jpeg')}
            />
            <Text style={hospitalDetailStyle.card__description}>
              hospital@evercarebd.com
            </Text>
          </View>
        </View>
        <Text style={hospitalDetailStyle.caption}>Service hours</Text>
        <View style={hospitalDetailStyle.underline}></View>
        <Text style={hospitalDetailStyle.greenText}>Open 24 hours</Text>
        <FlatList
          contentContainerStyle={hospitalDetailStyle.servicesList}
          data={itemData}
          numColumns={2}
          renderItem={Item}
          keyExtractor={(item, index) => index}
        />
        <Text style={hospitalDetailStyle.caption}>Facilities</Text>
        <View style={hospitalDetailStyle.underline}></View>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text style={hospitalDetailStyle.caption}>Services</Text>
        <View style={hospitalDetailStyle.underline}></View>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
        <Text>1. Smart Reception and Enquire Check</Text>
      </View>
    </ScrollView>
  );
};

export default HospitalDetailScreen;
