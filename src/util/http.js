import axios from "axios";

export const BACKEND_URL = 'https://expense-tracker-27ce9-default-rtdb.firebaseio.com'

export function storeExpenses(expensesData) {
    let expenesesResponse = axios.post(BACKEND_URL + '/expenses.json',
        expensesData)
    const expense = []
    

}

export function FetchExpenses() {
    Axios.get(BACKEND_URL + '/expenses.json')
}