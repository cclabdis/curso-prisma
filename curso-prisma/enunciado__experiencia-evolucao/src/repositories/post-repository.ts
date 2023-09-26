import prisma from "database/database";
import { Post } from "../protocols/post-protocol";

const TABLE_NAME = "temp_posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const result = await prisma.temp_posts.findMany()
  return result;
}

async function getPost(id: number) {
  const result = await prisma.temp_posts.findUnique({
    where: {
      id
    }
  })

  return result;
}

async function createPost(post: CreatePost) {
  const { username, title, content, createdAt } = post;
  const result = await prisma.temp_posts.create({
    data: post
  })
}

async function deletePost(id: number){
  await prisma.temp_posts.delete({
    where: {
      id
    }
  })
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;