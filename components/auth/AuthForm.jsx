import { Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import { signin, signup } from "./options-form";
import { Formik } from "formik";
import { Link } from "expo-router";

export default function AuthForm({
  formType = "signup",
  router,
  dispatch,
  children,
}) {
  const initialValues =
    formType === "signup"
      ? {
          eml: "f9298126a7@emailfoxi.pro",
          usn: "elcampeon123",
          nme: "mauro",
          lnm: "blanco",
          pss: "hola123",
          confirmPassword: "hola123",
        }
      : {
          eml: "f9298126a7@emailfoxi.pro",
          pss: "hola123",
        };

  const onSubmit = async (value) => {
    console.log(value);
    try {
      if (formType === "signup") {
        const { confirmPassword, ...userData } = value;
        await signup(userData);
      } else {
        await signin(value, router, dispatch);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
      <Text style={styles.text}>
        {formType === "signup" ? (
          <Link href={"/sign-in"}>GO SIGN IN</Link>
        ) : (
          <Link href={"/sign-up"}>GO SIGN UP</Link>
        )}
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => children({ ...formikProps, formType })}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    width: "100%",
    backgroundColor: "blue",
    padding: 10,
  },
  text: {
    backgroundColor: "yellow",
  },
});
