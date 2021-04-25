import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import park from "../assets/park.jpeg";
import Profiles from "../images.js";
import recentImage from "../assets/nice.jpg";
const Home = ({ navigation }) => {
  //  const [gallery,setGallery] = useState([Profiles])

  const goToPost = () => {
    navigation.navigate("Post");
  };
  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={park}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Hi, Fred</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#555"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#555"
              style={{ position: "absolute", top: 25, right: 50, opacity: 0.7 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 30 }}
          />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            keyExtractor={(item, index) => item.id}
            data={Profiles}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 10, paddingLeft: 16 }}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.img}
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 220,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.imageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Recently Viewed
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}
            >
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "90%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />

          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}
              >
                Night Life
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Night life with such a beautiful scenery all round
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.4,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 40,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "white",
    paddingTop: 5,
  },

  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    marginLeft: 10,
    width: "90%",
  },
  imageOverlay: {
    width: 150,
    height: 220,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.4,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});

export default Home;
