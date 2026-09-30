def generate_recommendation(income, expenses, budget):

    if income <= 0 and expenses <= 0:
        return "Add your income and expenses to receive recommendations."

    if budget <= 0:
        return "Please set a monthly budget."

    percentage = (expenses / budget) * 100

    if percentage >= 100:
        return "Your expenses have exceeded your monthly budget."

    elif percentage >= 80:
        return "You have used more than 80% of your budget. Monitor your spending carefully."

    elif percentage >= 50:
        return "You have used more than half of your budget. Continue monitoring your spending."

    else:
        return "Your spending is within your budget. Keep tracking your expenses."


if __name__ == "__main__":

    income = 20000
    expenses = 8000
    budget = 10000

    recommendation = generate_recommendation(
        income,
        expenses,
        budget
    )

    print(recommendation)