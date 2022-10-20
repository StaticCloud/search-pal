import { JobItem } from '../utils/Interfaces';

const Job = ({ name, company, description, status, contacted, researched }: JobItem) => {
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h3>{company}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <ul>
                    <li>{status}</li>
                    <li>{contacted.toString()}</li>
                    <li>{researched.toString()}</li>
                </ul>
            </div>
        </div>
    );
}

export default Job;