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

import { List, Icon, ListItem, Right, Left } from 'native-base';

export default class Home extends Component {
    
  render() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View>
              <Icon type={"AntDesign"} name="arrowleft" style={{marginTop: 20, marginLeft: 10}}
              onPress={() => this.props.navigation.navigate('Settings')}/>
              <View>
                <Text style={styles.text}>Currency</Text>
              </View>
              <List style={styles.list}>
                  <ListItem>
                      <Left>
                          <Text>Australian Dollar</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>AUD</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Argentine Peso</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>ARS</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Belgian Euro</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>Euro</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Brazilian Real</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>REAL</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Canadian Dollar</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>CAD</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Buban Peso</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>PESO</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>French Euro</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>EURO</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Hong Kong Dollar</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>HKD</Text>
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Left>
                          <Text>Italian Euro</Text>
                      </Left>
                      <Right>
                          <Text style={{color: '#bcbcbc'}}>EURO</Text>
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
  text:{
    fontSize: 30,
    fontFamily: 'roboto',
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 10
},
list: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
}
});