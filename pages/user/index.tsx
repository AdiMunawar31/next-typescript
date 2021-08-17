import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'

interface UsersProps {
    dataUsers: Array<any>
}
export default function Users(props: UsersProps) {
    const {dataUsers} = props
    const router = useRouter()

    console.log(dataUsers);
    return (
        <Layout title="User Page">
            {dataUsers.map((user) => (
                <div key={user.id} className={styles.card} onClick={() => router.push(`user/${user.id}`)}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUser = await res.json()
    return {
        props: {
            dataUsers: dataUser,
        }
    }
}