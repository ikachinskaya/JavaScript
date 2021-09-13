//==================================================================
"use strict";
//обязательная часть
try {
  console.log(1);
  console.log(2);
  console.log(3);
} catch (error) {
  //или catch или finally
  //необязательная
  console.log(err);
} finally {
  //необязательная
  console.log("finally");
}
