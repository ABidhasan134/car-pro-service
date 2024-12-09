import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./profile.css";
import Image from "next/image";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const ProfileOfMechanic = ({ person }) => {
  console.log("mechanics list", person);

  return (
    <div
      className="cardProfile"
      onClick={() => document.getElementById(person._id).showModal()}
    >
      <Image
        className="image"
        src={person.image}
        height={200}
        width={200}
        alt={`${person.expert_name}'s profile picture`}
      />
      <div className="card-infoProfile">
        <span>{person.expert_name}</span>
        <p>{person.position}</p>
      </div>
      <section className="flex gap-2 [&>*]:text-3xl">
        {person?.social_links?.facebook && (
          <Link
            href={person.social_links.facebook}
            className="tooltip tooltip-bottom"
            data-tip="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
        )}
        {person?.social_links?.linkedin && (
          <Link
            href={person.social_links.linkedin}
            className="tooltip tooltip-bottom"
            data-tip="linkdin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        )}
        {person?.social_links?.twitter && (
          <Link
            href={person.social_links.twitter}
            className="tooltip tooltip-bottom"
            data-tip="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </Link>
        )}

        {person?.social_links?.instagram && (
          <Link
            href={person.social_links.instagram}
            className="tooltip tooltip-bottom"
            data-tip="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram />
          </Link>
        )}
      </section>
      
      <dialog id={person._id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl ">
          
          <div className="relative h-auto bg-gradient-to-r from-[#FF3811] to-[#f47813]">
            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute bg-white w-40 h-40 rounded-full top-10 left-20 opacity-10"></div>
              <div className="absolute bg-white w-24 h-24 rounded-full top-40 left-60 opacity-10"></div>
              <div className="absolute bg-white w-32 h-32 rounded-full bottom-10 right-20 opacity-10"></div>
            </div>

            <div className="relative max-w-4xl mx-auto py-12 px-6">

              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mt-6  rounded-full shadow-lg bg-gray-300">
                <Image src={person.image} className="w-24 h-24 rounded-full border-4 border-white" height={190} width={200}></Image>
              </div>

              {/* Title and Description */}
              <div className="text-center mt-8">
                <h1 className="text-2xl font-bold text-white">{person.expert_name}</h1>
                <span className="text-gray-200">{person.position}</span>
              </div>
              <div className="text-center mt-4 text-white flex justify-center">
                <p className="w-[500px]">
                  Hello! I’m {person.expert_name}, a passionate mechanic specializing in
                  {person.specialties[0]},{person.specialties[1]} and {person.specialties[2]}.
                </p>
              </div>

              {/* Statistics */}
              <ul className="flex justify-center mt-6 space-x-8 text-white">
                <li className="text-center">
                  <span className="text-xl font-bold">{person.working_experience}+</span>
                  <br />
                  Years Experience
                </li>
                <li className="text-center">
                  <span className="text-xl font-bold">20+</span>
                  <br />
                  Completed Projects
                </li>
                <li className="text-center">
                  <span className="text-xl font-bold">15+</span>
                  <br />
                  Happy Clients
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProfileOfMechanic;
