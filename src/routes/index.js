import React, { Component } from "react";
import styles from "../styles";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ActivityIndicator
} from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", weatherList: [], isLoading: false };
  }
  handleSearch() {
    this.setState({
      isLoading: true
    });
    if (this.state.searchText == "" || this.state.searchText == null) {
      Alert.alert("Alert Title", "Please enter the city");
    } else {
      const city = this.state.searchText;
      fetch(
        `https://samples.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=1635890035cbba097fd5c26c8ea672a1`
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log("responseJson", JSON.stringify(responseJson));
          this.setState({
            weatherList: responseJson.list,
            isLoading: false
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.align}>
            <Text style={styles.weatherText}>Weather in your city</Text>
          </View>
        </View>
        <View style={styles.search}>
          <View style={styles.align}>
            <View style={styles.searchInputAlign}>
              <TextInput
                style={styles.searchbar}
                onChangeText={text => this.setState({ searchText: text })}
                value={this.state.searchText}
              />
            </View>
          </View>
        </View>
        <View style={styles.searchButton}>
          <View style={styles.align}>
            <TouchableOpacity
              onPress={this.handleSearch.bind(this)}
              style={styles.searchButtonDimensions}
            >
              <View style={styles.alignRow}>
                <Image
                  style={styles.searchicon}
                  source={require("./../images/searchicon.png")}
                />
                <Text style={styles.searchText}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyAlign}>
            {!this.state.isLoading ? (
              <FlatList
                data={this.state.weatherList}
                extraData={this.state}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                  const date = item.dt_txt.split(" ");

                  return (
                    <View style={styles.table}>
                      <View style={styles.tableHeader}>
                        <Text style={styles.titleText}>Date:{date[0]}</Text>
                      </View>
                      <View style={styles.title}>
                        <Text style={styles.titleText}>Temperature</Text>
                      </View>
                      <View style={styles.dimensionTitle}>
                        <View style={styles.row}>
                          <View style={styles.minDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>Min</Text>
                            </View>
                          </View>
                          <View style={styles.maxDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>Max</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.dimensionTitle}>
                        <View style={styles.row}>
                          <View style={styles.minDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>
                                {item.main.temp_min}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.maxDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>
                                {item.main.temp_max}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.pH}>
                        <View style={styles.row}>
                          <View style={styles.minDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>Pressure</Text>
                            </View>
                          </View>
                          <View style={styles.maxDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>
                                {item.main.pressure}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.pH}>
                        <View style={styles.row}>
                          <View style={styles.minDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>Humidity</Text>
                            </View>
                          </View>
                          <View style={styles.maxDimension}>
                            <View style={styles.tableColumn}>
                              <Text style={styles.titleText}>
                                {item.main.humidity}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
