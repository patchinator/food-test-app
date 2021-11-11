import ProfileForm from "../../components/Profile/ProfileForm";
import { Fragment } from "react";
import UserRecipes from "../../components/Profile/UserRecipes";
import ProfileBackground from "../../components/Profile/ProfileBackground";

export default function UpdatePassword(props) {
  return (
    <Fragment>
      <ProfileBackground>
        <UserRecipes />
        <ProfileForm />
      </ProfileBackground>
    </Fragment>
  );
}
