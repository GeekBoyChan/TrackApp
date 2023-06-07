// import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <Text h2>Create a Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
