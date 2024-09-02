
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function Carrossel() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [fimDaLista, setFimDaLista] = useState(false);
    const [page, setPage] = useState(1);
    const larguraMaximaDoLivro = 200
    const max = Math.floor(window.innerWidth / larguraMaximaDoLivro);

    const handlePrevious = () => {
        const novaPagina = page - 1;
        setPage(novaPagina >= 1 ? novaPagina : 1);
    };
    const handleNext = () => setPage(fimDaLista ? page : page + 1);

    useEffect(() => {
        fetch(`https://potterapi-fedeperin.vercel.app/pt/books?max=${max}&page=${page}`)
            .then(r => r.json())
            .then(r => {
                setLivros(r)
                if (r.length) setFimDaLista(false);
                else setFimDaLista(true);

            })
            .catch(() => setCarregando(false))
    }, [page]);
    
    useEffect(() => {
        if (!livros.length) return;

        setCarregando(false);
    }, [livros]);
   
    return <div className="card">
        {page > 1 && <NavigateBefore className='card__navigate card__navigate--before' fontSize='large' onClick={handlePrevious}/>}
        {!fimDaLista && <NavigateNext className='card__navigate card__navigate--next' fontSize='large' onClick={handleNext} />}

        {carregando
            ? "Carregando..."
            : livros.length
                ? livros.map(livro => <a href={`/livros/${livro.index}`} className='livro' key={livro.index}>
                    <img src={livro.cover} />
                    {livro.title}
                </a>)
                : "Nenhum livro encontrado"}
    </div>
}