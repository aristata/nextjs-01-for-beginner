import NavBar from "./NavBar";
import Seo from "./Seo";
import {useRouter} from "next/router";

export default function Layout({children}) {
  const router = useRouter()
  const titleList = {
    "/": "Home",
    "/about": "About"
  }
  return (
    <>
      <Seo title={titleList[router.pathname]}/>
      <NavBar/>
      <div>{children}</div>
    </>
  )
}