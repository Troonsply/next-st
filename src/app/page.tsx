import Link from "next/link";

const fetchData = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const result = await res.json();
return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
      <div>
        <h1>Главная страница</h1>
          {posts?.map((post:any) => (
              <div key={post?.id} className={'post'}>
                  <h2>{post?.title}</h2>
                  <p>{post?.body}</p>
                  <Link href={`/post/`+post?.title}>Detail</Link>
              </div>
          ))}
      </div>
  );
}
