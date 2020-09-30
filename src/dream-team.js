const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .map((element) => {
      if (typeof element !== "string") return "";
      return element.trim().toUpperCase();
    })
    .sort()
    .map((element) => element[0])
    .join("");
};
