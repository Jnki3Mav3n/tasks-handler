let count = 0;
const divCount = document.getElementById('cntrDiv');
const toDos = [{
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

function plusCnt() {            
    const id = new Date().getTime();
    const taskTitle = document.getElementById('toDo-title').value;
    const dueDate = document.getElementById('date-pick').value;
    
    toDos.push({
        id: id,
        title: taskTitle,
        todate: dueDate
    });

    addToDos();
};

function delToDo(e) {
    const delBttnId = e.target.id;
    console.log(delBttnId);    
};

function addToDos() {
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