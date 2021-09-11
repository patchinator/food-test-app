import { useRef } from "react";
import style from "./ProfileForm.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);

  const updatedPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedPassword = updatedPasswordRef.current.value;

    // TODO validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCRN-bdOXYBhvmn76g3QcjL9jYAWXFYHHs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: updatedPassword,
          returnSecureToken: false,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-password">Change Password</label>
          <input type="password" id="new-password" minLength="6" ref={updatedPasswordRef} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
