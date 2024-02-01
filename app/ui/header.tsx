'use client';

import Link from 'next/link';
import Image from 'next/image';

const links = [
    { name: 'მთავარი', href: '/' },
    { name: 'ნაწარმოებები', href: '/writings' },
    { name: 'ჩვენ შესახებ', href: '/about' },
];

export default function Header() {
    return (
        <header className="flex justify-between items-center mx-auto p-4 max-w-screen-xl">
            <Link href="/">
                <Image
                    src="/images/logo.svg"
                    alt="ნაკვალევის ლოგო"
                    width={48}
                    height={48}
                />
            </Link>
            <nav className="flex gap-6">
                {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href}>
                            {link.name.toUpperCase()}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}