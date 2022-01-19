import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor : '#f1f1f1'}}>
        <StatusBar backgroundColor="#f1f1f1" barStyle='dark-content'/>
        {/* header */}
        <View style={{ flexDirection : 'row', margin : 20}}>
          <TouchableOpacity>
            <Icon name="home" size={22} color="#000000" />
          </TouchableOpacity>
          <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
              <Text style={{ fontWeight : 'bold', fontSize : 18, color : '#000000'}}>Toko Ghea Pradit</Text>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={22} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* //body */}
        <View style={{flex : 1,  marginHorizontal : 20}}>
          <View style={{ backgroundColor : '#FFFFFF', elevation : 2, borderRadius : 15}}>
            {/* header kecil foto */}
            <View style={{ flexDirection : 'row', margin : 20}}>
              <Image 
                style={{ width : 50, height : 50, borderRadius : 25}}
                source={{
                  uri : 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'}}
              />
              <View style={{ marginLeft : 10, flex : 1}}>
                <Text style={{ fontWeight : 'bold', fontSize : 18}}>Pradytia Ghea</Text>
                <Text>@pradit</Text>
              </View>
              <TouchableOpacity>
                <Icon name="ellipsis-h" size={22} color="#000000" />
              </TouchableOpacity>
            </View>
            {/* body foto */}
            <View style={{ justifyContent : 'center', alignItems : 'center', marginVertical : 20}}>
              <Image 
                style={{ width : 300, height : 300, borderRadius : 15}}
                source={{
                  uri : 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'}}
              />
            </View>
            {/* tombol like & comment */}
            <View style={{ flexDirection : 'row', marginHorizontal : 20, marginBottom : 20}}>
              <TouchableOpacity>
                <Icon name="heart" size={22} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal : 20}}>
                <Icon name="comment" size={22} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="paper-plane" size={22} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        

      </View>
    )
  }
}
