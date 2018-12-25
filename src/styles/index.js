import { StyleSheet, Dimensions } from "react-native";
var windowSize = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 80,
    width: windowSize.width
  },
  search: {
    height: 60,
    width: windowSize.width
  },
  searchButton: {
    height: 40,
    width: windowSize.width
  },
  body: {
    width: windowSize.width,
    height: windowSize.height - 180,
    backgroundColor: "white"
  },
  align: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  weatherText: {
    fontSize: 30,
    color: "#de6700"
  },
  searchInputAlign: {
    width: 250,
    marginLeft: windowSize.width - 125,
    marginRight: windowSize.width - 125
  },
  searchbar: {
    height: 40,
    width: 250,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  searchicon: {
    width: 15,
    height: 15
  },
  searchButtonDimensions: {
    width: 130,
    height: 40,
    backgroundColor: "#de6700",
    borderRadius: 5
  },
  searchText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#FFFFFF"
  },
  alignRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bodyAlign: {
    flex: 1,
    marginTop: 30
  },
  table: {
    flex: 1,
    width: windowSize.width - 80,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  tableHeader: {
    height: 30,
    backgroundColor: "#de6700",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000"
  },
  title: {
    height: 30,
    backgroundColor: "#cccccc",
    borderBottomWidth: 1,
    borderColor: "#000"
  },
  dimensionTitle: {
    height: 30,
    backgroundColor: "#cccccc",
    borderBottomWidth: 1,
    borderColor: "#000"
  },
  pH: {
    height: 30,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderColor: "#000"
  },
  minDimension: {
    width: (windowSize.width - 80) / 2,
    borderRightWidth: 1,
    borderColor: "#000"
  },
  maxDimension: {
    width: (windowSize.width - 80) / 2
  },
  titleText: {
    textAlign: "center",
    fontSize: 20
  },
  tableColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  }
});

export default styles;
