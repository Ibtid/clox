import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import Navbar from '../components/navbar';
import { reownedDoctorsListStyle } from '../styles/screens/ReownedDoctorsScreen.style';

const Item = ({ item }) => {
  return (
    <View style={reownedDoctorsListStyle.cardView}>
      <View style={reownedDoctorsListStyle.cardView__Left}></View>
      <View style={reownedDoctorsListStyle.cardView__Right}>
        <Text
          style={reownedDoctorsListStyle.cardView__doctorName}
          ellipsizeMode='tail'
          numberOfLines={1}>
          Reowned Doctors
        </Text>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={reownedDoctorsListStyle.cardView__hospitalName}>
          Reowned Doctors
        </Text>
        <Text
          ellipsizeMode='tail'
          numberOfLines={2}
          style={reownedDoctorsListStyle.cardView__details}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </View>
    </View>
  );
};

const ReownedDoctorsScreen = () => {
  let itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View>
      <Navbar />
      <View style={reownedDoctorsListStyle.screenBody}>
        <Text style={reownedDoctorsListStyle.reownedDoctorsCaption}>
          Reowned Doctors
        </Text>
        <ScrollView>
          <FlatList
            contentContainerStyle={
              reownedDoctorsListStyle.reownedDoctorCardList
            }
            data={itemData}
            numColumns={1}
            renderItem={Item}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ReownedDoctorsScreen;
