import { client, urlFor } from "@/sanity/lib/client";
import Header from "./components/Header";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Post } from "./interface";

export default async function Home() {
  const query = `*[_type == "blog"] | order(publishedAt desc)`;
  const posts: Post[] = await client.fetch(query);

  return (
    <div>
      <Header />

      <div className="container mx-auto p-4 pt-10">
        <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4 ">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card
                key={post._id}
                className=" mb-4 shadow p-4 border rounded hover:bg-slate-200"
              >
                <CardContent className="flex flex-col gap-3">
                  <div className="">
                    {post.images?.map((image, index) => (
                      <Image
                        key={index}
                        src={urlFor(image).width(500).url()}
                        alt={`Image ${index + 1}`}
                        width={500}
                        height={300}
                        className="rounded"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#495057] mt-2 font-pop">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                  <h2 className="text-xl font-semibold font-pop">
                    {post.title}
                  </h2>
                  <p className="text-[#495057] line-clamp-3 text-xs font-pop">
                    {post.description}
                  </p>
                  <div className="bg-[#E5E5E5] w-full h-[0.2px] mt-3"></div>
                  <p className="text-[#495057] text-xs font-pop pt-2">
                    By: {post.author}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
