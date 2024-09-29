import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Title, Drawer, Text } from 'react-native-paper';

export function MenuSidebar(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileSection}>
          <Avatar.Icon size={50} icon="bear" />
          <Title>Paddington</Title>
          <Text>Account & settings</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Drawer.Section style={styles.drawerSection}>
        <Drawer.Item label="Home" icon="home-outline" onPress={() => props.navigation.navigate('Home')} />
        <Drawer.Item label="Energy Usage" icon="flash-outline" />
        <Drawer.Item label="Rooms" icon="room-outline" />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    padding: 20,
    alignItems: 'center',
  },
  drawerSection: {
    marginTop: 20,
  },
});
