import { Post, PostAttributes } from "../types/Post";

// Base URL for the API
const API_URL = "http://localhost:1337/api";

// HTTP Request is a general-purpose function to make HTTP requests
// It takes a URL, a method, and an optional body
export const httpRequest = async (
  url: string,
  method: string = "GET",
  body?: any
) => {
  try {
    // options: this is the configuration object for the HTTP request
    const options: RequestInit = {
      // we want to cache the response for 10 seconds
      cache: "no-cache",
      // we want to use the method passed as an argument
      method,
      // we want to send JSON
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MDk2MjAyLCJleHAiOjE2OTE2ODgyMDJ9.mPXBQix9hOFprqkN1GMsV0XwqLwxFYVUt9TalejqWBU",
      },
    };

    // if we have a body, we want to stringify it
    if (body) {
      options.body = JSON.stringify(body);
    }

    // we make the request
    const res = await fetch(url, options);

    // if the response is not OK, we throw an error
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    // we return the response
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

export async function getPostById(id: string): Promise<Post> {
  const response = await httpRequest(`${API_URL}/posts/${id}`);

  return response.data;
}

export async function createPost(post: PostAttributes) {
  const response = await httpRequest(`${API_URL}/posts`, "POST", {
    data: post,
  });

  return response.data;
}

export async function updatePost(updatedPost: Post) {
  const response = await httpRequest(
    `${API_URL}/posts/${updatedPost.id}`,
    "PUT",
    { data: updatedPost.attributes }
  );

  return response.data;
}

export async function deletePost(id: string) {
  const response = await httpRequest(`${API_URL}/posts/${id}`, "DELETE");
  return response;
}
