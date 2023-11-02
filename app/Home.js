import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { firebase } from '../FirebaseConfig';

const Home = ({ navigation }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data())
        } else {
          console.log('user does not exist')
        }
      })
  }, [])

  const handleBrowseBooks = () => {
    // Add navigation logic to navigate to the book catalog screen
    navigation.navigate('BookCatalogScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Hello, {name.firstName}
        </Text>
        <TouchableOpacity style={styles.browseButton} onPress={() => { /*firebase.auth.signOut()*/ }}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome to Our Bookstore App</Text>
        <Text style={styles.introText}>
          Discover a world of books and explore our collection.
        </Text>
        <TouchableOpacity style={styles.browseButton} onPress={handleBrowseBooks}>
          <Text style={styles.buttonText}>Browse Books</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  introText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  browseButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
