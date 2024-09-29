import * as React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header with hamburger menu */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>
          <Text style={styles.welcomeText}>Welcome home, Paddington</Text>
          <MaterialCommunityIcons name="emoticon-outline" size={32} color="black" />
        </View>

        {/* Shortcuts Section */}
        <View style={styles.shortcutSection}>
          <Text style={styles.sectionTitle}>Shortcuts</Text>
          <View style={styles.shortcuts}>
            <Button icon="lightbulb-outline" mode="contained" style={styles.shortcutButton}>
              All lights off
            </Button>
            <Button icon="film" mode="contained" style={styles.shortcutButton}>
              Movie night
            </Button>
            <Button icon="book-outline" mode="contained" style={styles.shortcutButton}>
              Reading
            </Button>
            <Button icon="menu" mode="contained" style={styles.shortcutButton}>
              Close all shutters
            </Button>
          </View>
        </View>

        {/* Rooms Section */}
        <View style={styles.roomsSection}>
          <Text style={styles.sectionTitle}>Rooms</Text>

          {/* Room Cards */}
          <Card style={styles.roomCard}>
            <Card.Cover source={{ uri: 'https://example.com/livingroom.jpg' }} />
            <Card.Content>
              <Title>Living Room</Title>
              <Paragraph>Lights, TV, Thermostat</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.roomCard}>
            <Card.Cover source={{ uri: 'https://example.com/kitchen.jpg' }} />
            <Card.Content>
              <Title>Kitchen</Title>
              <Paragraph>Lights, Appliances</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shortcutSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  shortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shortcutButton: {
    width: '22%',
    backgroundColor: '#f3f3f3',
  },
  roomsSection: {
    padding: 20,
  },
  roomCard: {
    marginBottom: 20,
  },
});
