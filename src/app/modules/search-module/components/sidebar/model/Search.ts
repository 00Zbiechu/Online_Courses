export class Search {
    title: string;
    startDate: string;
    endDate: string;
    topic: string;
    username: string;


    constructor() {
        this.title = "";
        this.startDate = "";
        this.endDate = "";
        this.topic = "";
        this.username = "";
    }

    get getTitle(): string {
        return this.title;
    }

    set setTitle(title: string) {
        this.title = title;
    }

    get getStartDate(): string {
        return this.startDate;
    }

    set setStartDate(startDate: string) {
        this.startDate = startDate;
    }

    get getEndDate(): string {
        return this.endDate;
    }

    set setEndDate(endDate: string) {
        this.endDate = endDate;
    }

    get getTopic(): string {
        return this.topic;
    }

    set setTopic(topic: string) {
        this.topic = topic;
    }

    get getUsername(): string {
        return this.username;
    }

    set setUsername(username: string) {
        this.username = username;
    }
}

