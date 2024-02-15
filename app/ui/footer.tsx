export default function Footer() {
    return (
        <footer className="w-full">
            <div className="container flex items-center justify-center py-4">
                <span className="text-green-darker">
                    ნაკვალევი {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}
