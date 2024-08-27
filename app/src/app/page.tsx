import Main from "../components/Main";
import Header from "../components/templates/Header";
import ComIntro from "../components/templates/ComIntro";
import ComCom from "../components/templates/ComCom";
import ComService from "../components/templates/ComService";
import ComVideo from "../components/templates/ComVideo";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <Header />
      <Main />
      <ComVideo />
      <ComIntro />
      <ComCom />
      <ComService />
    </main>
  );
}
