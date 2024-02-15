import { fetchWritings } from '@/app/lib/data';
import Heading from '@/app/ui/heading';
import WritingsList from '@/app/ui/writings-list';

export default async function Page() {
    const writings = await fetchWritings();

    return (
        <div className="container">
            <Heading text="ნაწარმოებები" />
            <WritingsList writings={writings} />
        </div>
    );
}
