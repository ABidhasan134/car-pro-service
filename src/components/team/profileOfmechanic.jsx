import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./profile.css";
import Image from "next/image";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const ProfileOfMechanic = ({ person }) => {
  console.log("mechanics list", person);

  return (
    <div className="cardProfile">
      <Image className="image" src={person.image} height={200} width={200} alt={`${person.expert_name}'s profile picture`} />
      <div className="card-infoProfile">
        <span>{person.expert_name}</span>
        <p>{person.position}</p>
      </div>
      <section className="flex gap-2 [&>*]:text-3xl">
        {person?.social_links?.facebook && (
          <Link href={person.social_links.facebook} className="tooltip tooltip-bottom" data-tip="facebook" 
           target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
        )}
        {person?.social_links?.linkedin && (
          <Link href={person.social_links.linkedin} className="tooltip tooltip-bottom" data-tip="linkdin"
           target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        )}
        {person?.social_links?.twitter && (
          <Link href={person.social_links.twitter} className="tooltip tooltip-bottom" data-tip="X"
           target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </Link>
        )}
        
        {person?.social_links?.instagram && (
          <Link href={person.social_links.instagram} className="tooltip tooltip-bottom" data-tip="instagram"
          target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram />
          </Link>
        )}
      </section>
    </div>
  );
};

export default ProfileOfMechanic;
