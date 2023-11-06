import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  addAreaTask: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 142,
    marginLeft: 24,
    marginRight: 24,
    gap: 6,
    //backgroundColor:"red"
  },
  inputTextTask: {
    flex: 1,
    width: 271,
    height: 54,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    //backgroundColor: "green",
  },
  buttonAddTask: {
    width: 52,
    height: 52,
    padding: 18,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
  },
  areaTask: {},
  info: {
    //flex:1,
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    alignContent: "space-between",
    //alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 24,
    marginRight: 24,
  },
  infoItem: {
    //flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  infoText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  infoNumber: {
    color: "#D9D9D9",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    borderRadius: 999,
    backgroundColor: "#333",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginLeft: 24,
    marginRight: 24,
  },
  emptyTask: {
    alignItems: "center",
    paddingTop:48,
    paddingBottom:48,
    paddingRight:20,
    paddingLeft:20,
    gap:16

  },
  emptyTaskMessageText: {
    fontSize: 14,
    color: "#808080",
  },
});