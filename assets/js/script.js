let insertedData = document.getElementById('inputValue');
let submitBtn = document.getElementById('submitBtn');
let listContainer = document.getElementById('listContainer');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(insertedData.value == '') {
        alert('Please insert data!');
    } else {

        let item = document.createElement('div');
        item.setAttribute('class', 'item')
        let serialSpan = document.createElement('span');
        serialSpan.setAttribute('class', 'span');
        

        
        let itemField = document.createElement('input');
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';


        listContainer.appendChild(item);
        item.appendChild(serialSpan);
        item.appendChild(itemField);
        item.appendChild(editBtn);
        item.appendChild(deleteBtn);
       
        let itemLength = document.querySelectorAll('.item').length;
        serialSpan.style.backgroundColor = '#fff';
        serialSpan.style.padding = '2px 5px';
        serialSpan.innerText = itemLength;
        itemField.value = insertedData.value;
        itemField.setAttribute('disabled', '');
        

        editBtn.addEventListener('click', () => {
            if(editBtn.innerText == 'Edit') {
                itemField.removeAttribute('disabled', '');
                editBtn.innerText = 'Save';
                itemField.focus();
            } else {
                itemField.setAttribute('disabled', '');
                editBtn.innerText = 'Edit';
            }
        })

        


        deleteBtn.addEventListener('click', () => {
            item.remove();
            let allSpan = document.querySelectorAll('.span');
      


       
            allSpan.forEach((value) => {
              
                let number = Number(value.innerText);


                if(number > Number(serialSpan.innerText)) {
                    let updateNum = number - 1;
                    value.innerText = updateNum;
                }

                console.log(value);
            })

            
           

        })

        
        insertedData.value = '';
    }
  
})