import getUser from "../../lib/getUser";

export default async function Dashboard() {
  const user = await getUser();

  return (
    <>
      <div className="max-w-screen-xl mx-auto text-gray-600 mt-10">
        dashboarkd protected page {user?.email}{" "}
      </div>
    </>
  );
}
