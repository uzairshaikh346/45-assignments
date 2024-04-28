function logObjectProperties(obj: object) {
    for (const property in obj){
        console.log(`${property}: ${(obj as any)[property]}`);
        }
}

logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
