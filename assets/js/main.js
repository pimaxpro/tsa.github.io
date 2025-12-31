function toggleSolution(btn) {
  const content = btn.nextElementSibling;
  content.classList.toggle("open");

  if (content.classList.contains("open")) {
    MathJax.typesetPromise([content]);
  }
}
