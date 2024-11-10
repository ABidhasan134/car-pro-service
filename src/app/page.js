
import ServiceCard from "@/components/services/serviceCard";
import HomeMain from "./home/page";
import Bannar from "@/components/homepage/bannar";
import AboutSection from "@/components/homepage/aboutSection";
import TitleAndSub from "@/components/shared/titleAndSub";

export default function Home() {
  return (
    <div >
      <HomeMain></HomeMain>
      <Bannar></Bannar>
      <AboutSection></AboutSection>    
      <TitleAndSub title='Services' subtitle='the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. '></TitleAndSub>
      <div className='flex justify-center'>
      <ServiceCard></ServiceCard>  
      </div>
    </div>
  );
}
