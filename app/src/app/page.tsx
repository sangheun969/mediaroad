import Main from "../components/Main";
import Header from "../components/templates/Header";
import ComIntro from "../components/templates/ComIntro";
import ComService from "../components/templates/ComService";
import ComVideo from "../components/templates/ComVideo";
import ComVideo2 from "@/components/templates/ComVideo2";
import Foots from "@/components/templates/Foots";
export default function Home() {
  return (
    <main className="m-0 p-0">
      <Header />
      <Main />
      <ComVideo />
      <ComVideo2 />
      <ComIntro />
      <ComService />
      <Foots />
    </main>
  );
}
