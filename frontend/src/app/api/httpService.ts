import { Post } from "../types/Post";

const API_URL = "http://localhost:1337/api";

export const httpRequest = async (
  url: string,
  method: string = "GET",
  body?: any
) => {
  try {
    const options: RequestInit = {
      next: {
        // revalidate every 10 seconds
        revalidate: 10,
      },
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(`HTTP Error: ${error.message}`);
  }
};

export async function getPosts(): Promise<Post[]> {
  const response = await httpRequest(`${API_URL}/posts`);
  return response.data;
}

export async function getPostById(id: string) {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const { data } = await response.json();

  return data;
}

export async function createPost(post: Post) {
  const response = await httpRequest(`${API_URL}/posts`, "POST", post);
}

export async function updatePost(post: Post) {}

export async function deletePost(id: string) {
  const response = await httpRequest(`${API_URL}/posts/${id}`, "DELETE");
  return response;
}
