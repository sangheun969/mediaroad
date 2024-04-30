import Main from "../components/Main";
import Header from "../components/templates/Header";
import ComIntro from "../components/templates/ComIntro";
import ComCom from "../components/templates/ComCom";
export default function Home() {
  return (
    <main className="m-0 p-0">
      <Header />
      <Main />
      <ComIntro />
      <ComCom />
    </main>
  );
}
