let userI = +prompt('0)Quduq \n1)Qaychi \n2)Qogoz')
let userBot = Math.floor(Math.random() * 3)

console.log(userBot);

if (userBot === 0){
    alert('Bot quduqni tanladi')
}
else if (userBot === 1){
    alert('Bot qaychini tanladi')
}
else if (userBot === 2){
    alert('Bot qogozni tanladi')
}

if (userBot === userI){
    alerrt('Durang')
}

else if (userBot === 0 && userI === 2){
    alert('Siz yuttingiz')
}
else if (userBot === 2 && userI === 0){
    alert('Bot yuttingiz')
}

else if (userBot === 0 && userI === 1 ){
    alert('Siz yutqazdingiz')
}
else if (userBot === 1 && userI === 0 ){
    alert('Siz yutdingiz')
}

else if (userBot === 1 && userI === 2 ){
    alert('Bot yutdingiz')
}
else if (userBot === 2 && userI === 1 ){
    alert('Bot yutdi')
}
