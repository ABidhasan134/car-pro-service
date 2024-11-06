
import ServiceCard from "@/components/services/serviceCard";
import HomeMain from "./home/page";
import Bannar from "@/components/homepage/bannar";
import AboutSection from "@/components/homepage/aboutSection";

export default function Home() {
  return (
    <div >
      <HomeMain></HomeMain>
      <Bannar></Bannar>
      <AboutSection></AboutSection>    
      <div className='flex justify-center'>
      <ServiceCard></ServiceCard>  
      </div>
    </div>
  );
}
