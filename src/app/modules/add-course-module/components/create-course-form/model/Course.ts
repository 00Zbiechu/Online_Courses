export class Course {
    title: string;
    startData: string;
    endData: string;
    topic: string;
    password: string;
    description: string;
    image: string;

    constructor() {
        this.title = "";
        this.startData = "";
        this.endData = "";
        this.topic = "";
        this.password = "";
        this.description = "";
        this.image = "";
    }

    get getTitle(): string {
        return this.title;
    }

    set setTitle(title: string) {
        this.title = title;
    }

    get getStartData(): string {
        return this.startData;
    }

    set setStartData(startData: string) {
        this.startData = startData;
    }

    get getEndData(): string {
        return this.endData;
    }

    set setEndData(endData: string) {
        this.endData = endData;
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
}
