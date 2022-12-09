import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import Navbar from '../components/navbar';
import { fundSomeonelistStyle } from '../styles/screens/FundSomeoneListScreen.style';

const Item = ({ item }) => {
  return (
    <View style={fundSomeonelistStyle.card}>
      <View>
        <View style={fundSomeonelistStyle.cardView}>
          <View style={fundSomeonelistStyle.cardView__Left}></View>
          <View style={fundSomeonelistStyle.cardView__Right}>
            <Text
              style={fundSomeonelistStyle.cardView__Name}
              ellipsizeMode='tail'
              numberOfLines={1}>
              Ashraf Hakimi
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={fundSomeonelistStyle.cardView__hospitalName}>
              Square Hospital
            </Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={fundSomeonelistStyle.cardView__RequiredAmount}>
              Requred Amount: Tk.5,00,000
            </Text>
          </View>
        </View>
        <Text
          ellipsizeMode='tail'
          numberOfLines={4}
          style={fundSomeonelistStyle.cardView__details}>
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

const FundSomeoneListScreen = () => {
  let itemData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View>
      <Navbar />
      <View style={{ padding: 15 }}>
        <Text style={fundSomeonelistStyle.caption}>Fund Someone in need</Text>
        <ScrollView
          contentContainerStyle={{
            height: '72vh',
          }}>
          <FlatList
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

export default FundSomeoneListScreen;
