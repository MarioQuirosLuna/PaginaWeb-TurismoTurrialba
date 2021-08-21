
let totalFamily = 0;
let totalOrganization = 0;
let totaldeductionF = 0;
let totaldeductionO = 0;


let numberPeople = 0;

let resultFamily = document.getElementById('resultFamily');
let resultOrganization = document.getElementById('resultOrganization');
let discount = document.getElementById('discount');
let comboPeople = document.getElementById('combo-People');
let comboTours = document.getElementById('combo-Tours');
let familyTours = document.querySelector('.familyTours');
let organizationTours = document.querySelector('.organizationTours');


function addNumberPeople(value){
    seeResultFamily(totalFamily*value);
    seeDeduction(totaldeductionF*value);
}

function addNumberTours(value){
    seeResultOrganization(totalOrganization*value);
}

function resertCombosPeople(){
    comboPeople.selectedIndex = "";
}
function resertCombosTour(){
    comboTours.selectedIndex = "";
}

function addTour(checked, name, type){
    if(type === 'family'){
        resertCombosPeople();
        if(checked){
            if(name === 'tigrillo'){
                seeResultFamily(totalFamily += 5000);
            }
            if(name === 'reventazon'){
                seeResultFamily(totalFamily += 10000);
            }
            if(name === 'mirador'){
                seeResultFamily(totalFamily += 15000);
                seeDeduction(totaldeductionF += 1500);
            }
            if(name === 'volcan'){
                seeResultFamily(totalFamily += 20000);
                seeDeduction(totaldeductionF += 10000);
            }
            if(name === 'rios'){
                seeResultFamily(totalFamily += 25000);
            }
            if(name === 'aguacate'){
                seeResultFamily(totalFamily += 30000);
                seeDeduction(totaldeductionF += 6000);
            }
        }else{
            if(name === 'tigrillo'){
                seeResultFamily(totalFamily -= 5000);
            }
            if(name === 'reventazon'){
                seeResultFamily(totalFamily -= 10000);
            }
            if(name === 'mirador'){
                seeResultFamily(totalFamily -= 15000);
                seeDeduction(totaldeductionF -= 1500);
            }
            if(name === 'volcan'){
                seeResultFamily(totalFamily -= 20000);
                seeDeduction(totaldeductionF -= 10000);
            }
            if(name === 'rios'){
                seeResultFamily(totalFamily -= 25000);
            }
            if(name === 'aguacate'){
                seeResultFamily(totalFamily -= 30000);
                seeDeduction(totaldeductionF -= 6000);
            }
        }
    }else if(type === 'organization'){
        resertCombosTour();
        if(checked){
            if(name === 'tigrillo'){
                seeResultOrganization(totalOrganization += 50000);
            }
            if(name === 'reventazon'){
                seeResultOrganization(totalOrganization += 100000);
            }
            if(name === 'mirador'){
                seeResultOrganization(totalOrganization += 150000);
            }
            if(name === 'volcan'){
                seeResultOrganization(totalOrganization += 200000);
            }
            if(name === 'rios'){
                seeResultOrganization(totalOrganization += 250000);
            }
            if(name === 'aguacate'){
                seeResultOrganization(totalOrganization += 300000);
            }
        }else{
            if(name === 'tigrillo'){
                seeResultOrganization(totalOrganization -= 50000);
            }
            if(name === 'reventazon'){
                seeResultOrganization(totalOrganization -= 100000);
            }
            if(name === 'mirador'){
                seeResultOrganization(totalOrganization -= 150000);
            }
            if(name === 'volcan'){
                seeResultOrganization(totalOrganization -= 200000);
            }
            if(name === 'rios'){
                seeResultOrganization(totalOrganization -= 250000);
            }
            if(name === 'aguacate'){
                seeResultOrganization(totalOrganization -= 300000);
            }
        }
    }

}

function showTours(checked, name){
    if(checked){
        if(name === 'family'){
            familyTours.style.display = "";
            comboPeople.style.display = "";
            resultFamily.style.display = "";
        }
        if(name === 'organization'){
            organizationTours.style.display = "";
            comboTours.style.display = ""
            resultOrganization.style.display = "";
        }
    }else{
        if(name === 'family'){
            familyTours.style.display = "none";
            comboPeople.style.display = "none";
            resultFamily.style.display = "none";
        }
        if(name === 'organization'){
            organizationTours.style.display = "none";
            comboTours.style.display = "none";
            resultOrganization.style.display = "none";
        }
    }
}

function seeDeduction(deduction){
    discount.innerHTML = deduction;
}

function seeResultFamily(total){
    resultFamily.innerHTML = total;
}
function seeResultOrganization(total){
    resultOrganization.innerHTML = total;
}

window.addEventListener('load',function(){
    familyTours.style.display = "none";
    organizationTours.style.display = "none";
    comboPeople.style.display = "none";
    comboTours.style.display = "none";
    resultFamily.style.display = "none";
    resultOrganization.style.display = "none";
});