import { useRef } from "react";
import style from "./ProfileForm.module.scss";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);

  const updatedPasswordRef = useRef();

  // TODO --> remove recipes that you've created from a list in your profile page

  // const deleteRecipeHandler = () => {
  //   fetch(
  //     `https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes/${props.id}.json`,
  //     {
  //       method: "DELETE",
  //     }
  //   ).then((res) => {
  //     if (res.ok) {
  //       props.onRefresh();
  //     } else {
  //       alert("Delete failed");
  //     }
  //   });
  // };

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
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Update password failed.";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          // TODO create error modal
          throw new Error(errorMessage);
        });
      }
    });
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-password">Change Password</label>
          <input
            type="password"
            id="new-password"
            minLength="6"
            ref={updatedPasswordRef}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
