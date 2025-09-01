import Profile from '@/Components/municipality/Profile'
import Navbar from "@/Components/municipality/Navbar";
import Footer from "@/Components/municipality/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer/>   
    </div>
  )
}