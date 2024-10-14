const transactions = [
    { date: '2022-01-01', amount: 100 },
    { date: '2022-02-01', amount: 200 },
    { date: '2022-03-01', amount: 300 },
    { date: '2022-04-01', amount: 400 },
];

// Filter transactions in the year 2022
const yearlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith('2022');
});

console.log(yearlyTransactions);