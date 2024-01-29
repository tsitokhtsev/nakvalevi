import { getFormattedYear } from '@/app/lib/utils';

export default function Year({ year }: { year: string }) {
    return <span>{getFormattedYear(year)}</span>;
}
