import { Genre } from '@/app/lib/definitions';
import Pill from '@/app/ui/pill';

const periods = ['ძველი', 'ახალი', 'უახლესი'];

export default function WritingPills({
    period,
    genres,
    classes,
}: {
    period: number;
    genres: Genre[];
    classes?: string;
}) {
    return (
        <div className={`flex flex-wrap gap-2 ${classes}`}>
            <Pill text={periods[period]} type="period" />
            {genres.map((genre) => (
                <Pill key={genre.id} text={genre.name} type="genre" />
            ))}
        </div>
    );
}
