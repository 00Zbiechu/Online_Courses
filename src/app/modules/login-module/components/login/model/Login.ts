export class Login {
    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }

    get getUsername(): string {
        return this.username;
    }

    set setUsername(username: string) {
        this.username = username;
    }

    get getPassword(): string {
        return this.password;
    }

    set setPassword(password: string) {
        this.password = password;
    }


}