import NavBar from "../components/navbar";
import "../styles/globals.css";

export default function App({Component, pageProps}) {
  return (
    <div>
      <NavBar/>
      <hr/>
      <Component {...pageProps} />
      <br/><br/><br/><br/><br/>
      <hr/>
      <span>Created by Aristata</span>
      
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}