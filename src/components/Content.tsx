interface jobItem {
    name: String;
    description: String;
}

interface jobArray extends Array<jobItem>{}

const dummyData: jobArray = [
    {
        name: 'foo',
        description: 'bar'
    }
]

const Content = () => {
    return (
        <div>
            {dummyData.map(job => <div>{job.name}</div>)}
        </div>
    );
}

export default Content;