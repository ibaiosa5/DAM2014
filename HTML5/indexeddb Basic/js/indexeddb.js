$(function(){

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
                    window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" };
    window.IDBKeyRange = window.IDBKeyRange ||
                    window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;

    function onerror(e) {
        console.log(e);
    }

    function open () {
        var version = 10;
        var request = indexedDB.open("todo-list", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;

            if(db.objectStoreNames.contains('todo-list')) db.deleteObjectStore('todo-list');

            var store = db.createObjectStore("todo-list",
                        { keyPath: "timeStamp" });
            store.createIndex('completado', 'completado', { unique: false });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
        };
    }

    function add (todoText) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": todoText,
            "completado": 'No',
            "timeStamp": new Date().getTime()
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
            getAllTodoItems();
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    }

    var getAllTodoItems = function () {
        var todos = document.getElementById("todoItems");
        todos.innerHTML = "";

        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(!!result == false) return;

            var lista = [];
            lista.push('<li> Code: '+result.value.timeStamp+' Todo: '+ result.value.text + ' Completed: '+result.value.completado+'</li>');
            $('#todoItems').append(lista);
            result.continue();
        };

        cursorRequest.onerror = onerror;
    };

    var addTodo =function () {
        var todo = document.getElementById("todo");
        add(todo.value);
        todo.value = "";

    };

    var updateTask = function(){
        var transaction = db.transaction(['todo-list'], 'readwrite');
        var store = transaction.objectStore('todo-list');
        var cursorRequest = store.openCursor();
        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(!!result == false) {return;}


            if(result.value.timeStamp==parseInt($('#tagcode')[0].value)){
                var data = {
                    "text": result.value.text,
                    "completado": 'Yes',
                    "timeStamp": result.value.timeStamp
                };

                var request = store.put(data);

                request.onsuccess = function(e) {
                    console.log("Sucessful update: "+e);
                    $('#tagcode')[0].value='';
                    getAllTodoItems();
                };

                request.onerror = function(e) {
                    console.log("Error updating: ", e);
                };
            }
            result.continue();
        };
    };

    var removeTask =function(){
        var transaction = db.transaction(['todo-list'], 'readwrite');
        var store = transaction.objectStore('todo-list');
        var request = store.delete(parseInt($('#tagcode')[0].value));
        request.onsuccess = function(e) {
            console.log("Sucessful remove: "+e);
            getAllTodoItems();
            $('#tagcode')[0].value='';
        };
        request.onerror = function(e) {
            console.log("Error removing: ", e);
        };
    };


    open();
    $(document).on('click','#addtodo',addTodo);
    $(document).on('click','#show',getAllTodoItems);
    $(document).on('click','#remove',removeTask);
    $(document).on('click','#update',updateTask);

});
