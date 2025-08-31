async function translateText() {
  const text = document.getElementById("inputText").value;
  const targetLang = document.getElementById("language").value;

  if (!text) {
    alert("⚠️ Please enter some text.");
    return;
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const translated = data[0][0][0];
    const original = data[0][0][1];

    document.getElementById("original").innerText = original;
    document.getElementById("translated").innerText = translated;
    document.getElementById("result").classList.remove("hidden");

  } catch (err) {
    document.getElementById("translated").innerText = "❌ Translation failed.";
    console.error(err);
  }
}
