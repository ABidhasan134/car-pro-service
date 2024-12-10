import ServiceCard from "@/components/services/serviceCard";
// import HomeMain from "./home/page";
import Bannar from "@/components/homepage/bannar";
import AboutSection from "@/components/homepage/aboutSection";
import TitleAndSub from "@/components/shared/titleAndSub";
import Link from "next/link";
import Sapport from "@/components/homepage/sapport";
import ProductList from "@/components/products/productList";
import MainTeam from "@/components/team/mainTeam";
import Testimonial from "@/components/testimonila/testimonial";
import ChooseUs from "@/components/chooseUs/chooseUs";


export default function Home() {
  return (
    <div>
      {/* <HomeMain></HomeMain> */}
      <Bannar></Bannar>
      <AboutSection></AboutSection>
      <TitleAndSub
        title="Services"
        subtitle="the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. "
      ></TitleAndSub>
      <div className="flex justify-center">
        <ServiceCard></ServiceCard>
      </div>
      <div className="flex justify-center mb-6">
        <Link
          href="/services"
          className="btn btn-outline btn-error min-w-72 text-black"
        >
          More Service
        </Link>
      </div>
      <Sapport></Sapport>
      <ProductList></ProductList>
      <MainTeam></MainTeam>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
}
