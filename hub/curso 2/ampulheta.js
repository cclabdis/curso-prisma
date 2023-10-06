function desenhaAmpulheta(n) {
  if(n % 2 === 0) {
    evenHourGlass(n);
  } else {
    oddHourGlass(n);
  }
}

function oddHourGlass(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(n));
    } else {
      const currString = replaceAt(checkHalf(i, n), " ".repeat((n / 2+1)), "*");
      console.log(currString + reverse(currString).substring(1));
    }
  }
}

function evenHourGlass(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(n));
    } else {
      const currString = replaceAt(checkHalf(i, n), " ".repeat(n / 2), "*");
      console.log(currString + reverse(currString));
    }
  }
}

function replaceAt(index, string, char) {
  return string.substring(0, index) + char + string.substring(index + 1);
}

function reverse(string){
  return string.split("").reverse().join("");
}

function checkHalf(i, n) {
  return i < n/2 ? i : n-(i+1);
}

desenhaAmpulheta(9)