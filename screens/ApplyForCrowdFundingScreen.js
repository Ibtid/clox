import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Navbar from '../components/navbar';
import { applyForCrowdFundingScreenStyle } from '../styles/screens/ApplyForCrowdFundingScreen.style';

const ApplyForCrowdFundingScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <ScrollView>
      <Navbar />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Apply for Crowd Funding
        </Text>
        <View style={applyForCrowdFundingScreenStyle.flexedRow}>
          <TextInput
            style={applyForCrowdFundingScreenStyle.input}
            placeholder='Name..'
          />
          <TouchableOpacity style={applyForCrowdFundingScreenStyle.button}>
            <Text>Select Age</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            applyForCrowdFundingScreenStyle.button,
            { backgroundColor: 'black', marginTop: 15 },
          ]}>
          <Text style={{ color: 'white' }}>Add Pictures</Text>
        </TouchableOpacity>
        <View style={applyForCrowdFundingScreenStyle.imagesContainer}>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
        </View>
        <TextInput
          style={applyForCrowdFundingScreenStyle.inputsingle}
          placeholder='Details and Disease..'
        />
        <TextInput
          style={applyForCrowdFundingScreenStyle.inputsingle}
          placeholder='Currently admitted at'
        />
        <TextInput
          style={applyForCrowdFundingScreenStyle.inputsingle}
          placeholder='Required Fund'
        />
        <TouchableOpacity
          style={[
            applyForCrowdFundingScreenStyle.button,
            { backgroundColor: 'black', marginTop: 15 },
          ]}>
          <Text style={{ color: 'white' }}>Add Paperworks</Text>
        </TouchableOpacity>
        <View style={applyForCrowdFundingScreenStyle.imagesContainer}>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
          <View style={applyForCrowdFundingScreenStyle.image}></View>
        </View>
        <TouchableOpacity
          style={[applyForCrowdFundingScreenStyle.button, { marginTop: 15 }]}>
          <Text>bkash Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            applyForCrowdFundingScreenStyle.button,
            { marginTop: 15, marginBottom: '4rem' },
          ]}>
          <Text>Bank Address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ApplyForCrowdFundingScreen;
