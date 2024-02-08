import { useState, useRef, useContext, useEffect } from "react";
import StoreContext from "../../context/StoreContextProvider";
import axios from "axios";
import "./DeleteBook.css";

const DeleteBook = () => {
  let DeleteBook = useRef();
  let [user, setUser, book, setBook, setStatus, setMsg] = useState();
  let { auth, userId } = useContext(StoreContext);

  let toggleDeleteBookPopup = (e) => {
    if (e.target === e.currentTarget)
      DeleteBook.current.classList.toggle("hide");
  };

  let fetchData = async () => {
    let response = await axios.get(
      `http://localhost:3001/v1/auth/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          access_token: auth.token,
        },
      }
    );
    setUser(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  let handleDelete = async (e) => {
    e.preventDefault();

    try {
      let res = axios.delete(`http://localhost:3001/v1/auth/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          access_token: JSON.parse(localStorage.getItem("account")).token,
        },
      });

      DeleteBook.current.classList.toggle("hide");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setMsg("Delete failed!");
    }
  };

  return (
    <div
      id="DeleteBook"
      className="hide"
      ref={DeleteBook}
      onClick={toggleDeleteBookPopup}
    >
      <div id="DeleteBookForm">
        <form onSubmit={handleDelete}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <p>DELETE BOOK</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {user ? (
                <>
                  {" "}
                  <tr>
                    <td colSpan={2}>
                      <span>Book name:</span> <span>{user.displayName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span>Author name:</span> <span>{user.userRight}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span>Category: </span> <span>{user.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span>Status:</span> <span>{user.status}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button onClick={handleDelete}>YES</button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          DeleteBook.current.classList.toggle("hide");
                        }}
                      >
                        NO
                      </button>
                    </td>
                  </tr>
                </>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default DeleteBook;
