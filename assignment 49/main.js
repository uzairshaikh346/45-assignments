"use strict";
function loghobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I  enjoye ${hobby}`);
    });
}
loghobbies("cricket", "coding", "reading");
