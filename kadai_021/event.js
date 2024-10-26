const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
  setTimeout(() => {
    const h2Text=document.getElementById("text");
    h2Text.textContent="ボタンをクリックしました"
  }, 2000);
})