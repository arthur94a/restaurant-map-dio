import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurant from '../../assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#E7711C" />
            <Address>Rua das pedrinhas, SC</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant} alt="Restaurant" />
    </Restaurant>
);


export default RestaurantCard;