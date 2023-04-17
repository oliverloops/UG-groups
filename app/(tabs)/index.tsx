import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from '../../components/Themed';
//* UI comps.
import Header from '../../components/molecules/Header';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
