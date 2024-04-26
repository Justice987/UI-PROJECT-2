
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { router } from 'expo-router';


const { width: WIDTH } = Dimensions.get('window');
const BUTTONS = [
  { amount: '$3.500', text: 'Transfer', color: '#EFF3FF', link: '/transfer' },
  { amount: '$3.500', text: 'Shopping', color: '#CCEF8B', link: '/shopping' },
  { amount: '$3.500', text: 'Internet', color: '#FaC8C7', link: '/card' },
  { amount: '$3.500', text: 'Ticket', color: '#EFF3FF', link: '/card' },
];

const GRAPH = [
  { height: 100, amount: '1.2k', color: 'black' },
  { height: 70, amount: '500', color: 'black' },
  { height: 60, amount: '423', color: 'black' },
  { height: 85, amount: '1k', color: 'black' },
  { height: 40, amount: '213', color: 'black' },
  { height: 50, amount: '314', color: 'black' },
  { height: 75, amount: '543', color: '#BDC3D3' },
];

const HISTORY = [
  {
    title: 'Shopping at Adidas',
    card: '****3142',
    type: 'spent',
    date: '01 Mar',
    amount: '200',
  },
  {
    title: 'Transfer for Maryom gh...',
    card: '****3142',
    type: 'spent',
    date: '03 Mar',
    amount: '1,022',
  },
  {
    title: 'Shopping at Adidas',
    card: '****3142',
    type: 'spent',
    date: '01 Mar',
    amount: '200',
  },
  {
    title: 'Transfer for Maryom gh...',
    card: '****3142',
    type: 'spent',
    date: '03 Mar',
    amount: '1,022',
  },
];

export default function Page() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.row, { gap: 10 }]}>
        <View style={styles.arrow}>
          <AntDesign name="arrowleft" size={18} color="black" />
        </View>
        <Text style={styles.title}>
          Spending
        </Text>
      </View>
      <FlatList
        data={HISTORY}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={(
          <React.Fragment>
            <View style={styles.card}>
              <Text style={{ marginBottom: 6 }}>
                March Spending
              </Text>
              <View style={[styles.row, { gap: 4 }]}>
                <Text style={{ fontSize: 20 }} children='$' />
                <Text style={styles.cardText} children="6,421" />
              </View>
            </View>
            <FlatList
              horizontal
              data={GRAPH}
              scrollEnabled={false}
              style={{ marginTop: 20 }}
              contentContainerStyle={styles.graph}
              renderItem={({ item }) => (
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={[
                      styles.graphCard,
                      { height: item.height, backgroundColor: item.color }
                    ]}
                  />
                  <Text
                    style={{ fontWeight: '600', marginTop: 4 }}
                    children={item.amount}
                  />
                </View>
              )}
            />
            <FlatList
              data={BUTTONS}
              numColumns={2}
              scrollEnabled={false}
              style={{ marginVertical: 20, marginLeft: -10 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => router.navigate(item.link)}
                  style={[styles.item, { backgroundColor: item.color }]}
                >
                  <View style={[styles.arrow, styles.itemArrow]}>
                    <Feather name="arrow-up-right" size={18} color="black" />
                  </View>
                  <Text children={item.amount} />
                  <Text style={{ fontWeight: '700', fontSize: 18 }}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <View
              style={[
                styles.row,
                { justifyContent: 'space-between', marginBottom: 16 }
              ]}
            >
              <Text style={{ fontWeight: '700', fontSize: 18 }}>
                History
              </Text>
              <TouchableOpacity>
                <AntDesign name="arrowright" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <View style={[styles.row, { marginBottom: 12, gap: 10 }]}>
            <View style={[styles.arrow, styles.historyImage]} />
            <View style={[styles.row, { flex: 1, justifyContent: 'space-between' }]}>
              <View>
                <Text style={{ fontWeight: '600' }}>
                  {item.title}
                </Text>
                <Text style={{ color: 'gray' }}>
                  {item.card}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: '600' }}>
                  - ${item.amount}
                </Text>
                <Text style={{ color: 'gray' }}>
                  {item.date}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#E5ECFF'
  },
  arrow: {
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
    width: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginTop: 30,
  },
  cardText: {
    fontSize: 30,
    fontWeight: '700',
  },
  graph: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  graphCard: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: 30,
  },
  item: {
    width: WIDTH / 2 - 26,
    borderRadius: 20,
    paddingLeft: 12,
    padding: 8,
    margin: 10,
  },
  itemArrow: {
    alignSelf: 'flex-end',
    padding: 10,
    width: 40,
  },
  historyImage: {
    backgroundColor: '#D4DEF9',
    height: 40,
    width: 40,
  }
});
