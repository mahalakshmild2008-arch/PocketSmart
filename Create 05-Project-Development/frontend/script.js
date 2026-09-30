let totalIncome = 0;
let totalExpense = 0;
let monthlyBudget = 0;

let transactions = [];


// ADD INCOME

document.getElementById("incomeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = Number(
        document.getElementById("incomeAmount").value
    );

    const source =
        document.getElementById("incomeSource").value;

    if (amount <= 0) {
        alert("Please enter a valid income amount.");
        return;
    }

    totalIncome += amount;

    transactions.push({
        type: "Income",
        category: source,
        description: "Income",
        amount: amount
    });

    this.reset();

    updateDashboard();
    updateTransactions();
    generateRecommendation();

});


// ADD EXPENSE

document.getElementById("expenseForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = Number(
        document.getElementById("expenseAmount").value
    );

    const category =
        document.getElementById("expenseCategory").value;

    const description =
        document.getElementById("expenseDescription").value;

    if (amount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    totalExpense += amount;

    transactions.push({
        type: "Expense",
        category: category,
        description: description || "Expense",
        amount: amount
    });

    this.reset();

    updateDashboard();
    updateTransactions();
    generateRecommendation();

});


// SET BUDGET

document.getElementById("budgetForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const budget =
        Number(document.getElementById("budgetAmount").value);

    if (budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    monthlyBudget = budget;

    this.reset();

    updateDashboard();
    generateRecommendation();

    alert("Monthly budget set successfully!");

});


// UPDATE DASHBOARD

function updateDashboard() {

    const balance = totalIncome - totalExpense;

    document.getElementById("totalIncome").textContent =
        formatCurrency(totalIncome);

    document.getElementById("totalExpense").textContent =
        formatCurrency(totalExpense);

    document.getElementById("remainingBalance").textContent =
        formatCurrency(balance);

    document.getElementById("monthlyBudget").textContent =
        formatCurrency(monthlyBudget);
}


// UPDATE TRANSACTIONS

function updateTransactions() {

    const table =
        document.getElementById("transactionTable");

    table.innerHTML = "";

    if (transactions.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="4">No transactions yet</td>
            </tr>
        `;

        return;
    }

    transactions.forEach(function(transaction) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.type}</td>
            <td>${transaction.category}</td>
            <td>${transaction.description}</td>
            <td>${formatCurrency(transaction.amount)}</td>
        `;

        table.appendChild(row);

    });
}


// AI RECOMMENDATION

function generateRecommendation() {

    const recommendation =
        document.getElementById("aiRecommendation");

    if (totalIncome === 0 && totalExpense === 0) {

        recommendation.textContent =
            "Add income, expenses and a budget to receive a recommendation.";

        return;
    }

    if (monthlyBudget === 0) {

        recommendation.textContent =
            "Set a monthly budget to receive a spending recommendation.";

        return;
    }

    const percentage =
        (totalExpense / monthlyBudget) * 100;

    if (percentage >= 100) {

        recommendation.textContent =
            "Your expenses have exceeded your monthly budget.";

    } else if (percentage >= 80) {

        recommendation.textContent =
            "You have used more than 80% of your budget. Monitor your spending carefully.";

    } else if (percentage >= 50) {

        recommendation.textContent =
            "You have used more than half of your budget. Continue monitoring your spending.";

    } else {

        recommendation.textContent =
            "Your spending is within your budget. Keep tracking your expenses.";

    }
}


// CURRENCY FORMAT

function formatCurrency(amount) {

    return "₹" + amount.toLocaleString("en-IN");

}


// INITIALIZE

updateDashboard();
updateTransactions();
generateRecommendation();