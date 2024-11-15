import { Pressable, StyleSheet, Text } from "react-native";

export const ButtonForm = (props) => {
  const { label, handleSubmit } = props;
  return (
    <Pressable style={styles.bttn} onPress={handleSubmit}>
      <Text>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bttn: {
    backgroundColor: "#b87c12",
    width: 150,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
  },
});
