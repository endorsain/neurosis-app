import { StyleSheet, View, TextInput, Text } from "react-native";

export const InputForm = (props) => {
  const { label, handleChange, values } = props;
  return (
    <View style={styles.input_ctn}>
      <TextInput
        style={styles.input}
        placeholder={label}
        onChangeText={handleChange}
        value={values}
      />
      <Text style={styles.errors}>errores</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input_ctn: {
    backgroundColor: "#bfc624",
    width: "100%",
  },
  input: {
    backgroundColor: "#a5ab23",
    height: 35,
  },
  errors: {
    backgroundColor: "white",
  },
});
