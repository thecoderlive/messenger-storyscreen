import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'

const Story = () => (
<ScrollView style={styles.story} showsVerticalScrollIndicator={false}>
<Stories item={item.stories}/>
</ScrollView>
)

export default Story;

const styles = StyleSheet.create({
    
});