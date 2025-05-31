const stages = ["arr","eni","question3.1","question3.2","goa"];

stages.forEach(stage => {
    if (localStorage.getItem(`${stage}-cleared`) === "true") {
      const link = document.getElementById(stage);
      if (link) {
        link.style.backgroundColor = "#d4edda"; // うす緑色に変更
        link.style.color = "#155724"; // 文字色
        link.textContent += " ✔"; // テキストにチェック追加
      }
    }
  });

document.getElementById("resetB").addEventListener("click", function () {  
    localStorage.clear();  
    location.reload(); 
  });

