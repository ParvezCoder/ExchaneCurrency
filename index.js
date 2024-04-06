import inquirer from "inquirer";
let currency = { PAK: 280,
    USD: 1,
    GBP: 0.76,
    EUR: 0.91,
    IND: 74.6 };
let userAnswer = await inquirer.prompt([{
        name: 'from',
        message: "which currency do you have?",
        type: "list",
        choices: ["PAK", "USD", "GBP", "EUR", "IND"]
    },
    { name: "to",
        message: "In which currency you want to convert?????",
        type: "list",
        choices: ["PAK", "USD", "GBP", "EUR", "IND"] },
    { name: "amount",
        message: `How much  you have currency??? `,
        type: "number" }]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let yourAmountIS = baseAmount * toAmount;
console.log(`So finally you have   ${userAnswer.from}  ${amount}  wich is equal to ${userAnswer.to} ${yourAmountIS}`);
