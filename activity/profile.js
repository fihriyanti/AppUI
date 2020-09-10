/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { List, Icon, Thumbnail, ListItem, Right, Left } from 'native-base';

export default class Home extends Component {

  render() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={styles.nama}>Amanda</Text>
                    <Text style={styles.txt}>View and edit profile</Text>
                  </View>
                  <View>
                      <Thumbnail large source={require('../gambar/profile.jpg')} style={{marginTop: 40, marginRight: 20}}/>
                  </View>
              </View>
              <List style={styles.list}>
                  <ListItem>
                      <Left>
                          <Text>Change Password</Text>
                      </Left>
                      <Right>
                          <Icon type='FontAwesome5' name='lock' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Invite Friends</Text>
                      </Left>
                      <Right>
                          <Icon type='MaterialIcons' name='people' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Credits & Coupons</Text>
                      </Left>
                      <Right>
                          <Icon type='Feather' name='gift' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Help Center</Text>
                      </Left>
                      <Right>
                          <Icon type='AntDesign' name='questioncircle' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Payments</Text>
                      </Left>
                      <Right>
                          <Icon type='FontAwesome5' name='credit-card' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
                  <ListItem onPress={() => this.props.navigation.navigate('Settings')}>
                      <Left>
                          <Text>Settings</Text>
                      </Left>
                      <Right>
                          <Icon type='Feather' name='settings' color='#bcbcbc'/>
                      </Right>
                  </ListItem>
              </List>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  nama: {
      fontSize: 25,
      marginLeft: 20,
      marginTop: 50,
      fontFamily: 'serif',
      fontWeight: 'bold'
  },
  txt: {
    color: '#757575',
    fontSize: 12,
    marginLeft: 20,
    fontFamily: 'serif',
},
list: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
}
});