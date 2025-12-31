fetch("/layouts/default.html")
  .then(res => res.text())
  .then(html => {
    document.documentElement.innerHTML = html;

    const pageContent = document.getElementById("page-content");
    const main = document.getElementById("content");

    if (pageContent && main) {
      main.innerHTML = pageContent.innerHTML;

      if (window.MathJax) {
        MathJax.typesetPromise([main]);
      }
    }
  });
