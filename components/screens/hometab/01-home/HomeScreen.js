/* jshint esversion: 6 */
import React from "react";
import {
  View,
  Image,
  Animated,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import {
  MainView,
  DeckBtn,
  TextBtn,
  TextCards,
  MenuItem,
  MenuRow,
} from "./zstyles";


const DeckItem = props => {
  const onPress = () => {
    props.navToSelectDeck(props);
  };
  return (
    <Animated.View>
      <DeckBtn onPress={onPress}>
        <TextBtn> {props.item.title} </TextBtn>
        <TextCards>{props.item.questions.length} cards</TextCards>
      </DeckBtn>
    </Animated.View>
  );
};

export const addKeys = (val, key) => ({ key: "" + key, ...val });

class HomeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  constructor(props) {
    super(props);

    this.state = {};
    
    this.dimensions = Dimensions.get("window");
    this.imageHeight = Math.round((this.dimensions.width * 9) / 16);
    this.imageWidth = this.dimensions.width - 20;
    this.menuImageDimension = { width: 60, height: 75};
  }

  navToAddDeckScreen = async () => {
    this.props.navigation.navigate("AddDeckScreen");
  };

  navToSelectDeck = props => {
    const index = props.item.key;
    const { bgcolor } = this.props.decks[index].style;
    const deck = this.props.decks[index];
    this.props.navigation.navigate("SelectDeckScreen", { deck });
  };

  componentDidMount = () => {
   
    
  };

  logoImage = "https://i.imgur.com/pAixOoS.png";
  aboutBtn = "https://i.imgur.com/1H8iyQf.png";
  bookNowBtn = "https://i.imgur.com/P8dpmLP.png";
  galleryBtn = "https://i.imgur.com/HWF6YLL.png";
  locationBtn = "https://i.imgur.com/U4slGhj.png";
  roomsBtn = "https://i.imgur.com/IFQnA32.png";
  amenityBtn = "https://i.imgur.com/VqeQ2Vl.png";
  diningBtn = "https://i.imgur.com/vK0Qr12.png";
  feedbackBtn = "https://i.imgur.com/PNIoeQe.png";
  moreBtn = "https://i.imgur.com/hrNRq6Z.png";
  render() {
    return (
      <MainView>
      

        <Image
          style={{
            width: this.imageWidth,
            height: this.imageHeight,
            marginBottom: 0
          }}
          source={{
            uri: this.logoImage
          }}
        />
        <View style={{ margin: 10, width: this.imageWidth, flex:1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
            {/* -----  First Row ----- */}
            <MenuRow>
                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.bookNowBtn
                          }}
                        />
                  </MenuItem>

                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.galleryBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>
           
            <MenuRow>
                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.locationBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                           style={this.menuImageDimension}
                          source={{
                            uri: this.roomsBtn
                          }}
                        />
                 </MenuItem>

                 <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.amenityBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>

            <MenuRow>
                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.diningBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.feedbackBtn
                          }}
                        />
                 </MenuItem>

                 <MenuItem >
                        <Image
                          style={this.menuImageDimension}
                          source={{
                            uri: this.moreBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>
          </View>
      </MainView>
    );
  }
}

// ----------- Prop-Types ------
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  decks: store.decks
});

const mapDispatchToProps = {
  addDeck: _actions.addDeck,
  addDeckKeys: _actions.addDeckKeys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);