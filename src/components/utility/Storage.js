const getItems = () =>{
    const card = localStorage.getItem('card')
    if(card){
        return JSON.parse(card)
    }
    return [];
}

const stogerItems = (id) =>{
    const card = getItems();
    const cardExist = card.find(cardid => cardid === id)
    if(!cardExist){
        card.push(id)
        localStorage.setItem('card',JSON.stringify(card))
    }

}

export {getItems , stogerItems}