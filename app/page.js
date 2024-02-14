export default async function Home() {
    const users = await fetch("http://127.0.0.1:3000/api").then(res => res.json())

    return (
        <div>
            {users}
        </div>
    )
}
