import Link from 'next/link';
function BlogPage({ posts }) {
    return (
        <div>
            <h1> Blogs page</h1>
            <hr />
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className="blog-section">
                            <Link href={`/blog/${post.id}`} passHref>
                                <h2> {post.id} : {post.title} </h2>
                            </Link>
                            <p> {post.body} </p>


                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(ctx) {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    }
}

export default BlogPage;