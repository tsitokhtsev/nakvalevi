const typeMap = {
    period: 'border-yellow bg-yellow',
    genre: 'border-green bg-green',
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
            className={`rounded-full border border-solid bg-opacity-50 px-2 py-1 text-xs text-black ${typeMap[type]}`}
        >
            {text}
        </span>
    );
}
