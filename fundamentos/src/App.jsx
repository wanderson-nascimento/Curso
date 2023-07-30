import { Post } from '../componentes/Post'
import { Header } from '../componentes/Header'
import { Sidebar } from '../componentes/Sidebar'

import './global.css'
import styles from './App.module.css'


//id: number
//author: {
//name: string
//role: string
//imageURL: string
//} 
//content:{
// paragraph: string
// link: string
// hashtags: string
//}
//publishAt: string
//
// }

const posts = [
  {
    id: 1,
    author: {
      name: "Wanderson Nascimento",
      role: "Web developer",
      imageURL: "http://github.com/wanderson-nascimento.png"
    },
    content: {
      paragraph: "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉",
      link: "jane.design/doctorcare",
      hashtags: "#novoprojeto #nlw #rocketseat"
    },
    publishAt: '2023-07-23 08:24:11',
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "CTO @RocketSeat",
      imageURL: "http://github.com/diego3g.png"
    },
    content: {
      paragraph: "Fala pessoal 👋 Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      link: "jane.design/doctorcare",
      hashtags: "#uiux userexperience"
    },
    publishAt: '2023-07-24 08:24:11',
  }
]



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
