'use client';

import { Writing } from '@/app/lib/definitions';
import Search from '@/app/ui/search';
import WritingCard from '@/app/ui/writing-card';

export default function WritingsList({ writings }: { writings: Writing[] }) {
    return (
        <div>
            {/* <Search /> */}
            <div className="flex flex-col gap-8">
                {writings.length ? (
                    writings.map((writing) => (
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
