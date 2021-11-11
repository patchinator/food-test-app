import ProfileForm from "../../components/Profile/ProfileForm";
import Footer from "../../components/Layout/Footer";
import { Fragment } from "react";
import UserRecipes from "../../components/Profile/UserRecipes";

export default function UpdatePassword(props) {
  return (
    <Fragment>
      <ProfileForm />
      <UserRecipes />
      <Footer />
    </Fragment>
  );
}
