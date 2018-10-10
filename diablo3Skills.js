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


function newSearchDisplay(e){
    e.preventDefault();
    switch (charClass.value){
        case 'barbarian':
            skillsDisplay(skillsURLBegin + 'barbarian' + skillsURLEnd);
        
            break;
        case 'crusader':
            skillsDisplay(skillsURLBegin + 'crusader' + skillsURLEnd);
    
            break;
        case 'demon hunter':
            skillsDisplay(skillsURLBegin + 'demon-hunter' + skillsURLEnd);
          
            break;
        case 'monk':
            skillsDisplay(skillsURLBegin + 'monk' + skillsURLEnd);
         
            break;
        case 'necromancer':
            skillsDisplay(skillsURLBegin + 'necromancer' + skillsURLEnd);
          
            break;
        case 'witch doctor':
            skillsDisplay(skillsURLBegin + 'witch-doctor' + skillsURLEnd);
            
            break;
        case 'wizard':
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
            showSkillDescrips(json.skills);
            console.log(json);
            
        })
}


function showSkillDescrips(skills){
    while(skillsBucket.firstChild){
        skillsBucket.removeChild(skillsBucket.firstChild);
    }

    
    for (let i = 0; i < skills.length; i++) {
        let heading = document.createElement('h2');
        let div = document.createElement('div');
        let para = document.createElement('p');
        let icon = document.createElement('img');
       

        heading.className = 'skillsHeading';
        heading.innerText = skills[i].name;
        icon.className = 'skillPic';
        icon.src = iconBase + skills[i].icon + '.png';
        div.className = 'skillsDiv';
        para.className = 'skillDesc';

        div.appendChild(heading);
        para.appendChild(icon);
        para.innerHTML += skills[i].description;
        div.appendChild(para);
        skillsBucket.appendChild(div);
      }
 }      

submit.addEventListener('click',newSearchDisplay);