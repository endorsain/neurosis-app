import { useAppDispatch } from "../../store/useStore";
import { StyleSheet, View } from "react-native";
import { ButtonForm } from "./ButtonForm";
import { InputForm } from "./InputForm";
import { useRouter } from "expo-router";
import AuthForm from "./AuthForm";

export default function Signin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <AuthForm formType="signin" router={router} dispatch={dispatch}>
      {({ handleSubmit, handleChange, values }) => (
        <View style={styles.form_ctn}>
          <InputForm
            label="Email"
            handleChange={handleChange("eml")}
            values={values.eml}
          />
          <InputForm
            label="Password"
            handleChange={handleChange("pss")}
            values={values.pss}
          />
          <ButtonForm label="Sign in" handleSubmit={handleSubmit} />
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
