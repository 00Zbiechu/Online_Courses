export class Register {
    username: string;
    email: string;
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

    get getEmail(): string {
        return this.email;
    }

    set setEmail(email: string) {
        this.email = email;
    }

    get getPassword(): string {
        return this.password;
    }

    set setPassword(password: string) {
        this.password = password;
    }


}