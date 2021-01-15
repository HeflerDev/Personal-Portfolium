const validations = (() => {

  const containerPresence = (str) => {
    if (document.getElementById(str)) {
      return true;
    } else {
      return false;
    }
  };

  return { 
    containerPresence
  }

})();

export default validations;
