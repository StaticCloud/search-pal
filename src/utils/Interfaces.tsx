export interface JobItem {
    name: String;
    company: String;
    description: String;
    status: 'applied' | 'interviewing' | 'rejected';
    contacted: boolean;
    researched: boolean;
}

export interface JobArray extends Array<JobItem>{}