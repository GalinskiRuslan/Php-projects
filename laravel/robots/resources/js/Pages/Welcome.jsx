import Dropdown from "@/Components/Dropdown";
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Robots" />
            {auth.user ? (
                <AuthenticatedLayout></AuthenticatedLayout>
            ) : (
                <GuestLayout></GuestLayout>
            )}
            <section className="first-section">
                <div className="container"></div>
            </section>
        </>
    );
}
