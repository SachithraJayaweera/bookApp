// app/screens/BookCatalog.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

const BookCatalog = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample book data
  const books = [
    {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Fiction',
      coverImage: 'url_to_cover_image_1',
    },
    {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Mystery',
      coverImage: 'url_to_cover_image_2',
    },
    // Add more book data here
  ];

  const handleBookPress = (book) => {
    // Add navigation logic to navigate to the book details screen
    navigation.navigate('BookDetails', { book });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search books"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBookPress(item)}>
            <View style={styles.bookCard}>
              <Image
                source={{ uri: item.coverImage }}
                style={styles.coverImage}
              />
              <View style={styles.bookInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  coverImage: {
    width: 100,
    height: 150,
  },
  bookInfo: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  genre: {
    fontSize: 14,
  },
});

export default BookCatalog;
