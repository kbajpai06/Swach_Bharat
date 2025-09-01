import SignUp from '@/Components/municipality/SignUp'
import Navbar from "@/Components/municipality/Navbar";
import Footer from "@/Components/municipality/Footer";


export default function Home(){
  return (
    <div>
      <Navbar />
      <SignUp />
      <Footer/>   
    </div>
  )
}