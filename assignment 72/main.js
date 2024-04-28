"use strict";
// {
//     let blocklet = 'visible only in blockscope';
//     let blockconst = "also only in blockscope";
//     console.log(blocklet);
//     console.log(blockconst);
// }
// try {
//     console.log(blocklet);
// } catch(error) {
//     console.log(`"blocklet" is not accessible outside the blockscope`);
// }
// try {
//     console.log(blockconst);
// } catch(error) {
//     console.log(`"blockconst" is not accessible outside the blockscope`);
// }
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
