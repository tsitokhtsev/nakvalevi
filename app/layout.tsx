import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

import '@/app/ui/globals.css';
import { mersad } from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className={`${mersad.className}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
