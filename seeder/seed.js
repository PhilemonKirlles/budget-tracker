
let mongoose = require("mongoose");
let db = require("../models");

let budgetSeed = [
    {
        name: 'Paycheck',
        category: 'income',
        value: 1500, 
        date: new Date().setDate(new Date().getDate() - 15)
    },
    {
        name: 'Gas',
        category: 'transportation',
        value: -30,
        date: new Date().setDate(new Date().getDate() - 10)
    },
    {
        name: 'Oil bill',
        category: 'utilities',
        value: -50,
        date: new Date().setDate(new Date().getDate() - 8)
    },
    {
        name: 'Electric bill',
        category: 'utilities',
        value: -85,
        date: new Date().setDate(new Date().getDate() - 8)
    },
    {
        name: 'Internet',
        category: 'utilities',
        value: -40,
        date: new Date().setDate(new Date().getDate() - 8)
    },
    {
        name: 'Groceries',
        category: 'food',
        value: -135,
        date: new Date().setDate(new Date().getDate() - 6)
    },
    {
        name: 'Side work',
        category: 'income',
        value: 50,
        date: new Date().setDate(new Date().getDate() - 5)
    },
    {
        name: 'Rent',
        category: 'rent',
        value: -1200,
        date: new Date().setDate(new Date().getDate() - 4)
    },
    {
        name: 'Dining out',
        category: 'food',
        value: -20,
        date: new Date().setDate(new Date().getDate() - 4)
    },
    {
        name: 'Paycheck',
        category: 'income',
        value: 1500,
        date: new Date().setDate(new Date().getDate() - 1)
    }
]

const seed = async () => {
    try {
        await db.Transaction.deleteMany({});
        const data = await db.Transaction.collection.insertMany(budgetSeed);
        console.log(`${data.result.n} records inserted`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1); 
    }
}
       
seed();
