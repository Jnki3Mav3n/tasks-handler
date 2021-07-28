
// ----- Model -----

// If localStorage has a toDos array, use it
// Otherwise use default array.
let toDos;

// Retrieve localStorage
const savedToDos = JSON.parse(localStorage.getItem('toDos'));

// Check if it's an array
if(Array.isArray(savedToDos)) {
    toDos = savedToDos;
} else {
    toDos = [{
        id: '001',
        title: 'Work',
        todate: '2021-10-04'
    }, {
        id: '002',
        title: 'Study',
        todate: '2021-10-04'
    }, {
        id: '003',
        title:'Rest',
        todate: '2021-10-04'
    }];
}

// Create ToDO

const createToDo = (taskTitle, dueDate) => {            
    const id = '' + new Date().getTime();

    toDos.push({
        id: id,
        title: taskTitle,
        todate: dueDate
    });

    savToDos();
}

// Remove ToDo

const remToDo = delBttnId => {
    toDos = toDos.filter(function (toDo) {
        // If id of toDos matches delBttnID, return false
        // For everything else, return true
        if(toDo.id === delBttnId) {
            return false;
        } else {
            return true;
        }
    });

    savToDos();
}

// Save ToDos

const savToDos = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


// ----- View -----

const addToDos = () => {
    // Reset List
    document.getElementById('txt1-div').innerHTML = '';
    
    toDos.forEach(toDoTask => {
        const elem1 = document.createElement('div');
        elem1.innerText = toDoTask.title + ' ' + toDoTask.todate;

        const delTask = document.createElement('button');
        delTask.id = toDoTask.id;
        delTask.innerHTML = 'Delete';
        delTask.style = 'margin: 0 0 0 12px';
        delTask.onclick = delToDo;
        elem1.appendChild(delTask);

        document.getElementById('txt1-div').appendChild(elem1);
    })
}


// ----- Controller -----

const plusToDo = () => {            
    const taskTitle = document.getElementById('toDo-title').value;
    const dueDate = document.getElementById('date-pick').value;
    
    createToDo(taskTitle, dueDate);
    addToDos();
}

const delToDo = e => {
    const delBttn = e.target;
    const delBttnId = delBttn.id;

    remToDo(delBttnId);
    addToDos();
}

addToDos();