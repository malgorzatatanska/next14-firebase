import getUser from "../../../lib/getUser";

export default async function Dashboard() {
  const user = await getUser();

  return (
    <>
      <div>dashboarkd protected page {user?.email} </div>
    </>
  );
}
