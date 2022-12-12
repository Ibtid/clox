import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import Navbar from '../components/navbar';
import Slider from '../components/Slider/Slider';
import { fundSomeonDetailStyle } from '../styles/screens/FundSomeonDetailScreen.style';

const FundSomeoneDetailScreen = () => {
  return (
    <ScrollView>
      <Navbar />
      <View style={{ padding: 15 }}>
        <Text>
          <Text style={{ fontSize: 1.5, fontWeight: 'bold' }}>Xabin</Text>
          <Text style={{ fontSize: 0.8 }}>, 32</Text>
        </Text>
        <Text
          style={{
            fontSize: 0.8,
            lineHeight: '0.8rem',
            marginTop: 7,
            marginBottom: 20,
          }}>
          <Text style={{ fontWeight: 'bold' }}>Disease Description</Text>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
        </Text>
        <Slider />
        <Text style={{ fontSize: 1, marginTop: 20 }}>
          Square Hospital Bangladesh
        </Text>
        <Text style={{ fontSize: 0.8, fontWeight: 'bold' }}>
          Required: 5,00,000 tk
        </Text>
        <Text
          style={{ fontSize: 1.25, marginTop: 10, fontWeight: 'bold' }}>
          Paperworks
        </Text>
        <View style={fundSomeonDetailStyle.paperworks}>
          <View style={fundSomeonDetailStyle.paperwork}></View>
          <View style={fundSomeonDetailStyle.paperwork}></View>
          <View style={fundSomeonDetailStyle.paperwork}></View>
        </View>
        <View style={fundSomeonDetailStyle.card}>
          <View
            style={{
              flex: 0.5,
              padding: 10,
              borderRightWidth: '0.5px',
              borderColor: 'black',
            }}>
            <Image
              source={require('../assets/bkash.jpeg')}
              style={{ width: 40, height: 40, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 0.8, fontWeight: 'bold' }}>
              Number: 01711234567
            </Text>
            <Text style={{ fontSize: 0.7 }}>Add Another Number</Text>
          </View>
          <View
            style={{
              flex: 0.5,
              padding: 10,
              borderLeftWidth: '0.5px',
              borderColor: 'black',
            }}>
            <Image
              source={require('../assets/bank.jpeg')}
              style={{ width: 40, height: 40, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 0.8,
                fontWeight: 'bold',
                lineHeight: '0.9rem',
              }}>
              Bank Address: 01711234567
            </Text>
            <Text
              style={{
                fontSize: 0.8,
                fontWeight: 'bold',
                lineHeight: '0.9rem',
                marginVertical: 7,
              }}>
              Phone Number: 01711234567
            </Text>
            <Text
              style={{
                fontSize: 0.8,
                fontWeight: 'bold',
                lineHeight: '0.9rem',
              }}>
              Routing Number: 40937
            </Text>
            <Text style={{ fontSize: 0.7 }}>Add Another Number</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FundSomeoneDetailScreen;
