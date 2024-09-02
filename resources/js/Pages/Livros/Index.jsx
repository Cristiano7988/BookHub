import Carrossel from '@/Components/Carrossel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livros</h2>}
        >
            <Head title="Livros" />

            <div className="py-12">
                <Carrossel />
            </div>
        </AuthenticatedLayout>
    );
}
