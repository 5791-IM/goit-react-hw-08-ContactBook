import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import css from "../HomePage/HomePage.jsx";

export default function RegistrationPage() {
  return (
    <>
      <h1 className={css.title}>Register your account</h1>
      <RegistrationForm />
    </>
  );
}
