export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    const paths = posts.map(post => ({
        params: {
            bid: post.id.toString(),
        }
    }));
    return {
        paths,
        fallback: false,
    }
}

function SingleBlog({ data }) {
    console.log(data);
    return (
        <div className="blog-section">
            <h2> Single Blog</h2>
            <h1> {data.title} </h1>
            <p>
                {data.body}
            </p>

        </div>
    );
}

export async function getStaticProps(ctx) {
    const bid = ctx.params.bid;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${bid}`)
    const post = await res.json();

    return {
        props: {
            data: post,
        }
    }
}

export default SingleBlog;