function toggleSolution(btn) {
  const content = btn.nextElementSibling;
  content.classList.toggle("open");

  if (content.classList.contains("open")) {
    MathJax.typesetPromise([content]);
  }
}

const tagLinks = document.querySelectorAll('.tag');

tagLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tag = link.getAttribute('data-tag');
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
      const postTags = post.getAttribute('data-tags').split(',').map(t => t.trim());
      post.style.display = postTags.includes(tag) ? 'block' : 'none';
    });
  });
});
