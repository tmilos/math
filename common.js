
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntNoZero(min, max) {
  let result = 0;
  while (result == 0) {
    result = getRandomInt(min, max);
  }
  return result;
}

function plusMinus(x) {
  const sign = x < 0 ? '-' : '+';
  const fig = x != 1 ? `${Math.abs(x)}` : '';
  return `${sign}${fig}`;
}

function generateQuadraticBinome(singular) {
  let x1 =0;
  let x2 = 0;
  while (x1 == x2) {
    x1 = getRandomIntNoZero(-10, 10);
    x2 = getRandomIntNoZero(-10, 10);
  }
  const a = singular ? 1 : getRandomIntNoZero(-5, 5);
  const b = -(x1+x2);
  const c = x1*x2;
  return [a, b, c, x1, x2];
}

function check() {
  return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2Y/0sTYRzHH7M0zbQsrRQyzUmZq9a088tk8/J0s+f8Pqc5N81bhCD0HyREf0C/RF/ot6CQKMXSLHRmpanZdC7drs2bQYkFitEPGekT07KS1MfN8oR7weu3u/fn/dw93B0HgICAgICAgIDAHzAj9CGDk37IcPQlPSffDNYTjJOOZDj43uCk0Zyw88w7uBOsBypYZYjBCa2/ys/JcPD1GQfcC/hMNasMZDi6d2H53+7EW9fWAnykmlX6GjjYsnj5H3JwGCDgBfjEeXR+A8PB2mXLu7aSkx7l3QIYJ7yMU97ghFOGkex0wCcMHF2DdeU5OF05DDWATzAcPMtwEOF58pzbg6os8gDtKLVlVcs7lIWVDtW3yuEstKwO1QW3B5XbKbLCnvm5wp4xqX+Tkbsa5V2Z5faMLxX2TIThNbcHaa1UpJ6lPupZCs1qo2b0NqrGk/I6K3lYZ6Mm5jPZJbRR9XKjfKNbg04PJW/V2cgBnY1ECy2zklfdCdaxafvLbOTo3zJ1C7WSbW5/A7mey9pBeb12SIEWs3RQ0eRaJG6m1k6FaocU7FKZ2p8OKsynzLLtwF2KB1LOlVhkCMPuYjOxa7k89cv0oBKLrA8ns9gic5QOpu4BnqDpJ25ozIkIxyJzIqcZIA4uluXaBpp+og0vixhTWxKjPSo/uwATsa/AlGAv7EtAOBaY4scLTFLFwhx1rdq7sC/+HlaOKf5TXr/0mMfl54dbYoPzXh19kv9KgnDM65VM5fdKyuYDEPDK75Vcxz23wHQkA6w2SjbaN6dHfDOnR4yw7BbP5PSIa1zls3viLuKck90tns7tiisC/wwEvGBX7EW6KxZh+yK2A/dY2H2gCvwPsjpF5aoO0VRWZwxaLVWdIo9eiitG9TyKzHwWNaF8FoU8N/IKWAvS28JFVHsES7VHIPfdW6euBd5grTjxOGxHWmv4U9IYjlZqWmuYUW6MWPvfJMrGaF9FS+gtRcsutALNcmPQNsAbEPBKbd5ek/ooGC1rc7BDbgzZDfhISmNAZXJj4NfkpkD0N5OaAj/IHmyNAXwmocE/k2jwmyTu+6PfPX7fbzyp0V8C1gPSu777pfU+t+PrN41J63wmpXWb7hANPqK17iUgICAgIAD4zHd5fAGgfbEhmQAAAABJRU5ErkJggg==" alt="check-mark-emoji">';
}

