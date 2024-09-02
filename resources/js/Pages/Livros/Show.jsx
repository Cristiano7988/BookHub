import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Show ({ auth, id }) {
    const [livro, setLivro] = useState(null);

    useEffect(() => {
        fetch(`https://potterapi-fedeperin.vercel.app/pt/books?index=${id}`)
            .then(r => r.json())
            .then(r => {
                if (r.error) return;
                setLivro(r)
            })
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{livro?.title ?? "Livro"}</h2>}
        >
            <Head title={livro?.title ?? "Livro"} />

            <div className="py-12">
                <div className='info'>
                    {livro
                        ? <>
                            <img src={livro.cover} />
                            <div className='info__detalhes'>
                                <b className='text-lg'>{livro.title}</b>
                                <br />
                                <i className='text-sm'>({livro.originalTitle})</i>
                                <br />
                                <br />
                                <p>{livro.description}</p>
                                <br />
                                <p><b>Data de lançamento: </b>{livro.releaseDate}</p>
                                <p><b>Páginas: </b>{livro.pages}</p>
                            </div>
                        </>
                        : "Livro não encontrado"}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}