let budget = 0;
let expenses = [];
let totalExpenses = 0;

const  totamount= document.getElementById('total-amount');
const  totamountbtn= document.getElementById('total-amount-button');
const p_title = document.getElementById('product-title');
const useramount = document.getElementById('user-amount');
const c_btn = document.getElementById('check-amount');
const amounts = document.getElementById('amount');
const p_values = document.getElementById('expenditure-value');
const balance = document.getElementById('balance-amount');
const list = document.getElementById('list');


function editdata() {
  amounts.textContent = budget;
  p_values.textContent = totalExpenses;
  balance.textContent = budget - totalExpenses;
}


function budgets() {
  const amount = parseFloat(totamount.value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById('budget-error').classList.remove('hide');
    return;
  }
  budget = amount;
  totamount.value = '';
  document.getElementById('budget-error').classList.add('hide');
  editdata();
}


function amountvalue() {
  const title = p_title.value;
  const amount = parseFloat(useramount.value);
  if (title.trim() === '' || isNaN(amount) || amount <= 0) {
    document.getElementById('product-title-error').classList.remove('hide');
    return;
  }
  expenses.push({ title, amount });
  totalExpenses += amount;
  p_title.value = '';
  useramount.value = '';
  document.getElementById('product-title-error').classList.add('hide');
  editdata();
  readdata();
}


function readdata() {
  list.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.innerHTML = `
      <span>${expense.title}</span>
      <span>$${expense.amount}</span>
      <button class="delete-item" onclick="deletedata(${index})">
        <i class="fas fa-trash"></i>
      </button>
    `;
    list.appendChild(listItem);
  });
}


function deletedata(index) {
  totalExpenses -= expenses[index].amount;
  expenses.splice(index, 1);
  editdata();
  readdata();
}


totamountbtn.addEventListener('click', budgets);
c_btn.addEventListener('click', amountvalue );


editdata();
readdata();


  
  