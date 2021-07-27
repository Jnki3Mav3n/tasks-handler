// ----- Model -----

let toDos = [{
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

/*
updateDisplay();
function updateDisplay() {
    divCount.innerHTML = count;
}

function minusCnt() {     
    count--;
    updateDisplay();
};
*/

toDos.push({id: '004',title: 'Eat', todate: '2021-11-22'});

addToDos();

// Create ToDO

function createToDo(taskTitle, dueDate) {            
    const id = '' + new Date().getTime();

    toDos.push({
        id: id,
        title: taskTitle,
        todate: dueDate
    });
};

// Remove ToDo

function remToDo(delBttnId) {
    toDos = toDos.filter(function (toDo) {
        if(toDo.id === delBttnId) {
            return false;
        } else {
            return true;
        }
    });
}

// ----- View -----

function addToDos() {
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
};

// ----- Controller -----

function plusToDo() {            
    const taskTitle = document.getElementById('toDo-title').value;
    const dueDate = document.getElementById('date-pick').value;
    
    createToDo(taskTitle, dueDate);

    addToDos();
};

function delToDo(e) {
    const delBttn = e.target;
    const delBttnId = delBttn.id;

    remToDo(delBttnId);
    addToDos();
};

addToDos();