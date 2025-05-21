let timer = 30;
let interval;
let code = "1111";
let isGameActive = false;

const timerDisplay = document.getElementById("timer");
const input = document.getElementById("codeInput");
const defuseBtn = document.getElementById("defuseBtn");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

function startGame() {
  code = 1111
  timer = 30;
  isGameActive = true;
  message.textContent = "";
  input.value = "";
  input.disabled = false;
  defuseBtn.disabled = false;

  interval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `タイマー: ${timer}`;
    if (timer <= 0) {
      clearInterval(interval);
      isGameActive = false;
      input.disabled = true;
      defuseBtn.disabled = true;
      message.textContent = "💥 爆発した！";
    }
  }, 1000);
}

function checkCode() {
  if (!isGameActive) return;
  if (input.value == code) {
    clearInterval(interval);
    message.textContent = "✅ 解除成功！";
    isGameActive = false;
    input.disabled = true;
    defuseBtn.disabled = true;

    // 正解なら t1.html に遷移
    setTimeout(() => {
      window.location.href = "t1.html";
    }, 1000); // メッセージ表示のために少し待機（任意）
  } else {
    window.location.href = "f1.html";
  }
}


startBtn.addEventListener("click", startGame);
defuseBtn.addEventListener("click", checkCode);
