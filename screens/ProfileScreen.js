import React from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { profileScreenStyle } from '../styles/screens/ProfileScreen.style';

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={profileScreenStyle.body}>
        <View style={profileScreenStyle.iconRow}>
          <Image
            source={require('../assets/SVGs/Arrow.svg')}
            style={{ height: 40, width: 40 }}
          />
          <Image
            source={require('../assets/SVGs/Edit.svg')}
            style={{ height: 40, width: 40 }}
          />
        </View>

        <View style={profileScreenStyle.gradientBox}>
          <Text style={profileScreenStyle.borderText}>Blood Group: B+</Text>
          <Text style={{ color: 'white', fontSize: 0.8 }}>Age: 34</Text>
          <View style={profileScreenStyle.whiteCircle}>
            <View style={profileScreenStyle.orangeCircle}></View>
          </View>
          <Image
            source={require('../assets/SVGs/Checkbox.svg')}
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              bottom: '-40%',
              left: '150%',
            }}
          />
        </View>
        <View style={profileScreenStyle.gradientUnderline}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 1.5,
            fontWeight: 'bold',
            marginHorizontal: 'auto',
          }}>
          Xabin Hossain
        </Text>
        <Text
          style={{
            color: '#e1e1e1',
            fontSize: 1,

            marginHorizontal: 'auto',
          }}>
          Moghbazar,Dhaka
        </Text>
        <Text
          style={{
            marginVertical: 20,
            color: '#f0f0f0',
            fontSize: 0.8,
            marginHorizontal: 'auto',
            lineHeight: '0.8rem',
            textAlign: 'center',
          }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 1,
            fontWeight: 'bold',
          }}>
          Last Donated Blood: 2 months ago
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
