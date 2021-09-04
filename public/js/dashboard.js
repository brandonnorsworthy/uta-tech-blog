let toggled = true;

const showCreatePost = async () => {
  let createPost = document.querySelector('.post-create')
  let posts = document.querySelector('#dashboard-posts')

  if (toggled) {
    createPost.style.display = 'block'
    posts.style.display = 'none'
    toggled = false;
  } else {
    createPost.style.display = 'none'
    posts.style.display = 'block'
    toggled = true;
  }
};

const createPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post/create', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.href = '/dashboard'
    } else {
      alert('Failed to create post.');
    }
  }
}

document.querySelector('#new-post').addEventListener('click', showCreatePost);
document.querySelector('.create-post-form').addEventListener('submit', createPost);
