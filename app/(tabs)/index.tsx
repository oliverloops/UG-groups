import { StyleSheet, Dimensions } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from '../../components/Themed';
//* UI comps.
import Header from '../../components/molecules/Header';
import Post from '../../components/molecules/Post';
import ImagePost from '../../components/molecules/ImagePost';

const screenHeight = Dimensions.get('window').height;

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Post />
          <ImagePost image={'https://picsum.photos/id/74/200/300'} />
          <Post />
          <Post />
          <ImagePost image={'https://picsum.photos/id/64/200/300'} />
          <Post />
          <ImagePost image={'https://picsum.photos/id/1/200/300'} />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 20,
  },
  content: {
    paddingBottom: '38%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
