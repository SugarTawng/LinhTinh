import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import StoreContext from "../../context/StoreContextProvider";
import DeleteBook from "../../components/DeleteUser/DeleteBook";
import axios from "axios";
import "./ListOfBooks.css";

const ListOfBooks = () => {
  let { auth, books, setBooks, setUserId, users, setUsers } =
    useContext(StoreContext);

  let fetchData = async () => {
    // let booksResponse = await axios.get("https://userbookbackendapi.herokuapp.com/v1/auth/books/", {
    // 	headers: {
    // 		"Content-Type": "application/json",
    // 		access_token: JSON.parse(localStorage.getItem("account")).token,
    // 	},
    // });
    // setBooks(booksResponse.data.data);
  };

  useEffect(() => {
    fetchData();

    let elToShow = document.querySelectorAll(".show-on-scroll");

    let isElInViewPort = (el) => {
      let rect = el.getBoundingClientRect();
      let viewHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
      );
    };

    function loop() {
      elToShow.forEach((item) => {
        if (isElInViewPort(item)) {
          item.classList.add("start");
        } else {
          item.classList.remove("start");
        }
      });
    }

    window.onscroll = loop;

    loop();
  }, []);

  let toggleDeleteBook = () => {
    let deleteBookSection = document.getElementById("DeleteBook");
    deleteBookSection.classList.toggle("hide");
  };

  return (
    <div id="ListOfBooks">
      <h1>Manage user</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name of user</th>
            <th>Role</th>
            <th>Status</th>
            <th>email</th>
            {auth.userRight === "SUPER_ADMIN" ? <th>Edit / Delete</th> : ""}
          </tr>
        </thead>
        <tbody>
          {users ? (
            <>
              {users.map((book, index) => {
                console.log("console.log", book.id);
                return (
                  <tr
                    key={book.id}
                    className={
                      index % 2 === 0
                        ? "row show-on-scroll left-to-right"
                        : "row show-on-scroll right-to-left"
                    }
                  >
                    <td className="no">{index + 1}</td>
                    <td>
                      <NavLink className="bookName" to={`/users/${book.id}`}>
                        {book.displayName}
                      </NavLink>
                    </td>
                    <td className="authorName">{book.userRight}</td>
                    <td>
                      <p
                        className={
                          book.status === "NEW" ? "status new" : "status old"
                        }
                      >
                        {book.status}
                      </p>
                    </td>
                    <td className="quantity">{book.email}</td>
                    {auth.userRight === "SUPER_ADMIN" ? (
                      <td className="modify">
                        <NavLink to={`/users/${book.id}`}>
                          <RiEditBoxLine className="edit" />
                        </NavLink>
                        /{" "}
                        <RiDeleteBinLine
                          className="delete"
                          onClick={() => {
                            toggleDeleteBook();
                            setUserId(book.id);
                          }}
                        />
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
            </>
          ) : (
            ""
          )}
        </tbody>
      </table>
      <DeleteBook />
    </div>
  );
};

export default ListOfBooks;
