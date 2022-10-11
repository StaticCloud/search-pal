import styled from 'styled-components'
import Job from './Job';

const ContentWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`;

interface JobItem {
    name: String;
    description: String;
}

interface JobArray extends Array<JobItem>{}

const dummyData: JobArray = [
    {
        name: 'foo',
        description: 'bar'
    },
    {
        name: 'foo',
        description: 'bar'
    }
]

const Content = () => {
    return (
        <ContentWrapper>
            {dummyData.map(job => <Job></Job>)}
        </ContentWrapper>
    );
}

export default Content;