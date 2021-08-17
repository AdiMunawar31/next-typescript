import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'

interface Post {
    id: number,
    title: string,
    body: string
}

interface BlogPost{
    dataBlogs: Post[]
}
export default function Blog(props: BlogPost) {
    const {dataBlogs} = props
    return (
       <Layout title="Blog Page">
           {dataBlogs.map(blog => {
               return (
                   <div key={blog.id} className={styles.cardBlog}>
                       <h3>{blog.title}</h3>
                       <p>{blog.body}</p>
                   </div>
               )
           })}
       </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataBlog = await res.json()
    return {
        props: {
            dataBlogs: dataBlog,
        }
    }
}