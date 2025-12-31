fetch("layouts/default.html")
  .then(response => response.text())
  .then(layoutHTML => {

    const parser = new DOMParser();
    const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

    const layoutBody = layoutDoc.body;
    const pageContent = document.getElementById("page-content");

    document.body.innerHTML = layoutBody.innerHTML;

    const main = document.getElementById("content");
    if (pageContent && main) {
      main.innerHTML = pageContent.innerHTML;
    }

    if (window.MathJax) {
      MathJax.typesetPromise();
    }
  })
  .catch(err => {
    console.error("Layout load error:", err);
  });
