import React, { Component } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, Button } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';


class ReviewBookingScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Review Booking",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  
  handleSubmit = () => {
    this.props.navigation.navigate("ThankYouScreen", { deck: 100 });
  }

  render() {
    /*
    const user={
      location: this.props.userSession.selectedLocation,
      hotelName: this.props.userSession.selectedHotel.name,
      hotelAddress: this.props.userSession.selectedHotel.address,
      arrivalDate: this.props.userSession.arrival.splice(10,16),
      departureDate: this.props.userSession.departure.splice(10,16),
      rooms: this.props.userSession.selectedRooms
    }*/
    return (
      <MainView>
        
      <HotelHeader/>
        <ScrollView>
          
          <View style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', 
                        flex: '1', width: '100%', flexDirection: 'row', paddingLeft: 8, paddingRight: 8}}>
              <Text style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', width: '40%'}} >Hotel</Text>
              <Text style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', width: '60%'}} >user_hotelName</Text>
          </View>
         
          <View style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', 
                        flex: '1', width: '100%', flexDirection: 'row', paddingLeft: 8, paddingRight: 8}}>
              <Text style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', width: '40%'}} >Destination</Text>
              <Text style={{borderColor: 'red', borderWidth: '2', borderStyle: 'solid', width: '60%'}} >user_location</Text>
          </View>
        </ScrollView>
      <HotelFooter buttonLabel={'Done Review'} handleSubmit={this.handleSubmit}/>
     </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession 
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewBookingScreen);
