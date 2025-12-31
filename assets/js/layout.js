fetch("layouts/default.html")
  .then(res => res.text())
  .then(html => {

    const parser = new DOMParser();
    const layoutDoc = parser.parseFromString(html, "text/html");

    const layoutHeader = layoutDoc.querySelector("header.site-header");
    const layoutNav = layoutDoc.querySelector("nav.menu");
    const pageContent = document.getElementById("page-content");

    if (!pageContent) return;

    // Gắn header
    if (layoutHeader) {
      document.body.prepend(layoutHeader);
    }

    // Gắn menu
    if (layoutNav) {
      document.body.insertBefore(layoutNav, pageContent);
    }

    // Đặt content vào main
    let main = document.createElement("main");
    main.id = "content";
    main.innerHTML = pageContent.innerHTML;

    pageContent.replaceWith(main);

    // Render MathJax
    if (window.MathJax) {
      MathJax.typesetPromise([main]);
    }
  })
  .catch(err => {
    console.error("Layout load error:", err);
  });
