for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if(array[i] === "Edge") {
        console.log("Edge is found at index " + i);

    }
}

//for...of loop

for(let browser of browsers) {
    console.log(browser);
    if(browser === "Edge") {
        console.log("Edge is found");
    }
}
