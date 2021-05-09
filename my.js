
function testGS()
{
const url="https://script.google.com/macros/s/AKfycbyVCb4XTai4z5jNTP8M14YmcdSTqinFWPbup9eG/exec";
fetch(url)
        .then(d=>d.json())
        .then(d=>{
            document.getElementById("app").textContent=d[0].status;
        });
}
document.getElementById("btn").addEventListener("click",testGS);

function postGS()   
{
console.log("post");
const url="https://script.google.com/macros/s/AKfycbyVCb4XTai4z5jNTP8M14YmcdSTqinFWPbup9eG/exec";
fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({name:"joseph"}) // body data type must match "Content-Type" header
  });
}
document.getElementById("btn2").addEventListener("click",postGS)
