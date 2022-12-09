import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { navbarStyle } from '../styles/components/navbar.style';

const Navbar = () => {
  const [value, onChangeText] = React.useState('Search');
  return (
    <View style={[navbarStyle.homeNavbarContainer, navbarStyle.shadowProp]}>
      <View style={[navbarStyle.navbar, navbarStyle.shadowProp]}>
        <View style={navbarStyle.navbarFirstRow}>
          <View style={navbarStyle.avatarContainer}></View>
          <View
            style={{
              color: 'white',
              flex: 0.6,
              display: 'flex',
              alignItems: 'flex-start',
            }}>
            <Text style={{ color: 'white' }}>Ishmam Tasnim</Text>
            <View style={navbarStyle.navbarSearchbarContainer}>
              <View style={navbarStyle.navbarSearchbar}>
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

          <View style={navbarStyle.navbarButtonSection}>
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
      {/* <View style={navbarStyle.navbarSearchbarContainer}>
      <View style={navbarStyle.navbarSearchbar}>
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
  );
};

export default Navbar;
