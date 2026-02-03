import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export function Footer() {
    const { qtdAlunos, novoAluno } = useContext(UserContext);

    return (
        <footer>
            <hr/>
            <h3>FOOTER</h3>
            <h4> Alunos Online: {qtdAlunos}</h4>
            <button onClick={ () => novoAluno() }>
                Adicionar Aluno
            </button>
        </footer>
    )
}