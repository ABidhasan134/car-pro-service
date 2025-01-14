import UseUser from "@/Hooks/useUser";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import avater from "../../../public/assets/avater.png";

const UserInfo = ({ user }) => {
  // console.log(user.email)
  const [oneUser, isloading, refetch] = UseUser(user.email);
  console.log(oneUser);

  const useDropdown = (
    <>
      <li>
        <Link href="/userDeshborad">DashBord</Link>
      </li>
      <li>
        <Link href="/userDeshborad/profile">profile</Link>
      </li>
    </>
  );
  return (
    <div className="flex gap-2 w-auto">
      <button className="btn btn-outline btn-error" onClick={() => signOut()}>
        Log out
      </button>
      {oneUser.role === "user" && oneUser.userStatus === "ok" ? (
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} className="m-1">
            <Image
              className="rounded-full border-2 border-orange-600 p-[2px]"
              src={user?.image}
              alt={user?.name}
              width={40}
              height={40}
            ></Image>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow relative -left-32"
          >
            {useDropdown}
          </ul>
        </div>
      ) : (
        ""
      )}
      {oneUser.role === "admin"  ? (
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} className="m-1">
            <Image
              className="rounded-full border-2 border-orange-600 p-[2px]"
              src={user?.image}
              alt={user?.name}
              width={40}
              height={40}
            ></Image>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow relative -left-32"
          >
            admin panael
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInfo;
