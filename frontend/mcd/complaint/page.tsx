import Complaint from '@/Components/municipality/Complaint'
import Navbar from "@/Components/municipality/Navbar";
import Footer from "@/Components/municipality/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Complaint /> 
      <Footer />   
    </div>
  )
}

