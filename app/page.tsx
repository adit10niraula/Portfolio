import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentsProjects from "@/components/RecentsProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <div>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-2-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentsProjects/>
        <Clients/>

        <h1>hello</h1>
      </div>
    </main>
   </div>
  );
}
