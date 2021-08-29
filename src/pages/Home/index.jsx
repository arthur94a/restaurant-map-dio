import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import restaurante from '../../assets/restaurante-fake.png';
import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal } from '../../components';

import { Container, Search, Logo, Wrapper, Map, Carousel, CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="restaurant's logo" />
                    <TextField
                        label="Restaurant search"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Near to you</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                        <Card photo={restaurante} title="name..." />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    );
};

export default Home;