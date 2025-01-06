import { Post } from "@/app/interface";
import { client, urlFor } from "@/sanity/lib/client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function BlogPost({ params }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]`; //query to fetch single post
  const post: Post = await client.fetch(query, { slug: params.slug });

  return (
    <div className="blog-post ">
      {/* Navbar */}
      <nav className=" flex justify-between top-0 w-full p-10  items-center z-10  left-0  mx-auto text-black">
        <div className="text-black leading-[25px] text-[18px] font-bold font-pop">
          Vence
        </div>
        <ul className="space-x-6 items-center md:flex hidden">
          <li>
            <Link
              href="/"
              className=" hover:underline-offset-3 hover:underline  transition  text-xs font-pop"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className=" hover:underline-offset-3 hover:underline transition  text-xs font-pop"
            >
              Inspiration
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className=" hover:underline-offset-3 hover:underline transition  text-xs font-pop"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className=" hover:underline-offset-3 hover:underline transition  text-xs font-pop"
            >
              Blog
            </Link>
          </li>
          <div className="h-[25px] w-[0.5px] bg-black"></div>
          <Search className="w-[12px] h-[12px]" color="black" />
        </ul>
      </nav>

      <div className="container mx-auto p-4 flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold mb-4 mx-auto font-pop tracking-tight">
          {post.title}
        </h1>
        <div className="w-full h-full mt-4 mx-auto">
          {post.images?.map((image, index) => (
            <Image
              key={index}
              src={urlFor(image).url()}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
              className="md:w-1/2 w-full h-full mx-auto rounded object-contain object-center"
            />
          ))}
        </div>
        <p className="text-gray-800 mt-10 font-pop tracking-wider text-base">
          {post.description}
        </p>
        <p className="text-sm text-gray-600  mt-2 font-pop tracking-wider">
          Published on: {new Date(post.publishedAt).toDateString()}
        </p>
        <p className="text-sm text-gray-600  mt-2 font-pop tracking-wider">
          By: {post.author}
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
