'use strict';

function uploadImage(file, containerNode, imgNode) {
    // start the spinner class
    containerNode.classList.toggle("spinner");
    let request = new XMLHttpRequest();
    request.open("POST", "/infer");
    request.onload = function(event) {
        if (request.readyState === 4 && request.status === 200 ) {
            let resultText = request.responseText.includes("alien") ? "ITS AN " : "ITS A ";
            let result = createResultNode();
            result.innerText = resultText + request.responseText;
            // turn off spinner
            containerNode.classList.toggle("spinner");
            addNodes(containerNode, imgNode, result);
        }
    }
    request.send(file);
}

function emptyContainer(containerNode) {
    while(containerNode.firstElementChild){
        containerNode.removeChild(containerNode.firstElementChild);
    }
}
function addNodes(containerNode, imgNode, resultNode){
    emptyContainer(containerNode);
    containerNode.appendChild(imgNode);
    containerNode.appendChild(resultNode);
    
}

function createImageNode(){
    let imgNode = document.createElement('img');
    imgNode.className = "header-23__img";
    imgNode.id = "image";
    return imgNode;
}

function createResultNode(){
    let resultNode =  document.createElement('div');
    resultNode.id = "result";
    return resultNode;
}


window.addEventListener('load', (event) => {
    const input = document.getElementById('input');
    const tryButton = document.getElementById('tryButton');
    let container = document.getElementById("imageContainer");
    input.onchange = function () {
        emptyContainer(container);
        let reader = new FileReader();
        let imgNode = createImageNode();
        reader.onload = function (event) {
            imgNode.src = event.target.result;
        };
        let imageData = this.files[0];
        uploadImage(imageData, container, imgNode);
        reader.readAsDataURL(imageData);

    };
    tryButton.addEventListener('click', (event) => {
        input.click();
    });

});