const baseURL = 'https://us.api.battle.net/d3/data/hero/'
const key = 'vpdkqkkvctyyjg2qj72k7batsbd5vn48'
let url;

const iconBase = 'http://media.blizzard.com/d3/icons/skills/64/'
const skillsURLBegin = 'https://us.api.battle.net/d3/data/hero/';
const skillsURLEnd = '?locale=en_US&apikey=vpdkqkkvctyyjg2qj72k7batsbd5vn48'

const body = document.querySelector('body');
const skillsBucket = document.getElementById('skillsBucket');
const classHeader = document.getElementById('classHeader');
const submit = document.querySelector('.submit');
const charClass = document.getElementById('charClass');
const charLevel = document.getElementById('charLevel');
const section = document.querySelector('section');
const skillDump = document.getElementById('skillDump');
 
let div = document.createElement('div');
    div.className = 'skillsDiv';


function newSearchDisplay(e){
    e.preventDefault();
        
   

    switch (charClass.value){
        case 'barbarian':
        case 'Barbarian':
            skillsDisplay(skillsURLBegin + 'barbarian' + skillsURLEnd);
            CharDisplay(skillsURLBegin + 'barbarian' + skillsURLEnd);
           
            break;
        case 'crusader':
        case 'Crusader':
            skillsDisplay(skillsURLBegin + 'crusader' + skillsURLEnd);
            
            break;
        case 'demon hunter':
        case 'Demon hunter':
        case 'Demon Hunter':
            skillsDisplay(skillsURLBegin + 'demon-hunter' + skillsURLEnd);
            
            break;
        case 'monk':
        case 'Monk':
            skillsDisplay(skillsURLBegin + 'monk' + skillsURLEnd);
              
            break;
        case 'necromancer':
        case 'Necromancer':
            skillsDisplay(skillsURLBegin + 'necromancer' + skillsURLEnd);
             
            break;
        case 'witch doctor':
        case 'Witch doctor':
        case 'Witch Doctor':
            skillsDisplay(skillsURLBegin + 'witch-doctor' + skillsURLEnd);
            
            break;
        case 'wizard':
        case 'Wizard':
            skillsDisplay(skillsURLBegin + 'wizard' + skillsURLEnd);
           
            break;
        default:
            break;
    }
}

function skillsDisplay(url) {
    

    fetch(url)
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log(json.skills);
            showSkillDescrips(json.skills);
            
        })
}
//trying to make character icon appear
function CharDisplay(url) {

    fetch(url)
        .then(function(charResult){
            return charResult.json();
        })
        .then(function(json){
            console.log(json);
            console.log(json.icon);
            
            
        })
}

function showSkillDescrips(skills){
    
    
    while(skillsBucket.firstChild){
        skillsBucket.removeChild(skillsBucket.firstChild);
    }


    
    for (let i = 0; i < skills.active.length; i++) {
        let heading = document.createElement('h2');
        let div = document.createElement('div');
        let para = document.createElement('p');
        let icon = document.createElement('img');
        let l = document.createElement('p');

        if(charClass.value == 'barbarian' || charClass.value == 'Barbarian'){
            
            div.style.backgroundColor = 'red' ;
           
        } else if (charClass.value == 'crusader' ||  charClass.value == 'Crusader'){
            div.style.backgroundColor = '#aa9f22';
        } else if (charClass.value == 'monk'|| charClass.value == 'Monk'){
            div.style.backgroundColor =  '#FF4500';
        } else if (charClass.value == 'demon hunter' || charClass.value == 'Demon hunter' || charClass.value == 'Demon Hunter' ){
            div.style.backgroundColor = '#17123b';
        }else if (charClass.value == 'necromancer' || charClass.value == 'Necromancer'){
            div.style.backgroundColor = '#2F4F4F';
        } else if (charClass.value == 'witch doctor' || charClass.value == 'Witch doctor' || charClass.value == 'Witch Doctor'){
            div.style.backgroundColor = '#6B8E23';
        } else if(charClass.value == 'wizard' || charClass.value == 'Wizard'){
            div.style.backgroundColor = 'Indigo';
        }

        if(skills.active[i].level <= charLevel.value){
        heading.className = 'skillsHeading';
        heading.innerText = skills.active[i].name;
        icon.className = 'skillPic';
        icon.src = iconBase + skills.active[i].icon + '.png';
        div.className = 'skillsDiv';
        para.className = 'skillDesc';
        l.className = 'level recieved'
        l.innerText = 'Unlocked at level:' + skills.active[i].level;

        
        div.appendChild(heading);
        para.appendChild(icon);
        para.innerHTML += skills.active[i].description;
        div.appendChild(para);
        skillsBucket.appendChild(div);
        para.appendChild(l);
        }
        
    }


    for (let i = 0; i < skills.passive.length; i++) {
        let heading = document.createElement('h2');
        let div = document.createElement('div');
        let para = document.createElement('p');
        let icon = document.createElement('img');
        let l = document.createElement('p');
       
        if(skills.passive[i].level <= charLevel.value){
        heading.className = 'skillsHeading';
        heading.innerText = skills.passive[i].name;
        icon.className = 'skillPic';
        icon.src = iconBase + skills.passive[i].icon + '.png';
        div.className = 'skillsDiv';
        para.className = 'skillDesc';
        l.className = 'level recieved'
        l.innerText = 'Unlocked at level:' + skills.passive[i].level;
        
        
               
        if(charClass.value == 'barbarian' || charClass.value == 'Barbarian'){
            
            div.style.backgroundColor = 'red' ;
           
        } else if (charClass.value == 'crusader' ||  charClass.value == 'Crusader'){
            div.style.backgroundColor = '#aa9f22';
        } else if (charClass.value == 'monk'|| charClass.value == 'Monk'){
            div.style.backgroundColor =  '#FF4500';
        } else if (charClass.value == 'demon hunter' || charClass.value == 'Demon hunter' || charClass.value == 'Demon Hunter' ){
            div.style.backgroundColor = '#17123b';
        }else if (charClass.value == 'necromancer' || charClass.value == 'Necromancer'){
            div.style.backgroundColor = '#2F4F4F';
        } else if (charClass.value == 'witch doctor' || charClass.value == 'Witch doctor' || charClass.value == 'Witch Doctor'){
            div.style.backgroundColor = '#6B8E23';
        } else if(charClass.value == 'wizard' || charClass.value == 'Wizard'){
            div.style.backgroundColor = 'Indigo';
        }
        
        div.appendChild(heading); 
        para.appendChild(icon);
        para.innerHTML += skills.passive[i].description;
        div.appendChild(para);


        skillsBucket.appendChild(div);
        para.appendChild(l);
    }
        
   
}
}
//trying to get character icon to appear
function showChar(icon){
    let heading = document.createElement('h2');
    let div = document.createElement('div');
    let para = document.createElement('p');
    let charIcon = document.createElement('img');
    let l = document.createElement('p');

    let charIcon = iconBase + charIcon + '.png'

    para.appendChild(charIcon);



}

submit.addEventListener('click',newSearchDisplay);
