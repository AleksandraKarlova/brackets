module.exports = function check(str, bracketsConfig) {

  let arrStart = [];
  let arrEnd = [];
  let openArr = [];

  for (let el of bracketsConfig) {
    arrStart.push(el[0]);
    arrEnd.push(el[1]);
  }

  if (str.length % 2 !== 0 || (arrEnd.includes(str[0]) && !arrStart.includes(str[0]))) {
    return false;
  } 

  for (let i = 0; i < str.length; i++) {
    if (arrStart.includes(str[i])) { //если открывающая содержится в arrStart
      if (!arrEnd.includes(str[i])) { //если открывающая и  закрывающаяя не совпадают
        openArr.push(str[i]);
      } else {  // если открывающая и  закрывающаяя совпадают
        if (str[i] !== openArr.slice(-1)[0]) { // если открывающая и  закрывающаяя совпадают, но текущая не совпадает с последней в сохраненном массиве
        openArr.push(str[i]);
      } else { // если открывающаяя и закрывающаяя совпадают, и текущая совпадает с последней в сохраненном массиве
        openArr.pop();
      }
    }
    } else if (arrEnd.indexOf(str[i]) !== arrStart.indexOf(openArr[openArr.length - 1])) { // если закрывающая и индекс текущей не совпадает с индексом последней лежащей в сохраненном массиве в arrStart
      return false;
    } else { //если закрывающая и индексы начала и конца совпадают
      openArr.pop();
    }
  }
  return openArr.length === 0;
}


