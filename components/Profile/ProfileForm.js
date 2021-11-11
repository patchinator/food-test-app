import { useRef, useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  // const [recipes, setRecipes] = useState();

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

  // useEffect(() => {
  //   fetch(
  //     "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  //   ).then((res) =>
  //     res
  //       .json()
  //       .then((data) => {
  //         const loadedRecipes = [];
  //         for (const key in data) {
  //           if (data[key].author === authCtx.displayName)
  //             loadedRecipes.push({
  //               title: data[key].title,
  //               image: data[key].image,
  //               id: key,
  //             });
  //         }
  //         setRecipes(loadedRecipes);
  //       })
  //       .catch((err) => alert(`${err}`))
  //   );
  // }, [authCtx.displayName]);

  // console.log(recipes);

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedPassword = updatedPasswordRef.current.value;

    // TODO validation

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.NEXT_PUBLIC_FIREBASE_KEY}`,
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
