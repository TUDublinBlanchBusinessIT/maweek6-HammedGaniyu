import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-paper';

import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';

export default function App() {
  const [booking, setBooking] = useState({
    bookDate: "2000-02-02",
    movieTitle: "",
    numberOfSeats: 0,
    balcony: 0,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Movie Booking Form</Text>

      <Card>
        <PersonalInfo screenstyle={styles.container} data={booking} setData={setBooking} />
      </Card>

      
      <Card>
        <MovieBooking screenstyle={styles.container} data={booking} setData={setBooking} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
