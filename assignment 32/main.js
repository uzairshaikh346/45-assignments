"use strict";
let current_users = ["uzair346", "ayaz123", "ahmed123", "daniyal123", "amir123"];
let new_users = ["waleed123", "sarib123", "wasiq123", "ayaz123", "amir123"];
for (let user of new_users) {
    for (let c_user of current_users) {
        if (user === c_user) {
            console.log("you need to enter a new username");
        }
        else {
            console.log("The username is available");
        }
    }
}
