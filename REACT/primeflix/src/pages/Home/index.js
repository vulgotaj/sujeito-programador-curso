import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=b7562157e726fd357b11ab569dd5b149&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'b7562157e726fd357b11ab569dd5b149',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response);
        }

        loadFilmes();

    }, [])

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home