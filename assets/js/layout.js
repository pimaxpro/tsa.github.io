fetch("layouts/default.html")
  .then(res => res.text())
  .then(html => {

    // Parse layout
    const parser = new DOMParser();
    const layoutDoc = parser.parseFromString(html, "text/html");

    // Lấy phần <main id="content"> trong layout
    const layoutMain = layoutDoc.getElementById("content");

    // Lấy nội dung trang hiện tại
    const pageContent = document.getElementById("page-content");

    if (!layoutMain || !pageContent) return;

    // Gắn layout vào body (KHÔNG ĐỤNG HEAD)
    document.body.innerHTML = layoutDoc.body.innerHTML;

    // Inject content
    const realMain = document.getElementById("content");
    realMain.innerHTML = pageContent.innerHTML;

    // Render MathJax sau khi inject
    if (window.MathJax) {
      MathJax.typesetPromise([realMain]);
    }
  })
  .catch(err => {
    console.error("Layout load error:", err);
  });
