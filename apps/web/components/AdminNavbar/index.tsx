import React, { useEffect } from "react";
import { UserAuth } from "@/context/Auth";
import Image from "next/image";

export default function AdminNavbar() {
  const { logout, user } = UserAuth();

  return (
    <>
      {user !== null && Object.keys(user).length !== 0 ? (
        <div className="hidden md:block w-full h-8 bg-primary-700">
          <div className="absolute left-3 top-1 rounded-full overflow-hidden w-5 h-5 bg-red-300">
            <Image fill src={user.photoURL} alt="profile image" />
          </div>
          <button className="absolute right-3 text-black-100" onClick={logout}>
            Logout
          </button>
          <div className="w-full text-center text-black-100">
            Admin Utility v.1.0.0
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
