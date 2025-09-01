import Signin from '@/Components/people/Signin'
import Navbar from "@/Components/people/Navbar";
import Footer from "@/Components/people/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Signin />   
      <Footer /> 
    </div>
  )
}