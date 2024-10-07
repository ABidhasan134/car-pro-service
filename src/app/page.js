
import ServiceCard from "@/components/services/serviceCard";
import HomeMain from "./home/page";
import Bannar from "@/components/homepage/bannar";

export default function Home() {
  return (
    <div >
      <HomeMain></HomeMain>
      <Bannar></Bannar>
      <div className='flex justify-center'>
      <ServiceCard></ServiceCard>      
      </div>
    </div>
  );
}
