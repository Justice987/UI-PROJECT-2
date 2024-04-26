
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import React from 'react';

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
      <StatusBar style='dark' />
      <View style={[styles.row, { gap: 10 }]}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => router.back()}
        >
          <AntDesign name='arrowleft' size={18} color='black' />
        </TouchableOpacity>
        <Text style={styles.title}>Card</Text>
      </View>
      <FlatList
        data={HISTORY}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={(
          <React.Fragment>
            <View style={styles.card}>
              <Text style={{ marginBottom: 6 }}>
                Total Spending
              </Text>
              
              <View style={[styles.row, { gap: 4 }]}>
                <Text style={{ fontSize: 20 }} children='$' />
                <Text style={styles.cardText} children='852.64' />
              </View>
            </View>
            <View style={styles.hero}>
              <Image
                source={require('@/assets/images/visa-logo.png')}
                style={styles.heroImage}
                resizeMode='contain'
              />
              <Text style={{ color: 'white', marginBottom: 4 }}>
                Family Card
              </Text>
              <Text style={{ color: 'yellow', fontSize: 24 }}>
                $40,500.80
              </Text>
              <View style={[styles.row, { marginTop: 10, marginBottom: 16 }]}>
                <View style={[styles.arrow, styles.historyImage]} />
                <View style={[
                  styles.arrow,
                  styles.historyImage,
                  { backgroundColor: 'royalblue', left: -16, zIndex: 1 }
                ]} />
                <TouchableOpacity
                  style={[styles.arrow, styles.heroAdd]}
                  activeOpacity={0.7}
                >
                  <Ionicons name='add-outline' size={18} color='black' />
                </TouchableOpacity>
              </View>
              <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <View>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    Account number
                  </Text>
                  <Text style={styles.heroText}>
                    ****3142
                  </Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    Valid Thru
                  </Text>
                  <Text style={styles.heroText}>
                    05/28
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.heroButton}
                activeOpacity={0.8}
              >
                <Text style={styles.heroAction}>
                  Transfer
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              data={GRAPH}
              scrollEnabled={false}
              style={{ marginTop: 20, marginBottom: 40 }}
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
                <AntDesign name='arrowright' size={18} color='black' />
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
    backgroundColor: '#E5ECFF',
    paddingHorizontal: 16,
    flex: 1,
  },
  arrow: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 90,
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
    fontWeight: '700',
    fontSize: 30,
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
  historyImage: {
    backgroundColor: '#D4DEF9',
    height: 40,
    width: 40,
  },
  hero: {
    backgroundColor: 'black',
    marginVertical: 20,
    borderRadius: 30,
    padding: 20,
  },
  heroImage: {
    alignSelf: 'flex-end',
    height: 30,
    width: 34,
  },
  heroAdd: {
    width: undefined,
    padding: 10.2,
    left: -32,
    zIndex: 2,
  },
  heroText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 12,
  },
  heroAction: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
  },
  heroButton: {
    backgroundColor: 'white',
    width: 160,
    alignSelf: 'center',
    padding: 12,
    position: 'absolute',
    borderRadius: 16,
    bottom: -16,
  }
});
