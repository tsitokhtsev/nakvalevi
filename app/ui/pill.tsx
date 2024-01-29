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
            className={`px-2 py-1 text-xs bg-opacity-50 border border-solid rounded-full ${typeMap[type]}`}
        >
            {text}
        </span>
    );
}
