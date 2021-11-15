import ProfileForm from "../../components/Profile/ProfileForm";

import UserRecipes from "../../components/Profile/UserRecipes";

import ProfileBackground from "../../components/Profile/ProfileBackground";
import ButtonTwo from "../../components/UI/ButtonTwo";
import Link from "next/link";
import style from "./user.module.scss";

export default function UpdatePassword(props) {
  return (
    <ProfileBackground>
      {/* <UserRecipes /> */}
      <ProfileForm />
      <div className={style.back}></div>
      <div className={style.button}>
        <ButtonTwo>
          <Link href="/">Back</Link>
        </ButtonTwo>
      </div>
    </ProfileBackground>
  );
}
