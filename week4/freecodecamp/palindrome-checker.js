function palindrome(str) {
      return str.toLowerCase().replace(/[^a-z0-9]+/gi, '').split('').join('') === str.toLowerCase().replace(/[^a-z0-9]+/gi, '').split('').reverse().join('').split('').join('');

}

palindrome("eye");