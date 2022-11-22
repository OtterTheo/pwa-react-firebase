import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function save() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("success");
        console.log(user);
      })
      .catch(async (error) => {
        console.log(error.message);
        const errorMessage = error.message;

        await alert({
          header: "Error Signing In",
          message: errorMessage,
          buttons: ["OK"],
        });
      });
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault}>
        <div>
          <label>E-mail</label>
          <input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button onClick={save}>Save</button>
      </form>
    </>
  );
};

export default Register;
