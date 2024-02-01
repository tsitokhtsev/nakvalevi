'use client';

import Image from 'next/image';
import Link from 'next/link';

const links = [
    { name: 'მთავარი', href: '/' },
    { name: 'ნაწარმოებები', href: '/writings' },
    { name: 'ჩვენ შესახებ', href: '/about' },
];

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white">
            <div className="container flex items-center justify-between py-4">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="ნაკვალევის ლოგო"
                        width={48}
                        height={48}
                    />
                </Link>
                <nav className="flex gap-8">
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-green-darker"
                            >
                                {link.name.toUpperCase()}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
