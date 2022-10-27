import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AsideNav from '../Pages/Shared/AsideNav/AsideNav';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg="3">
                        <AsideNav></AsideNav>
                    </Col>

                    <Col lg="9">
                        <Outlet> </Outlet>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Main;