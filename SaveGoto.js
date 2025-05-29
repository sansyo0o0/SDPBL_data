const stages = ["q27","question2","question3.1"];

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
