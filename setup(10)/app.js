document.addEventListener('DOMContentLoaded', () => {
    const alert = document.querySelector('.alert');
    const groceryForm = document.querySelector('.grocery-form');
    const groceryInput = document.getElementById('grocery');
    const submitBtn = document.querySelector('.submit-btn');
    const groceryContainer = document.querySelector('.grocery-container');
    const groceryList = document.querySelector('.grocery-list');
    const clearBtn = document.querySelector('.clear-btn');
  
    let editElement;
    let editFlag = false;
    let editID = '';
  
    // ****** EVENT LISTENERS **********
    groceryForm.addEventListener('submit', addItem);
    clearBtn.addEventListener('click', clearItems);
    window.addEventListener('DOMContentLoaded', setupItems);
  
    // ****** FUNCTIONS **********
    function addItem(e) {
      e.preventDefault();
      const value = groceryInput.value;
      const id = new Date().getTime().toString();
  
      if (value && !editFlag) {
        createListItem(id, value);
        displayAlert('Додано до списку', 'alert-success');
        groceryContainer.classList.add('show-container');
        addToLocalStorage(id, value);
        setBackToDefault();
      } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('Значення змінено', 'alert-success');
        editLocalStorage(editID, value);
        setBackToDefault();
      } else {
        displayAlert('Будь ласка, введіть значення', 'alert-danger');
      }
    }
  
    function displayAlert(text, action) {
      alert.textContent = text;
      alert.classList.add(action);
      setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(action);
      }, 2000);
    }
  
    function clearItems() {
      const items = document.querySelectorAll('.grocery-item');
      if (items.length > 0) {
        items.forEach(item => {
          groceryList.removeChild(item);
        });
      }
      groceryContainer.classList.remove('show-container');
      displayAlert('Список очищено', 'alert-danger');
      setBackToDefault();
      localStorage.removeItem('list');
    }
  
    function deleteItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      const id = element.dataset.id;
      groceryList.removeChild(element);
      if (groceryList.children.length === 0) {
        groceryContainer.classList.remove('show-container');
      }
      displayAlert('Елемент видалено', 'alert-danger');
      setBackToDefault();
      removeFromLocalStorage(id);
    }
  
    function editItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      editElement = e.currentTarget.parentElement.previousElementSibling;
      groceryInput.value = editElement.innerHTML;
      editFlag = true;
      editID = element.dataset.id;
      submitBtn.textContent = 'Редагувати';
    }
  
    function setBackToDefault() {
      groceryInput.value = '';
      editFlag = false;
      editID = '';
      submitBtn.textContent = 'Додати';
    }
  
    // ****** LOCAL STORAGE **********
    function addToLocalStorage(id, value) {
      const grocery = { id, value };
      let items = getLocalStorage();
      items.push(grocery);
      localStorage.setItem('list', JSON.stringify(items));
    }
  
    function removeFromLocalStorage(id) {
      let items = getLocalStorage();
      items = items.filter(item => item.id !== id);
      localStorage.setItem('list', JSON.stringify(items));
    }
  
    function editLocalStorage(id, value) {
      let items = getLocalStorage();
      items = items.map(item => {
        if (item.id === id) {
          item.value = value;
        }
        return item;
      });
      localStorage.setItem('list', JSON.stringify(items));
    }
  
    function getLocalStorage() {
      return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    }
  
    // ****** SETUP ITEMS **********
    function setupItems() {
      let items = getLocalStorage();
      if (items.length > 0) {
        items.forEach(item => {
          createListItem(item.id, item.value);
        });
        groceryContainer.classList.add('show-container');
      }
    }
  
    function createListItem(id, value) {
      const element = document.createElement('article');
      element.classList.add('grocery-item');
      const attr = document.createAttribute('data-id');
      attr.value = id;
      element.setAttributeNode(attr);
      element.innerHTML = `
        <p class='title'>${value}</p>
        <div class='btn-container'>
          <button type='button' class='edit-btn'>
            <i class='fas fa-edit'></i>
          </button>
          <button type='button' class='delete-btn'>
            <i class='fas fa-trash'></i>
          </button>
        </div>
      `;
      const deleteBtn = element.querySelector('.delete-btn');
      const editBtn = element.querySelector('.edit-btn');
  
      deleteBtn.addEventListener('click', deleteItem);
      editBtn.addEventListener('click', editItem);
  
      groceryList.appendChild(element);
    }
  });
  