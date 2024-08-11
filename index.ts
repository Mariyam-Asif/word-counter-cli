import inquirer from "inquirer";

function counter(paragraph: string): number {
  const textWithoutSpaces = paragraph.replace(/\s/g, "");
  return textWithoutSpaces.length;
};

interface PromptResponse {
  paragraph: string;
};

async function startWordCounter(
  counter: (paragraph: string) => number
): Promise<void> {
  do {
    const response: PromptResponse = await inquirer.prompt({
      type: "input",
      message: "Please enter a paragraph:",
      name: "paragraph",
      validate: (input: string) =>
        input.trim() === "" ? "Input cannot be empty or just spaces!" : true,
    });

    if (response.paragraph.toLowerCase() === "exit") {
      console.log("Exiting the word counter. Goodbye!");
      break;
    }

    const wordCounter = counter(response.paragraph);
    console.log(
      `Your paragraph contains ${wordCounter} characters (excluding spaces).`
    );
  } while (true);
}

startWordCounter(counter);