function questionMark() {
  return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3WLUtEQRSA4cePsGAQi4igzSL4E1yT2DSJNtkfYPZvrFXsFhWLQQSNttUkmPwIwoomEU0qF8YyzKKwd64b9oUJM3PuvNwzZ4ahTw9SQwOHuMMbPvCIY2xitGxpHQ/4+qW9YK0s6QLe/yD9aZ/YKCO9tx0EzyHVqblXTHYjXk8seo6ZMD+IlZDiOG6rG/FuYg/HEnGNhHi/G/FJtNhRh7i5hLj4NjurCfFObukEbhLi5ZzSRdwnpBeh8Eqnhu1wZmPpNcZzSAfCtZk6v8UpGFFhIbWxJDN7kbS4vWZVwGkkPlARZ5G4WZW4T2XUcRmePlfhoZCdYTxFxVX0h3KLpzvcWFP/8cftMJ6debTCHrdCv0/v8g0mCI1aliBq0AAAAABJRU5ErkJggg==" alt="question-mark">';
}

function cross() {
  return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECElEQVR4nO2Y21IaWRiFeYB4B2JLBLRBGwwedqONCgooB+UghxiNOjd5APVu5jmnOCggSIhBoHezUXByYdWe6gsMM1H7QKMzVayq727/618L7YbaKtVQQw011P9G7aM4gb9ERwblj79ER/gdAzH/cZw8uf8t+fDX8Ue2c5xklPbvHCcZ3pvf8eNo71RZ86P42f1hAnfpfI63Okdxh2L+hzH6/jDB9e64/5z4Qxnzg92zzkEM/8J+rNX51H+JzmGM7uzHuKd2tPdj/ZW424uetj9F8fNEUOcgKvvfqXMQZXiPl3bc7UVPZJm34wHiNhl6uPsYxi+SDKNWckdyCX7mLhlGQv58hvbezpjkAo1odOQ2sc3eJnawIPEdSSX4s/zMrRjvxDZb29t4p5KjZjwAWrtB2IoFsSC7QdSKBwWfCRTz061YgFPS80U1wwHQjPggivixIGE/akW2nl2IQn4aRXycEl6SS3ChLdgM+bAIEBv8dTEfngttcf149KVmwAvgthdy25tYGO8/AqCQh4bBTU7OrKKqB7yADbghDHiwEGzAjdjghqPh99Cs38NJmVENUqzPzTR864j1bWAh+HNSzrI+t+I/UZ5U3esCda8LNjZdWAnqXidi3c7XCd9bouZeg3XPGu6HmnsNVV87/GMJlwPU1ldgbX0Fy+HGtYKqTuZtwnd17XKAG+cyvHEyWArVNebtw3d17aBBddUOq6tLWAzfV5dQ1Un/N8Lz+s4A+pqxc9cOOxYJqiyDwb4upYT/tgS4b8sAS2Px7UuUAaAr9gWuYl/A8phHFfBGJcrARn9dnOO+Ls7hvliwoQqwvW6Jss1Gl+dnufL8B6wIc7OoZHulEsU5C3P1wYqubFYsCH9OwtninGWwb6ayjaKL1hmuNEthQawUKloszBVFgeLsDBQ7U6KowfwlChRFX1JmrmiZxiJARYv58dO8okhwSZmh2NkSZVK2RIEi6cK0ibucMWERoKL5Z/iu8hQJCtMkFOtRUqpEgSTpvJnkCmYSC5E3k+jiifCPJUgS5E0kFOuVM/VZgg+fm5rk8lOTWIjclBFdGI2CD2Ge1IP81CQU65kzGOSVyM7MjOSMBjZnNGAhLgx6UeG74s/yMzkR3jmDoZGyaqRfq2T0euJcP/FwoZ/AL3E+8R5d6HSSX3/8zDk/K+Svn3hIGQzSL7Z4ZXW6k/P3OvwcWd24rPC9JbK6cfTyDl1/N9UZgjjLjhP432QIAqV12r6/eDIEAbLEGHxmhzI31Bli9CwzpsVd0mNalNb2H763REY7Cnt3ZLTa31VKKq1Wn6Y0moeUWt1QMnxXvGdKrWb5HWm1Wt6NtJD+HB3VpjQy3ggildJo3qU0GnkP7FBDDTWU6i30N4TdCC3jWDERAAAAAElFTkSuQmCC" alt="cross-mark-emoji">';
}
