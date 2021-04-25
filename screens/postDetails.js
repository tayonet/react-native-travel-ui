import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons'
import goldengate from '../assets/massivebridge.jpg'
import SuggestedPlaces from '../suggestedPlaces.js'


 const Post = ({navigation})  =>{
   const goBack = () => {
     navigation.goBack()
   }
  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <ImageBackground
        source={goldengate}
        style= {styles.image}
        imageStyle = {{borderBottomLeftRadius:30,borderBottomRightRadius:30}}
      >
        <View style= {styles.darkOverlay2}></View>
        <Text style={styles.tagLine}>Discover your world</Text>
        <Text style={styles.placeName}>Explore the scenic beauty of the world around you</Text>

        <TouchableOpacity onPress= {goBack} style={{position: 'absolute',left:20,top:40,
        backgroundColor:"#ff6200",padding:10,borderRadius : 40
      }}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute',right:20,top:40,
        backgroundColor:"#ff6200",padding:10,borderRadius : 40
      }}>
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.bookTicketBtn}>
        <Text style={styles.bookTicketText}>Book Now</Text>
      </TouchableOpacity>
      <ScrollView style={{backgroundColor:"white"}}>
        <Text style={{padding:14,fontSize:20,fontWeight:"bold"}}>
          About the place
        </Text>
        <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:"normal",opacity:0.5,justifyContent:'flex-start',textAlign:'justify',lineHeight:26}}>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has 
        survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum
        </Text>
        <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:"normal",opacity:0.5,justifyContent:'flex-start',textAlign:'justify',lineHeight:26}}>

          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
        <View>
          <Text style={{padding:14,fontSize:20,fontWeight:"bold"}}>
            Suggested Places
          </Text>
          <FlatList
            horizontal = {true}
            keyExtractor={(item, index) => item.id}
            data= {SuggestedPlaces}
            renderItem = {({item}) => {
              return (
                <View style = {{paddingBottom:40}}>
                  <View>
                    <Image source= {item.img}
                    style={{width:150,height:150,marginHorizontal:10,borderRadius:10}} />
                    <View style={styles.darkOverlay}></View>
                    <Feather name="map-pin" size={16} color="white"
                    style={{marginHorizontal:14,marginTop:4,position:'absolute',
                      left:10,bottom:10
                  }} />
                  <Text style={{marginHorizontal:14,marginTop:4,position:'absolute',
                      left:30,bottom:10, color:"white", fontSize:14
                  }} >{item.title}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    height: 380,
    justifyContent: "flex-end",

  },
  darkOverlay2 : {
    position: 'absolute',
    top:0,
    right: 0,
    left:0,
    height:380,
    backgroundColor: "#000",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    opacity: 0.4,
  },
  tagLine: {
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginVertical:4
  },
  placeName : {
    color:"white",
    fontSize:16,
    fontWeight:"bold",
    paddingHorizontal:14,
    marginBottom:50

  },
  bookTicketBtn : {
    position:'absolute',
    right:12,
    top:350,
    backgroundColor:"#ff6200",
    padding:16,
    
    borderRadius:40,
    zIndex: 5,
  },
  bookTicketText : {
    color:"white",
    fontSize:14

  },
  darkOverlay : {
    width:150,
    height:150,
    position:"absolute",
    backgroundColor: "#000",
    opacity:0.3,
    top:0,
    left:0,
    right:0,
    bottom:0,
    borderRadius:10,
    marginHorizontal:10
    
  }

});


export default Post
