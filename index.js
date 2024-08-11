import inquirer from "inquirer";
function counter(paragraph) {
    const textWithoutSpaces = paragraph.replace(/\s/g, "");
    return textWithoutSpaces.length;
}
async function startWordCounter(counter) {
    do {
        const response = await inquirer.prompt({
            type: "input",
            message: "Please enter a paragraph:",
            name: "paragraph",
            validate: (input) => input.trim() === "" ? "Input cannot be empty or just spaces!" : true,
        });
        if (response.paragraph.toLowerCase() === "exit") {
            console.log("Exiting the word counter. Goodbye!");
            break;
        }
        const wordCounter = counter(response.paragraph);
        console.log(`Your paragraph contains ${wordCounter} characters (excluding spaces).`);
    } while (true);
}
startWordCounter(counter);
