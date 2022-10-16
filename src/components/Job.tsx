import { JobItem } from '../utils/Interfaces';

const Job = ({ name, company, description, status, contacted, researched }: JobItem) => {
    return (
        <div>
            {name}
        </div>
    );
}

export default Job;