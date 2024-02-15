import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';

import { mersad } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className={`${mersad.className} bg-background`}>
                <Header />
                <main className="my-12">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
