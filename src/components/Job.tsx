import styled from 'styled-components'

import { JobItem } from '../utils/Interfaces';

const JobWrapper = styled.div`
    width: 310px;
    height: 310px;
    margin: 20px;

    position: relative;
`;

const Job = ({ name, company, description, status, contacted, researched }: JobItem) => {
    return (
        <JobWrapper>
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
        </JobWrapper>
    );
}

export default Job;