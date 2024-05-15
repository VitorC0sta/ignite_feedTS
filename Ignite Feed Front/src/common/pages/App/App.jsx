import { Post } from "../../components/Post/Post";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import style from "./App.module.css";

import "../../../styles/global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />  
        <main>
          <Post
            author="Vitor Costa"
            content="Textinho aqui pra aparecer na tela"
          />
          <Post
            author="Gabi Ferraz"
            content="Textinho aqui pra aparecer na tela"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
