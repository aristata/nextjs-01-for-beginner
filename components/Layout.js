import NavBar from "./NavBar";
import Seo from "./Seo";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  // console.log(router.query.params === undefined);
  const detailTitle =
    router.query.params === undefined ? "" : router.query.params[0];
  // console.log(detailTitle);
  const titleList = {
    "/": "Home",
    "/about": "About",
    "/movies": "Movies",
    "/movies/[...params]": detailTitle,
  };
  return (
    <>
      <Seo title={titleList[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
