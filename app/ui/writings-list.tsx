'use client';

import { useState } from 'react';

import { Writing } from '@/app/lib/definitions';
import WritingCard from '@/app/ui/writing-card';

export default function WritingsList({ writings }: { writings: Writing[] }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWritings = writings.filter((writing) => {
        return (
            writing.title.includes(searchTerm) ||
            writing?.author?.name.includes(searchTerm)
        );
    });

    return (
        <div>
            <div>
                <label htmlFor="search" className="sr-only">
                    ძიება
                </label>
                <input
                    className="mb-8 w-full rounded-3xl border-2 border-brown px-8 py-4"
                    placeholder="დაიწყე ძიება..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-8">
                {filteredWritings.length ? (
                    filteredWritings.map((writing) => (
                        <WritingCard key={writing.id} writing={writing} />
                    ))
                ) : (
                    <p className="text-black">
                        არცერთი ნაწარმოები არ მოიძებნა...
                    </p>
                )}
            </div>
        </div>
    );
}
