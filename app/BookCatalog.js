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
    {
      "id": "2",
      "title": "The Adventures of Sherlock Holmes",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": "url_to_cover_image_3"
    },
    {
      "id": "3",
      "title": "The Hound of the Baskervilles",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": "url_to_cover_image_4"
    },
    {
      "id": "4",
      "title": "The Sign of the Four",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": "url_to_cover_image_5"
    },
    {
      "id": "5",
      "title": "The Valley of Fear",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": "url_to_cover_image_6"
    },
    {
      "id": "6",
      "title": "A Scandal in Bohemia and Other Stories",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": ""
    },
    {
      "id": "7",
      "title": "\"The Adventure of the Speckled Band\" and Other Stories",
      "author": "Arthur Conan Doyle",
      "genre": "Mystery",
      "coverImage": ""
    },
    {
      "id": 8,
      title: 'The Complete Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      genre: 'Mystery',
      coverImage: 'url_to_cover_image_7'
    },
    {
      id: '9',
      title: 'The Return of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      genre: 'Mystery',
      coverImage: 'url_to_cover_image_8'
    },
    {
      id: '10',
      title: 'His Last Bow',
      author: 'Arthur Conan Doyle',
      genre: 'Mystery',
      coverImage: ''
    },
    {
      id: '11',
      title: 'The Case-Book of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      genre: 'Mystery',
      coverImage: ''
    }
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
