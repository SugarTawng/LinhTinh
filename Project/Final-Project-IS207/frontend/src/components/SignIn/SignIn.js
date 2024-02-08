import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import StoreContext from "../../context/StoreContextProvider";
import axios from "axios";
import "./SignIn.css";

const SignIn = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  let {
    auth,
    setAuth,
    setIsAuthorized,
    setBooks,
    setUsers,
    setStatus,
    setMsg,
  } = useContext(StoreContext);
  let SignIn = useRef();
  let navigate = useNavigate();

  let handleShowIconShowPassword = (e) => {
    let iconShowPassword = e.target.nextElementSibling;
    if (e.target.value === "") iconShowPassword.style.display = "none";
    else iconShowPassword.style.display = "block";
    setPassword(e.target.value);
  };

  let handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  let toggleSignInPopup = (e) => {
    if (e.target === e.currentTarget) SignIn.current.classList.toggle("hide");
  };

  let handleSignIn = async (e) => {
    e.preventDefault();

    try {
      let accountResponse = await axios.post(
        "http://localhost:3001/v1/login",
        JSON.stringify({ loginName: username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setAuth(accountResponse.data);

      setIsAuthorized(true);

      setStatus("signIn");

      localStorage.setItem(
        "account",
        JSON.stringify({ ...accountResponse.data })
      );

      let booksResponse = await axios.get(
        "http://localhost:3001/v1/auth/books/",
        {
          headers: {
            "Content-Type": "application/json",
            access_token: JSON.parse(localStorage.getItem("account")).token,
          },
        }
      );

      setBooks(booksResponse.data.data);

      let usersResponse = await axios.get(
        "http://localhost:3001/v1/auth/users/",
        {
          headers: {
            "Content-Type": "application/json",
            access_token: JSON.parse(localStorage.getItem("account")).token,
          },
        }
      );

      setUsers(usersResponse.data.data);

      setUsername("");

      setPassword("");

      SignIn.current.classList.add("hide");

      navigate("/", { replace: true });
    } catch (err) {
      setStatus("warning");
      setMsg("Not admin role!");
      SignIn.current.classList.add("hide");
    }
  };

  return (
    <div id="SignIn" className="hide" ref={SignIn} onClick={toggleSignInPopup}>
      <div id="SignInForm">
        <form onSubmit={handleSignIn}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <p>SIGN IN</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <span className="icon username">
                    <AiOutlineUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="inputUserName"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span className="icon password">
                    <AiOutlineLock />
                  </span>
                  <input
                    type={isShowPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    id="inputPassword"
                    value={password}
                    onChange={handleShowIconShowPassword}
                  />
                  <span
                    className="icon showPassword"
                    onClick={handleClickShowPassword}
                  >
                    {isShowPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button>Sign in</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
