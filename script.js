// variables
  const firstSection = document.getElementById("first-section")
  const homeSection = document.getElementById('homeSection')
  const radioGroup = document.getElementById('radio-group')
  const radioGroups = document.getElementById('radio-groups')
  const twoSection = document.getElementById('two-section')
   let section = document.querySelectorAll('section')

// event listeners
eventListeners()

function eventListeners(){
    

    document.querySelector('#form').addEventListener('submit',newUser)
    radioGroup.addEventListener('click',enableButton)
    radioGroups.addEventListener('click',enableButton)
    document.querySelector('#suivant').addEventListener('click',checkButton)
    
    
}

// functions
 
function newUser(e){
    e.preventDefault()
    run()
// read data of name and email
    const name = document.getElementById('name').value
     const email = document.getElementById('email').value

     // add class homepage to home section
     homeSection.classList.add('homePage')


     // display first section
     firstSection.style.display = 'block'


  

    //  // add name and email to local storage
    //   addLocalStorage(name,email)
}

     // to set the timer
function run(){
    
    let mac = document.getElementById('innerbar')
    let tex = document.getElementById('text')
    let width = 60
    let id = setInterval(ref,1000)

    function ref(){
        if (width == 0) {
            document.getElementById('two-section').style.display = 'block'
            firstSection.style.display = 'none'
            clearInterval(id)
        }
        else {
            width--
            mac.style.width = width+'%'
            tex.innerHTML = width

        }
    }
}

// to check if radio button is checked an read his value
function checkButton(e){
    e.preventDefault()
    let count = 0
    let getSelected = document.querySelector('input[ name="answer"]:checked').value
     if (getSelected == ".js") {
        
        count += 1
     }

     // display the second section
     document.getElementById('two-section').style.display = 'block'
     firstSection.style.display = 'none'
     
     

}

// to activate the button suivant
function enableButton(){
    document.getElementById('suivant').removeAttribute('disabled')
    document.getElementById('suivant').style.background = 'blue'
    
}


