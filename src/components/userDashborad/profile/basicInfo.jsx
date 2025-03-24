"use client";
import UseUser from "@/Hooks/useUser";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "user || Profile",
  description: "User Dashboard",
};
const BasicInfo = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false); // Add loading state

  const [oneUser, isLoading, refetch] = UseUser(user?.email);

  useEffect(() => {
    console.log("Updated user data:", oneUser);
  }, [oneUser])

  const handleNameChange = async (data) => {
    document.getElementById("name_modal").close();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change your name?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true); // Show loading
        try {
          const response = await axios.post("/api/user/profile", {
            email: user?.email,
            newName: data.newName, // Fix: Ensure correct payload
          });

          if (response.status === 200) {
            Swal.fire("Updated!", "Your name has been changed.", "success");
            refetch(); // Refresh user data
          } else {
            Swal.fire("Error!", response.data.message, "error");
          }
        } catch (error) {
          Swal.fire("Error!", "Failed to update name.", "error");
        } finally {
          setLoading(false); // Hide loading
        }
      }
    });
  };

  return (
    <div className="text-center relative md:-top-24 -top-24 xl:top-0">
      <h1 className="text-5xl">{ oneUser?.name || user?.name}</h1>
      <h3>Role: {oneUser?.role || "user"}</h3>
      <h6>Email: {user?.email || "user001@gmail.com"}</h6>

      <div>
        {/* Open the modal */}
        <button
          className="mr-1 btn bg-transparent border-[#FF3811] hover:bg-[#FF3811] text-black"
          onClick={() => document.getElementById("name_modal").showModal()}
        >
          Change Name
        </button>

        {/* Modal */}
        <dialog id="name_modal" className="modal">
          <div className="modal-box">
            <form
              className="grid gap-2 justify-center text-start"
              onSubmit={handleSubmit(handleNameChange)}
            >
              <label htmlFor="currentName">Current Name</label>
              <input
                className="bg-white px-4 py-3 outline-none w-[280px] text-gray-500 rounded-lg border-2 border-solid border-gray-300"
                id="currentName"
                value={user?.name || "username"}
                type="text"
                disabled
              />

              <label htmlFor="newName">Enter New Name</label>
              <input
                className="bg-white px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                id="newName"
                placeholder="Enter new name"
                type="text"
                {...register("newName", { required: "New name is required" })}
              />
              {errors.newName && <span className="text-red-500">{errors.newName.message}</span>}

              <button
                type="submit"
                disabled={loading}
                className={`w-1/2 btn ${loading ? "opacity-50 cursor-not-allowed" : ""} bg-transparent border-[#FF3811] hover:bg-[#FF3811]`}
              >
                {loading ? "Updating..." : "Confirm Name Change"}
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811] text-black">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BasicInfo;
