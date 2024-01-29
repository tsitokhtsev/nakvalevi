const sizeMap = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
};

export default function Heading({
    text,
    size = 1,
    classes,
}: {
    text: string;
    size?: 1 | 2 | 3;
    classes?: string;
}) {
    const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;

    return (
        <HeadingTag
            className={`font-bold text-green-darker ${sizeMap[size]} ${classes}`}
        >
            {text.toUpperCase()}
        </HeadingTag>
    );
}
