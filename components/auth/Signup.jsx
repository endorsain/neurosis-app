import { StyleSheet, View } from "react-native";
import { ButtonForm } from "./ButtonForm";
import { InputForm } from "./InputForm";
import AuthForm from "./AuthForm";

export default function Signup() {
  return (
    <AuthForm formType="signup">
      {({ handleSubmit, handleChange, values }) => (
        <View style={styles.form_ctn}>
          <InputForm
            label="Email"
            handleChange={handleChange("eml")}
            values={values.eml}
          />
          {/* <InputForm
            label="Username"
            handleChange={handleChange("usn")}
            values={values.usn}
          /> */}
          <InputForm
            label="Name"
            handleChange={handleChange("nme")}
            values={values.nme}
          />
          <InputForm
            label="Lastname"
            handleChange={handleChange("lnm")}
            values={values.lnm}
          />
          <InputForm
            label="Password"
            handleChange={handleChange("pss")}
            values={values.pss}
          />
          <InputForm
            label="Confirm password"
            handleChange={handleChange("confirmPassword")}
            values={values.confirmPassword}
          />
          <ButtonForm label="Sign up" handleSubmit={handleSubmit} />
        </View>
      )}
    </AuthForm>
  );
}

const styles = StyleSheet.create({
  form_ctn: {
    backgroundColor: "#b45e41",
    padding: 10,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
});
