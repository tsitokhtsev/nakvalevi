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
            <div className="my-8 rounded-2xl bg-brown-lighter p-4 md:rounded-3xl md:p-8">
                <label htmlFor="search" className="sr-only">
                    ძიება
                </label>
                <input
                    className="w-full rounded-2xl border border-none bg-background px-8 py-4 text-black outline-none duration-300 placeholder:text-green-dark focus:border-brown"
                    placeholder="დაიწყე ძიება..."
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
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
