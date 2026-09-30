# Phase 6 – Project Testing

## Project Name
PocketSmart AI – Your Smart Budget & Recommendation Assistant

## Objective

The objective of testing is to verify that all major features of PocketSmart AI work correctly.

## Test Cases

| Test ID | Feature | Test Input | Expected Result |
|---|---|---|---|
| TC01 | Add Income | ₹20,000 | Income should display ₹20,000 |
| TC02 | Add Expense | ₹2,000 | Expense should display ₹2,000 |
| TC03 | Balance Calculation | Income ₹20,000, Expense ₹2,000 | Balance should display ₹18,000 |
| TC04 | Set Budget | ₹10,000 | Monthly budget should display ₹10,000 |
| TC05 | Add Food Expense | ₹1,000 | Food transaction should appear |
| TC06 | Add Shopping Expense | ₹2,000 | Shopping transaction should appear |
| TC07 | Recommendation | Expense below budget | Recommendation should appear |
| TC08 | Budget Warning | Expense above 80% | Warning should appear |
| TC09 | Invalid Income | ₹0 | Error message should appear |
| TC10 | Invalid Expense | ₹0 | Error message should appear |

## Testing Areas

- Income Management
- Expense Management
- Budget Management
- Balance Calculation
- Transaction Tracking
- AI Recommendation
- Input Validation