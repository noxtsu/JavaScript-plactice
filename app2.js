let promptStr = prompt('何か好きな文字を入力してください。');
alertString = addString("WebCamp");

alert(promptStr);

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}
