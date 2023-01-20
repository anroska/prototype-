import React, { useState } from 'react';
import Card from "../Card/Card";
import products from "./product";
import "./ProductPage.css"

const ProductsPage = () => {
    const [selectedCards, setSelectedCards] = useState([])
    const isSelected = id => selectedCards.includes(id)
    const changeSelection = id => {
        if (selectedCards.includes(id)) {
            return setSelectedCards(selectedCards.filter(cardId => cardId !== id))
        }

        return setSelectedCards([...selectedCards, id])
    }

    return (
        <>
            <h1 className="title">Ты сегодня покормил кота?</h1>
            <div className="cardsContainer">
                {products.map((prod) => {
                    return <Card onClick={() => changeSelection(prod.id)} key={prod.id} prod={prod} isSelected={isSelected(prod.id)}/>
                })}
            </div>
        </>
    );
};

export default ProductsPage;