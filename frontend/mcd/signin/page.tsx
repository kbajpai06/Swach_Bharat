import Signin from '@/Components/municipality/Signin'
import Navbar from "@/Components/municipality/Navbar";
import Footer from "@/Components/municipality/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Signin />
      <Footer/>   
    </div>
  )
}