import styled from 'styled-components'
import NewJob from './NewJob';
import { JobArray } from '../utils/Interfaces';
import Job from './Job';

const ContentWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const dummyData: JobArray = [
    {
        name: 'foo',
        company: 'stuff',
        description: 'bar',
        status: 'applied',
        contacted: true,
        researched: true
    },
    {
        name: 'foo',
        company: 'valve',
        description: 'bar',
        status: 'rejected',
        contacted: true,
        researched: true
    }
]

const Content = () => {
    return (
        <ContentWrapper>
            <NewJob></NewJob>
            {dummyData.map(job => <Job {...job}/>)}
        </ContentWrapper>
    );
}

export default Content;