import { getFormattedYear } from '@/app/lib/utils';

export default function Year({ year }: { year: string }) {
    return <span className="text-black">{getFormattedYear(year)}</span>;
}
