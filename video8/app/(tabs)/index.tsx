import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const App = () =>  {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ width: 2000, height: 30, backgroundColor: '#0abde3' }}></View>
      <Text>Desty Laela Yulisya</Text>
      <Text>Indonesia</Text>
      <Hobby />
      <Text>*****</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1, marginTop: 10, padding: 5 }} placeholder="Masukkan teks disini" />
    </View>
  );
};

const Hobby = () => {
    return <Text>Memasak</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{ uri: 'https://e7.pngegg.com/pngimages/946/820/png-clipart-animation-food-cook.png' }}
      style={{ width: 500, height: 400, marginTop: 10 }}
    />
  );
};

export default App;