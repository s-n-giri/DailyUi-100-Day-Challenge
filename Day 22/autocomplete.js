let available = [
    'HTML',
    'CSS',
    'JavaScript',
    'Is Ankur a coder?',
    'Coding is fun',
    'How to become good at web dev?',
    'How to create a responsive web page',
];

const resultBox = document.querySelector(".result");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = available.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML= '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}

