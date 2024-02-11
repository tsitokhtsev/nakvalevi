'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div>
            <label htmlFor="search" className="sr-only">
                ძიება
            </label>
            <input
                className="mb-8 w-full rounded-3xl border-2 border-brown px-8 py-4"
                placeholder="დაიწყე ძიება..."
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}
