const report = document.querySelector("#report");
const wordCount = document.querySelector("#wordCount");
const printButton = document.querySelector("#printButton");

function countWords(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

if (report && wordCount) {
  const totalWords = countWords(report.innerText);
  wordCount.textContent = `Jumlah kata laporan: ${totalWords}`;
}

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
