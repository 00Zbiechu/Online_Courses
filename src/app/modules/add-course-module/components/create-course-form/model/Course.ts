export class Course {
    title: string;
    startDate: string;
    endDate: string;
    topic: string;
    password: string;
    description: string;
    image: string;
    username: string;

    constructor() {
        this.title = "";
        this.startDate = "";
        this.endDate = "";
        this.topic = "";
        this.password = "";
        this.description = "";
        this.image = "";
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

    get getPassword(): string {
        return this.password;
    }

    set setPassword(password: string) {
        this.password = password;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(description: string) {
        this.description = description;
    }

    get getImage(): string {
        return this.image;
    }

    set setImage(image: string) {
        this.image = image;
    }

    get getUsername(): string {
        return this.username;
    }

    set setUsername(username: string) {
        this.username = username;
    }
}
