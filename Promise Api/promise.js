/*
Endpoint to get users;
const base_url=https://jsonplaceholder.typicode.com
base_url/users

Enpoint to get posts by a certain user;
base_url/posts?userId=3

Enpoint to get comments on post
base_url/comments?postId=4
*/


const base_url = 'https://jsonplaceholder.typicode.com';

// 1. Fetch all users
const fetchUsers = new Promise((resolve, reject) => {
  fetch(`${base_url}/users`)
    .then(response => {
      if (response.status === 200) return response.json();
      else reject(`Error: Users status ${response.status}`);
    })
    .then(data => resolve(data))
    .catch(error => reject(`Users fetch failed: ${error}`));
});

// 2. Fetch posts by userId
const fetchPostsByUser = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`${base_url}/posts?userId=${userId}`)
      .then(response => {
        if (response.status === 200) return response.json();
        else reject(`Error: Posts status ${response.status}`);
      })
      .then(data => resolve(data))
      .catch(error => reject(`Posts fetch failed: ${error}`));
  });
};

// 3. Fetch comments on postId
const fetchCommentsOnPost = (postId) => {
  return new Promise((resolve, reject) => {
    fetch(`${base_url}/comments?postId=${postId}`)
      .then(response => {
        if (response.status === 200) return response.json();
        else reject(`Error: Comments status ${response.status}`);
      })
      .then(data => resolve(data))
      .catch(error => reject(`Comments fetch failed: ${error}`));
  });
};

// 🔗 Chain them together
fetchUsers
  .then(users => {
    console.log('All Users:', users);
    const userId = users[0].id;
    console.log(`\nSelected User ID: ${userId}`);
    return fetchPostsByUser(userId);
  })
  .then(posts => {
    console.log('\nPosts by User:', posts);
    const postId = posts[0].id;
    console.log(`\nSelected Post ID: ${postId}`);
    return fetchCommentsOnPost(postId);
  })
  .then(comments => {
    console.log('\nComments on Selected Post:', comments);
  })
  .catch(error => {
    console.error('\nSomething went wrong:', error);
  });
