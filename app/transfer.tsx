import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome6, Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => router.back()}
        >
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>
          Transfer
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={{ marginBottom: 6, marginTop: 20, paddingLeft: 15, color: "gray" }}>
          Electricity Bill
        </Text>
        <View style={[styles.row, { gap: 4 }]}>
          <Text children='$' style={{ fontSize: 18, paddingLeft: 10 }} />
          <Text style={styles.cardText}>
            8,846.5
          </Text>
        </View>
      </View>

      <View style={styles.detail}>
        <View >
          <Text style={{ fontSize: 16, color: "gray" }}>Details</Text>
        </View>

        <View>
          <AntDesign name="circledowno" size={15} color="black" />
        </View>

      </View>

      <View>
        <Text style={{ fontSize: 26, marginTop: 10, fontWeight: "600" }}> Account Info</Text>
      </View>

      <View style={styles.accountinfo}>

        <View style={styles.userContainer}>
          <View style={styles.usericon}>
            <AntDesign name="user" size={24} color="black" />
          </View>

          <View style={styles.namedetails}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>Name</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Sara Mhmdi</Text>
          </View>

        </View>

        <View style={styles.customerrContainer}>
          <View style={styles.usericon}>
            <AntDesign name="idcard" size={24} color="black" />
          </View>

          <View style={styles.customerdetails}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>Customer ID</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>****4523</Text>
          </View>

        </View>


        <View style={styles.dateContainer}>
          <View style={styles.usericon}>
            <Ionicons name="calendar-sharp" size={24} color="black" />
          </View>

          <View style={styles.datedetails}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>Date</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>23 December 2024</Text>
          </View>

        </View>

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#E5ECFF'
  },

  arrow: {
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
    width: 50,
  },

  title: {
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10

  },

  card: {
    marginTop: 30,

  },

  cardText: {

    fontSize: 28,
    fontWeight: '700',
  },

  detail: {
    flexDirection: "row",
    marginTop: 40,
    // paddingLeft: 10,
    gap: 8
  },

  name: {
    fontSize: 20,
    marginTop: 30,
    color: "gray",

  },

  customer: {
    fontSize: 20,
    marginTop: 30,
    color: "gray"
  },

  date: {
    fontSize: 20,
    marginTop: 30,
    color: "gray"
  },

  detailscontainer: {
    // paddingLeft: 20
  },

  user: {
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    // padding: 16,
    width: 50,
  },

  dateicon: {
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    // padding: 16,
    width: 50,
  },

  IDicon: {
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
    width: 50,
  },

  userContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    // paddingLeft: 20
  },

  usericon: {
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 12,
    width: 50,
  },

  namedetails: {
    marginTop: 10
  },

  customerrContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
    // paddingLeft: 20
  },

  customerdetails: {
    marginTop: 12
  },

  dateContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
    // paddingLeft: 20
  },

  datedetails: {
    marginTop: 10
  },

  accountinfo: {
    marginTop: 20
  },

});
