// app.js

const base_url = 'https://jsonplaceholder.typicode.com';

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject("Failed to parse JSON");
        }
      });
    }).on('error', err => {
      reject(err.message);
    });
  });
};

const fetchUsers = () => fetchData(`${base_url}/users`);
const fetchPostsByUser = (userId) => fetchData(`${base_url}/posts?userId=${userId}`);
const fetchCommentsByPost = (postId) => fetchData(`${base_url}/comments?postId=${postId}`);

// Chain them together
fetchUsers()
  .then(users => {
    console.log("✅ All Users:");
    users.forEach(({ id, name }) => {
      console.log(`👤 ${id}. ${name}`);
    });

    const userId = 3;
    console.log(`\n📬 Fetching posts for user ${userId}...\n`);
    return fetchPostsByUser(userId);
  })
  .then(posts => {
    posts.forEach(({ id, title }) => {
      console.log(`📝 Post ${id}: ${title}`);
    });

    const postId = 4;
    console.log(`\n💬 Fetching comments for post ${postId}...\n`);
    return fetchCommentsByPost(postId);
  })
  .then(comments => {
    comments.forEach(({ id, email, body }) => {
      console.log(`📩 Comment ${id} by ${email}:\n  ${body}\n`);
    });
  })
  .catch(error => {
    console.error("❌ Error:", error);
  });
