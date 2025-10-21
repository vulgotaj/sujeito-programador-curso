import { useState, useEffect } from 'react';
import { db, auth } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

import './App.css';

function App() {
   const [titulo, setTitulo] = useState('');
   const [autor, setAutor] = useState('');
   const [idPost, setIdPost] = useState('');

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   const [user, setUser] = useState(false);
   const [userDetail, setUserDetail] = useState({});

   const [posts, setPosts] = useState([]);

   useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })

        setPosts(listaPost);
      })
    }

    loadPosts()
   }, [])

   useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: user.email
          })
        } else {
          setUser(false);
          setUserDetail({});
        }
      })
    }

    checkLogin();
   }, [])

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

  async function editarPost() {
    const docRef = doc(db, "posts", idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("POST ATUALIZADO");
      setIdPost('');
      setTitulo('');
      setAutor('');
      buscarPost();
    })
    .catch(() => {
      console.log("ERRO")
    })
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef)
    .then(() => {
      buscarPost();
    })
    .catch(() => {
      console.log("DEU RUIM!");
    })
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      console.log(value);
      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      if(error.code === "auth/weak-password"){
        alert("Senha fraca")
      } else if (error.code === 'auth/email-already-in-use') {
        alert("Email já existe");
      }
    })
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      console.log("USER LOGADO");

      setUserDetail({
        uid: value.user.uid,
        email: value.user.email,
      })
      setUser(true);

      setEmail('');
      setSenha('');
    })
    .catch(() => {

    })
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail({});
  }

  return (
    <div>
      <h1> ReactJS mais Firebase </h1>

      { user && (
        <div>
          <strong>Seja bem vindo(a), você está logado!</strong><br/>
          <span>ID: {userDetail.uid} - Email: {userDetail.email}</span>
          <button onClick={fazerLogout}>Sair da conta</button>
          <br/> <br/>
        </div>
      )}

      <div class="container">
        <h2>Usuários</h2>

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite um email..."/><br/>
        <label>Senha</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite uma senha..."/><br/>

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Fazer Login</button>
      </div>

      <br/><br/>
      <hr/>

      <div class="container">
        <h2>POSTS</h2>
          
          <label>ID do Post:</label>
          <input placeholder="Digite o ID do post" value={idPost} onChange={(e) => setIdPost(e.target.value)}/>

          <label>Título:</label>
          <textarea type="text" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

          <label>Autor:</label>
          <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}/>

          <button onClick={handleAdd}>Cadastrar</button>
          <button onClick={buscarPost}>Buscar</button>

          <button onClick={editarPost}>Atualizar Post</button>

          <ul>
            {posts.map((post) => {
              return(
                <li key={post.id}>
                  <strong>ID: {post.id}</strong> <br/>
                  <span>Titulo: {post.titulo}</span> <br/>
                  <span>Autor: {post.autor}</span> <br/> 

                  <button onClick={ () => excluirPost(post.id)}>Excluir</button> <br/> <br/>
                </li>
              )
            })}
          </ul>

      </div>
    </div>
  );
}

export default App;
