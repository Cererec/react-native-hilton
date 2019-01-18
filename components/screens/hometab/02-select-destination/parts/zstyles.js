import styled from "styled-components/native";

/* ----- Hotel desk block ----- */
export const DestinationItem = styled.View`
  flex-direction: row;
  border: 1px solid lightgray;
  padding: 5px 5px 5px 10px;
  margin-bottom: 10px;
`;

export const HotelDesc = styled.View`
  width: 70%;
`;

export const HotelName = styled.Text`
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 18;
  padding-bottom: 5px;
`;

/* ----- Hotel photo and price ----- */

export const HotelPhotoPrice = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10px;
`;

export const Photo = styled.View`

`;
export const Price = styled.Text`

  font-weight: bold;
  font-size: 18px;
`;