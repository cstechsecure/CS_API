
function testGS()
{
const url="https://script.googleusercontent.com/macros/echo?user_content_key=uNTxiUsPRv1C4ugB647L4NbjtlXlNAp7_zYUtpytwKZi2ju-khhu5C0oEfMooCKk27Dgyf-mOmG9ZtaIrqA1HkvGk3700AOWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPtxOmJXMSJqUzr-niKf4WidtMd6QbNTs6mP-8c4GRBWCiCJEidPrLCHF7aisOolGJ_JG3-ma8sE81Um3Wg4Q6HViy8ddyHbWg&lib=ML7Bi_0XhmQha8ncsNSUUBT4bn3rFgJK4";
fetch(url)
        .then(d=>d.json())
        .then(d=>{
            document.getElementById("app").textContent=d[0].status;
        });
}
document.getElementById("btn").addEventListener("click",testGS);