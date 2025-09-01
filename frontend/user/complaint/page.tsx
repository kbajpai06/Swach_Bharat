import Complaint from '@/Components/people/Complaint'
import Navbar from "@/Components/people/Navbar";
import Footer from "@/Components/people/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Complaint /> 
      <Footer />   
    </div>
  )
}

