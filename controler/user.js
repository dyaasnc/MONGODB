import User from "../model/user.js";

export const createUser = (req, res, next) => {
    const userInfo = {
        name: "dyaa",
        email: "dyaa@gmail.com",
        age: 24,
        password: "12345678"
    }
    const user = new User(userInfo);
    user.save()
        .then(() => {
            console.log("user created successfuly");
        })
        .catch(() => {
            console.log("something went wrong");
        });
};