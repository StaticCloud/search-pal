import { JobItem } from '../utils/Interfaces';

const Job = (job: JobItem) => {
    return (
        <div>
            {job.name}
        </div>
    );
}

export default Job;