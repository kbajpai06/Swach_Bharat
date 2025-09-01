import Post from '@/Components/people/Post'
import Navbar from "@/Components/people/Navbar";
import Footer from "@/Components/people/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Post />   
      <Footer /> 
    </div>
  )
}