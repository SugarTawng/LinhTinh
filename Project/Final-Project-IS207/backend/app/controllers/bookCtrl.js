/**
 * Created by SugarTawng on 9/11/2022
 */
// third party components
const JsonWebToken = require("jsonwebtoken");

// our components
const BookManager = require("../manager/bookMng");
const Rest = require("../utils/restware");

module.exports = {
  create: function (req, res) {
    const accessUserId = req.body.accessUserId || "";
    const accessUserType = req.body.accessUserRight || "";
    const accessLoginName = req.body.accessLoginName || "";

    const data = req.body || "None of data SugarTawng";

    BookManager.create(
      accessUserId,
      accessUserType,
      accessLoginName,
      data,
      function (errorCode, errorMessage, httpCode, errorDescription, book) {
        if (errorCode) {
          return Rest.sendError(
            res,
            errorCode,
            errorMessage,
            httpCode,
            errorDescription
          );
        } else {
          let resData = {};
          resData.id = book._id;
          return Rest.sendSuccess(res, resData, httpCode);
        }
      }
    );
  },
  delete: function (req, res) {
    let accessUserId = req.body.accessUserId || "";
    let accessUserType = req.body.accessUserRight || "";
    let id = req.params.id || "";

    BookManager.delete(
      accessUserId,
      accessUserType,
      id,
      function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
          return Rest.sendError(
            res,
            errorCode,
            errorMessage,
            httpCode,
            errorDescription
          );
        }
        let resData = {};
        resData.id = id;
        return Rest.sendSuccess(res, resData, httpCode);
      }
    );
  },
  getOne: function (req, res) {
    let accessUserId = req.query.accessUserId || "";

    let id = req.params.id || "";

    BookManager.getOne(
      accessUserId,
      id,
      function (errorCode, errorMessage, httpCode, errorDescription, book) {
        if (errorCode) {
          return Rest.sendError(
            res,
            errorCode,
            errorMessage,
            httpCode,
            errorDescription
          );
        } else {
          console.log(book);
          return Rest.sendSuccess(res, book, httpCode);
        }
      }
    );
  },
  getAll: function (req, res) {
    let accessUserId = req.query.accessUserId || "";
    let accessUserType = req.query.accessUserRight || "";
    let accessLoginName = req.query.accessLoginName || "";

    let queryContent = req.query || "";

    BookManager.getAll(
      accessUserId,
      accessUserType,
      accessLoginName,
      queryContent,
      function (errorCode, errorMessage, httpCode, errorDescription, results) {
        if (errorCode) {
          return Rest.sendError(
            res,
            errorCode,
            errorMessage,
            httpCode,
            errorDescription
          );
        } else {
          return Rest.sendSuccess(res, results, httpCode);
        }
      }
    );
  },

  update: function (req, res) {
    const accessUserId = req.body.accessUserId || "";
    const accessUserType = req.body.accessUserRight || "";

    let id = req.params.id || "";
    let bookData = req.body;
    if (id === "deletes") {
      let idList = req.body.ids || "";
      BookManager.deletes(
        accessUserId,
        accessUserType,
        idList,
        bookData,
        function (errorCode, errorMessage, httpCode, errorDescription, result) {
          if (errorCode) {
            return Rest.sendError(
              res,
              errorCode,
              errorMessage,
              httpCode,
              errorDescription
            );
          }
          return Rest.sendSuccess(res, result, httpCode);
        }
      );
    } else {
      let updateData = req.body || "";
      BookManager.update(
        accessUserId,
        accessUserType,
        id,
        updateData,
        function (errorCode, errorMessage, httpCode, errorDescription) {
          if (errorCode) {
            return Rest.sendError(
              res,
              errorCode,
              errorMessage,
              httpCode,
              errorDescription
            );
          }
          let resData = {};
          resData.id = id;
          return Rest.sendSuccess(res, resData, httpCode);
        }
      );
    }
  },
  countQuantity: function (req, res) {
    BookManager.countQuantity(function (
      errorCode,
      errorMessage,
      httpCode,
      errorDescription,
      results
    ) {
      if (errorCode) {
        return Rest.sendError(
          errorCode,
          errorMessage,
          httpCode,
          errorDescription,
          results
        );
      } else {
        return Rest.sendSuccess(res, results, httpCode);
      }
    });
  },
  quantityStatistic: function (req, res) {
    BookManager.quantityStatistic(function (
      errorCode,
      errorMessage,
      httpCode,
      errorDescription,
      results
    ) {
      if (errorCode) {
        return Rest.sendError(
          errorCode,
          errorMessage,
          httpCode,
          errorDescription,
          results
        );
      } else {
        return Rest.sendSuccess(res, results, httpCode);
      }
    });
  },
};
