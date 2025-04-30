import { useUsersContext } from "@/contexts";

export const AllPeople = () => {
  const { userData } = useUsersContext();

  console.log(userData);
  return (
    <div className="w-full grid grid-cols-4 h-full">
      <span className="text-black font-lato font-bold">All people</span>
      {/* {userData.map((, index) => (
        <div key={index}></div>
      ))} */}
    </div>
  );
};
