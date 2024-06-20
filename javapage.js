document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Adding event listener to the add task button
    addTaskButton.addEventListener('click', () => addTask());

    // function
    const addTask = () => {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (e) => {
            taskItem.classList.toggle('completed', e.target.checked);
        });

        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => taskItem.remove());

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    };
});
