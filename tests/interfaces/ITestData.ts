export interface ITestData {
    websites: Website[];
}

export interface Website {
    url:     string;
    stories: Story[];
}

export interface Story {
    name:     string;
    app:      string;
    column:   string;
    tags:     string[];
    username: string;
    password: string;
}
