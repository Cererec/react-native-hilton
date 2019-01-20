import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import HotelHeadInfo from '../_libs/hotel-header/HotelHeader';

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Payment",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };
  
  handleSubmit = () => {
    this.props.navigation.navigate("RewviewBookingScreen");
  }

  componentDidMount = () =>  {
 
  }

  render() {
    return (
      <MainView>
        
      <HotelHeader/>
      <ScrollView>
          <Text>
            Middle
          </Text>
         
      </ScrollView>
      <HotelFooter buttonLabel={'Complete Payment'} handleSubmit={this.handleSubmit}/>
     </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentScreen);
