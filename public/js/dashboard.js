let item = document.querySelector('.post-create')
let toggled = true;

const showCreatePost = async () => {
  if (toggled) {
    item.style.display = 'block'
    toggled = false;
  } else {
    item.style.display = 'none'
    toggled = true;
  }
};

const createPost = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    showCreatePost();
  } else {
    alert('Failed to create post.');
  }
}

document.querySelector('#new-post').addEventListener('click', showCreatePost);
document.querySelector('.create-post-form').addEventListener('submit', signupFormHandler);
