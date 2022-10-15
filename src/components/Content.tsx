import styled from 'styled-components'
import NewJob from './NewJob';
import Job from './Job';

const ContentWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`;

interface JobItem {
    name: String;
    company: String;
    description: String;
    status: 'applied' | 'interviewing' | 'rejected';
    contacted: boolean;
    researched: boolean;
}

interface JobArray extends Array<JobItem>{}

const dummyData: JobArray = [
    {
        name: 'foo',
        company: 'stuff',
        description: 'bar',
        status: 'applied',
        contacted: false,
        researched: false
    },
    {
        name: 'foo',
        company: 'valve',
        description: 'bar',
        status: 'rejected',
        contacted: false,
        researched: false
    }
]

const Content = () => {
    return (
        <ContentWrapper>
            <NewJob></NewJob>
            {dummyData.map(job => <h1>job</h1>)}
        </ContentWrapper>
    );
}

export default Content;