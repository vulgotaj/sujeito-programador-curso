import { Header } from './components/header';
import { Aluno } from './components/aluno';
import { Footer } from './components/footer'

export default function App (){
  return(
    <div>
      <Header title="Paçoca"/>
      <Aluno nome="Felipe Tajima" idade={20} />
      <Aluno nome="Beatriz Busson" idade={21}/>
      <Aluno nome="Felipe Brito" idade={22}/>
      <Footer/>
    </div>


  )
}



