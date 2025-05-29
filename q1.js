let code = "goal";

const input = document.getElementById("codeInput");
const defuseBtn = document.getElementById("defuseBtn");
const message = document.getElementById("message");


function checkCode() {
  if (input.value == code) {
    message.textContent = "✅ 解除成功！";
    input.disabled = true;
    defuseBtn.disabled = true;

    // 正解なら t1.html に遷移
    setTimeout(() => {
      window.location.href = "t1.html?ans=goa";
    }, 1000); // メッセージ表示のために少し待機（任意）
  } else {
    window.location.href = "f1.html";
  }
}

defuseBtn.addEventListener("click", checkCode);
