import React, { Component } from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import {
  DestinationItem,
  HotelName,
  HotelAddress,
  HotelDesc,
  HotelPhotoPrice,
  Photo,
  Price,
  Distance
} from "./zstyles";

export const Destination = props => {
  const handleSelectHotel = () => {
    props.handleSelectHotel(props.hotel);
    props.navigation.navigate("PickRoomsScreen", { hotelInfo: props.hotel });
  };

  logoImage =
    "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";

  return (
    <TouchableOpacity onPress={handleSelectHotel}>
      <DestinationItem>
        <HotelDesc>
          <HotelName>{props.hotel.name}</HotelName>
          <HotelAddress>{props.hotel.address}</HotelAddress>
          <Distance>{props.hotel.distance} mi</Distance>
        </HotelDesc>
        <HotelPhotoPrice>
        
          <Photo>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: props.hotel.image
              }}
            />
          </Photo>
          <Price>
            <Text>${props.hotel.price.toFixed(2)}</Text>
          </Price>
        </HotelPhotoPrice>
      </DestinationItem>
    </TouchableOpacity>
  );
};
