import client from "@/db";

async function getUserData() {
  const userData = await client.user.findUnique({
    where: {
        id: 1
    }
  })
  return userData;
}

export default async function Home() {
  const user = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {user?.username}
            </div>
            
            Password: {user?.password}
        </div>
    </div>
</div>
  );
}
