import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Navbar from '../components/navbar';
import { doctorDetailStyle } from '../styles/screens/DoctorDetail.style';

const DoctorDetailScreen = () => {
  return (
    <ScrollView>
      <Navbar />
      <View style={doctorDetailStyle.rotatedOval}>
        <View style={doctorDetailStyle.avatar}></View>
      </View>
      <View style={{ padding: 20, marginTop: 30 }}>
        <Text style={doctorDetailStyle.name}>Dr. Emrul Hasan</Text>
        <Text style={doctorDetailStyle.smallDetails}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>

        <View style={doctorDetailStyle.card}>
          <Image
            style={doctorDetailStyle.icon}
            source={require('../assets/hospitalcard.jpeg')}
          />
          <Text style={doctorDetailStyle.card__description}>
            MBBS, BCS (Health), DDV (Skin & VD, BSMMU)
          </Text>
        </View>
        <View style={doctorDetailStyle.card}>
          <Image
            style={doctorDetailStyle.icon}
            source={require('../assets/medal.jpeg')}
          />
          <Text style={doctorDetailStyle.card__description}>
            MBBS, BCS (Health), DDV (Skin & VD, BSMMU)
          </Text>
        </View>
        <View style={doctorDetailStyle.card}>
          <Image
            style={doctorDetailStyle.icon}
            source={require('../assets/hospital.jpeg')}
          />
          <Text style={doctorDetailStyle.card__description}>
            MBBS, BCS (Health), DDV (Skin & VD, BSMMU)
          </Text>
        </View>
        <Text style={doctorDetailStyle.caption}>Chamber and Appointment</Text>
        <View style={doctorDetailStyle.chamberCard}>
          <Text style={{ fontWeight: 'bold' }}>
            Intensive Care Diagnostic & Consultant Center
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold', fontSize: 0.9 }}>
              Address:{' '}
            </Text>
            <Text style={{ fontSize: 0.9 }}>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters
            </Text>
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold', fontSize: 0.9 }}>
              Visiting time:{' '}
            </Text>
            <Text style={{ fontSize: 0.9 }}>5pm - 8pm</Text>
          </Text>
        </View>
        <View style={doctorDetailStyle.alignRight}>
          <Text style={doctorDetailStyle.appointmentButton}>
            Make an appointment
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DoctorDetailScreen;
