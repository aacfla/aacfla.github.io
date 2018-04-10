const key = "AIzaSyCSnYo8qASFfGGCUm44nk75h0KUO6AsCRk";
const spreadsheetId = "1N-kLM4rQcQ8aEOXOpVIotic4RqvuyhacoN51Y0MlqRs";
const range = "Sheet1!A:B";

const url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + range + "?key=" + key;
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onload = () => {
  let response = JSON.parse(xhr.responseText);
  console.log(response);
}

xhr.send();
