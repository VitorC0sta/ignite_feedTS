import { Post } from "../../components/Post/Post";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "../../../styles/global.css";

/*
  THIS DATAS WAS CREATED FOR STUDIES FINALITIES, ANY SIMILARITY TO REALITY IS PURELY COINCIDENTAL !
  ESTES DADOS FORAM CRIADOS PARA FINALIDADES DE ESTUDO, QUALQUER SEMELHANÇA COM A REALIDADE É MERA COINCIDÊNCIA !
*/

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTE @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'vitor.design/doctorcare'},
    ],    
    publishedAt: new Date('2024-05-15 16:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mariasilva.png',
      name: 'Maria Silva',
      role: 'Nutricionista',
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de publicar uma nova receita saudável no meu blog. É um smoothie verde cheio de vitaminas e minerais para começar bem o dia! 🥤' },
      { type: 'link', content: 'mariasilva.com/smoothie-verde' },
    ],
    publishedAt: new Date('2024-05-14 10:00:00'),
  }, 
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/joaosouza.png',
      name: 'João Souza',
      role: 'Fotógrafo Profissional',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal 👋' },
      { type: 'paragraph', content: 'Compartilhei algumas das minhas últimas fotos de paisagens no Instagram. Essas fotos foram tiradas durante a minha viagem recente à Patagônia. 🌄' },
      { type: 'link', content: 'instagram.com/joaosouza' },
    ],
    publishedAt: new Date('2024-05-13 14:45:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/anaoliveira.png',
      name: 'Ana Oliveira',
      role: 'Instrutora de Yoga',
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de lançar um novo vídeo no meu canal do YouTube. Este vídeo é uma aula de yoga para iniciantes, perfeita para quem quer começar a praticar e melhorar a flexibilidade. 🧘‍♀️' },
      { type: 'link', content: 'youtube.com/anaoliveira' },
    ],
    publishedAt: new Date('2024-05-12 09:30:00'),
  }
  
]

function App() {


  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />  
        <main className={styles.main}>
          {
            posts.map(post => (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            )
          }
        </main>
      </div>
    </div>
  );
}

export default App;
