const startingBid = document.getElementById("startingbid");
const Name = document.getElementById("name");
const education_level = document.getElementsByClassName("edu");
const family_networth = document.getElementsByClassName("networth");
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age");
const reputation = document.getElementsByClassName("reputation");
var button = document.getElementById("submit")[0];


var edu_coeff = new Array();
 edu_coeff["level1"]= '';
 edu_coeff["level2"]=1.5;
 edu_coeff["level3"]=1.2;
 edu_coeff["level4"]=1.05;
 edu_coeff["level5"]=0.9;
 

const networth = [
    {
        name: 'net1',
        coefficient: ''
    },
    {
        name: 'net2',
        coefficient: 2
    },
    {
        name: 'net3',
        coefficient: 1.5
    },
    {
        name: 'net4',
        coefficient: 1.2
    },
]

// console.log(networth);

function getEduPrice()
{  
    var EduPrice = 0;
    var theForm = document.forms["qalynform"];
    var selectedDegree = theForm.elements["selecteddegree"];
    for(var i = 0; i < selectedDegree.length; i++)
    {
        if(selectedDegree[i].checked)
        {
            EduPrice = edu_coeff[selectedDegree[i].value];
            break;
        }
    } 
    return EduPrice;  
    
} 

function getNetworth()
{
    var NetworthPrice = 0;
    var the form = document.forms["qalynform"];
     var selectedNetworth = theForm.elements["networth"];
     
     NetworthPrice = networth[selectedNetworth.value];

     return NetworthPrice;
}

function DombraPrice()
{
    var dombraPrice = 0;
    var theForm = document.forms["qalynform"];
    var selectedSkill1 = theForm.elements["skill1"];
    if(selectedSkill1.checked==true)
    {
        dombraPrice = 100+startingBid;
    }
    return dombraPrice;
}

function CookPrice()
{
    var cookPrice = 0;
    var theForm = document.forms["qalynform"];
    var selectedSkill2 = theForm.elements["skill2"];
    if(selectedSkill2.checked==true)
    {
        cookPrice = 200+startingBid;
    }
    return cookPrice;
}

function CharacterPrice()
{
    var characterPrice = 0;
    var theForm = document.forms["qalynform"];
    var selectedSkill3 = theForm.elements["skill3"];
    if(selectedSkill3.checked==true)
    {
        characterPrice = 150+startingBid;
    }
    return characterPrice;
}

function SingPrice()
{
    var singPrice = 0;
    var theForm = document.forms["qalynform"];
    var selectedSkill4 = theForm.elements["skill4"];
    if(selectedSkill4.checked==true)
    {
        singPrice = 100+startingBid;
    }
    return singPrice;
}

function calculateTotal()
{    var cakePrice = SingPrice() + getEduPrice() + NetworthPrice() + CookPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+EduPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}


/*I just saw that you uploaded this code on the moodle. I don't know why but I'm going to write it here. 
I hope it's not plagiarism because my code is written above. (The code below works*)*/

// const firstName = document.getElementById("name"); 
// const startingBid = document.getElementById("startingbid"); 
// const education = document.getElementById("education");
// const networth = document.getElementById("networth"); 
// const skills = document.getElementsByClassName("skills"); 
// const age = document.getElementsByName("age");
// const button = document.getElementById("submit");
// const love_letter = document.getElementById("love_letter");

// const calculate = () => {
//     let name = firstName.value; 
//     let price = Number(startingBid.value); 
//     let letter = love_letter.value;
//     if (name != "") { 
//         price = getNewPrice(price, education);
//         let person = {
//             fullName: name,
//             finalPrice: price,
//             loveLetter: letter
//         }
//         document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
//     }
//     else {
//         alert("Name and starting bid cannot be empty");
//     }
// }

// const getNewPrice = (price, criteria) => {
//     return price * Number(criteria.value);
// }

// const getCheckboxValuesForLoop = (html_collection, price) => { 
// 	for (let i=0; i < html_collection.length; i++) {  
// 		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
// 			price = price + Number(html_collection[i].value)
// 		}
// 		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
// 			price = price * Number(html_collection[i].value)
// 		}
// 	}
// 	return price;
// }

// const getCheckboxValuesFilterReduce = (html_collection, price) => { 
//     let list = Array.from(html_collection).filter(filteration) 
//     let result = list.reduce(reducer, price)
//     return result;
// }

// const reducer = (accumulator, item) => {
//     return accumulator + Number(item.value);
// }
// const filteration = (item) => {
//     return item.checked;
// }

// const getRadioValue = (node_list, price) => {  
//     node_list.forEach(item => {
//         if (item.checked) {
//             price = price * Number(item.value)
//         }
//     })
//     return price;
// }

// button.addEventListener("click", calculate)







