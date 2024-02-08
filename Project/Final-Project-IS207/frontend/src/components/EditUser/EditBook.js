import { useState, useRef, useContext } from "react";
import StoreContext from "../../context/StoreContextProvider";
import axios from "axios";
import "./EditBook.css";

const EditBook = ({ book }) => {
  let { books, auth, setStatus, setMsg } = useContext(StoreContext);
  let [nameOfBook, setNameOfBook] = useState(book.bookName);
  let [author, setAuthor] = useState(book.authorName);
  let [category, setCategory] = useState(book.category);
  let [quantity, setQuantity] = useState(book.quantity);
  let [publishingYear, setPublishingYear] = useState(book.yearPublication);
  let [categories, setCategories] = useState([
    {
      name: "Super admin",
      value: "SUPER_ADMIN",
      checked: true,
    },
    {
      name: "Admin",
      value: "ADMIN",
      checked: true,
    },
    {
      name: "End user",
      value: "END_USER",
      checked: true,
    },
    {
      name: "Anonymous",
      value: "ANONYMOUS",
      checked: true,
    },
  ]);
  let EditBook = useRef();

  let toggleEditBookPopup = (e) => {
    if (e.target === e.currentTarget) EditBook.current.classList.toggle("hide");
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    let newValues = {
      ...book,
      bookName: nameOfBook,
      authorName: author,
      userRight: category,
      quantity,
      yearPublication: publishingYear,
    };

    console.log("new value", newValues);

    try {
      let response = await axios.put(
        `http://localhost:3001/v1/auth/users/${book.id}`,
        newValues,
        {
          headers: {
            "Content-Type": "application/json",
            access_token: auth.token,
          },
        }
      );

      setStatus("success");
      setMsg("Edit successed!");
    } catch (err) {
      setStatus("error");
      setMsg("Edit failed!");
    }

    EditBook.current.classList.add("hide");
  };

  return (
    <div
      id="EditBook"
      className="hide"
      ref={EditBook}
      onClick={toggleEditBookPopup}
    >
      <div id="EditBookForm">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <p>EDIT BOOK</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td colSpan={2}>
                  <input
                    type="text"
                    placeholder="Name of book"
                    required
                    id="inputNameOfBook"
                    value={nameOfBook}
                    onChange={(e) => {
                      setNameOfBook(e.target.value);
                    }}
                  />
                </td>
              </tr> */}
              {/* <tr>
                <td colSpan={2}>
                  <input
                    type="text"
                    placeholder="Author"
                    required
                    id="inputAuthor"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.author);
                    }}
                  />
                </td>
              </tr> */}
              <tr>
                <td colSpan={2}>
                  <select
                    id="slctCategories"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={category}
                  >
                    {categories.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              {/* <tr>
                <td colSpan={2}>
                  <input
                    type="number"
                    min="0"
                    placeholder="Quantity"
                    required
                    id="inputQuantity"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </td>
              </tr> */}
              {/* <tr>
                <td colSpan={2}>
                  <input
                    type="number"
                    min="1"
                    placeholder="Publishing year"
                    required
                    id="inputPublishingYear"
                    value={publishingYear}
                    onChange={(e) => {
                      setPublishingYear(e.target.value);
                    }}
                  />
                </td>
              </tr> */}
              <tr>
                <td colSpan={2}>
                  <button>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
