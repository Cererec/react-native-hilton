import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import {
  DestinationItem,
  HotelName,
  HotelAddress,
  HotelDesc,
  HotelPhotoPrice,
  Photo,
  Price,
  Distance,
} from "./zstyles";
  
export const Destination = props => {

  const handleSelectHotel = () => {
    props.navigation.navigate("PickRoomsScreen", {hotelInfo: props.hotel});
  };
  
  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";

  return (
    <TouchableOpacity onPress={handleSelectHotel}>
  
      <DestinationItem>
        <HotelDesc>
          <HotelName>{props.hotel.name}</HotelName>
          <HotelAddress>{props.hotel.address}</HotelAddress>
          <Distance>{props.hotel.distance} mi</Distance>
        </HotelDesc>
        <HotelPhotoPrice>
          <Price>
            <Text>${props.hotel.price.toFixed(2)}</Text>
          </Price>
          <Photo>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: props.hotel.image
              }}
            />
          </Photo>
        </HotelPhotoPrice>
      </DestinationItem>
    </TouchableOpacity>
  );
};
