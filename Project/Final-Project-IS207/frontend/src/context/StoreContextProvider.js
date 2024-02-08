import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  let [numberOfTitles, setNumberOfTitles] = useState("");
  let [topQuantityOfEverybook, setTopQuantityOfEverybook] = useState([]);
  let [topRatingOfFiveBooks, setTopRatingOfFiveBooks] = useState([]);
  let [bookId, setBookId] = useState("");
  let [userId, setUserId] = useState("");

  return (
    <StoreContext.Provider
      value={{
        auth,
        setAuth,
        isAuthorized,
        setIsAuthorized,
        books,
        setBooks,
        users,
        setUsers,
        status,
        setStatus,
        msg,
        setMsg,
        numberOfTitles,
        setNumberOfTitles,
        topQuantityOfEverybook,
        setTopQuantityOfEverybook,
        topRatingOfFiveBooks,
        setTopRatingOfFiveBooks,
        bookId,
        setBookId,
        userId,
        setUserId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
