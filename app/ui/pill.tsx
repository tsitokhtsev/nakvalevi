const typeMap = {
    period: 'border-yellow bg-yellow-light',
    genre: 'border-green bg-green-light',
};

export default function Pill({
    text,
    type,
}: {
    text: string;
    type: 'period' | 'genre';
}) {
    return (
        <span
            className={`rounded-full border border-solid px-2 py-1 text-xs text-black ${typeMap[type]}`}
        >
            {text}
        </span>
    );
}
