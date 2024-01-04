function appendToResult(value){
    document.getElementById('result').value += value;
}

function clearResult() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function clearAll() {
    document.getElementById('result').value = '';
}

function calculateResult(){
    try{
        document.getElementById('result').value = eval(document.getElementById('result').value);
    }
    catch(error){
        document.getElementById('result').value = 'Error';
    }
}