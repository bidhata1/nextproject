'use client';
import { useEffect, useState } from 'react';
import {Post} from './types';



export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts.slice(0, 5)); // Limit to 5 posts for display
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts from DummyJSON</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
            <p><strong>Reactions:</strong> Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
