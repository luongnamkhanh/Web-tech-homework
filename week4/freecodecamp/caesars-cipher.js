function rot13(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = charCode + 13;
      if (charCode > 90) {
        charCode = charCode - 26;
      }
    }
    newStr += String.fromCharCode(charCode);
  }
  return newStr;
}

rot13("SERR PBQR PNZC");