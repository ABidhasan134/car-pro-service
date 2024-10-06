import Image from "next/image";
import HomeMain from "./home/page";
import Bannar from "@/components/homepage/bannar";

export default function Home() {
  return (
    <div>
      <HomeMain></HomeMain>
      <Bannar></Bannar>
    </div>
  );
}
