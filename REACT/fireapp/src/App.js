import { useState } from 'react';
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';
import './App.css';

function App() {
   const [titulo, setTitulo] = useState('');
   const [autor, setAutor] = useState('');

   const [posts, setPosts] = useState([]);

  async function handleAdd() {
  //   await setDoc(doc(db, "posts", "12345"), {
  //     titulo: titulo,
  //     autor: autor,
  //   })
  //   .then(() => {

  //   })
  //   .catch((error) =>{
  //     console.log("GEROU ERRO")
  //   })
  await addDoc(collection(db, "posts"), {
    titulo: titulo,
    autor: autor,
  })
  }

  async function buscarPost() {
    // const postRef = doc(db, "posts", "12345")

    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })

    const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista);

    })
    .catch(() => {
      console.log('DEU ERRO AO BUSCAR');
    })
  }

  return (
    <div>
      <h1> ReactJS mais Firebase </h1>

      <div>
          
          <label>Título:</label>
          <textarea type="text" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

          <label>Autor:</label>
          <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}/>

          <button onClick={handleAdd}>Cadastrar</button>
          <button onClick={buscarPost}>Buscar</button>

          <ul>
            {posts.map((post) => {
              return(
                <li key={post.id}>
                  <span>Titulo: {post.titulo}</span> <br/>
                  <span>Autor: {post.autor}</span> <br/> <br/>
                </li>
              )
            })}
          </ul>

      </div>
    </div>
  );
}

export default App;
