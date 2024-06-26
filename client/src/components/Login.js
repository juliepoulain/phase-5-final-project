import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";

function Login({ phone, setPhone, userId, setUserId }) {
  const history = useHistory();
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formattedPhone = phone.replace(/\D/g, "");
    fetch(`/api/users/phone/${formattedPhone}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((data) => {
        setUserId(data.id)
        history.push(`/`)
      })
      .catch((error) => {
        setError(
          "Failed to log in. Please check your phone number and try again."
        );
        console.error("Error logging in:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputMask
        mask="(999) 999-9999"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      >
        {() => (
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="(123) 456-7890"
          />
        )}
      </InputMask>
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Login;
