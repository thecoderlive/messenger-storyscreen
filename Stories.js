import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_thumbnail}
    source={{uri: item.story_thumbnail}}
    />
<Image
    style={styles.profile_pic}
    source={{uri: item.profile_pic}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Stories;

const styles = StyleSheet.create({
    'story_thumbnail': {
        'width': '42vw',
        'height': '55vw',
        'marginTop': 5,
        'borderRadius': 12,
        'marginLeft': 10
    },
    'profile_pic': {
        'width': '10vw',
        'height': '10vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 10
    },
    'user_name': {
        'color': '#080707',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});