document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = document.createElement('li');
        task.textContent = input.value;
        task.addEventListener('click', () => list.removeChild(task));
        list.appendChild(task);
        input.value = '';
    });
});
