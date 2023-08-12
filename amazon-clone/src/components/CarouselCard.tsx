import * as React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { data } from "../data/CarouselData";

const CarouselCard = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={2000}
        renderItem={({ index }) => (
          <View key={index} style={styles.carouselCardView}>
            <Image style={styles.carouselCardImg} source={{ uri: data[index] }} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  carouselCardView: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
  },
  carouselCardImg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

export default CarouselCard;
