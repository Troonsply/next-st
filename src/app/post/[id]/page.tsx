import Post from '@/app/components/Post';

export async function generateMetadata({params}: { params: any}): Promise<any> {
    const post = await fetchData(params.id);
    return {
        title: post?.title,
        description: post?.body,
    }
}

const fetchData = async (id: string) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const result = await res.json();
    return result;
}

const PagePost = async ({params: {id}}: { params: any }) => {
    const post = await fetchData(id);
    return (
        <div className={'post'}>
            <Post post={post}/>

        </div>
    )
}
export default PagePost;