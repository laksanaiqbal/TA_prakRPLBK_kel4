import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class GambarDetail extends Component {
    state = {
        viewproduct : "RAMEN ICHIRAKU"
    }
    
    ubahviewproduct = () => {
        this.setState((state) => {
            if (state.viewproduct === "RAMEN ICHIRAKU"){
                return {viewproduct : "Pedas, Sedang, Tidak Pedas"}
            } else {
                return {viewproduct : "RAMEN ICHIRAKU"}
            }
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan detail pictures?')
        }

    render() {
        return (
            <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
                <Row justify="center">
                    <Col>
                        <Image width={150} src="https://i.postimg.cc/SQvTRMTp/ramen2.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://i.postimg.cc/Y0GxYdnB/ramen3.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://i.postimg.cc/fRh6WdyR/ramen4.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://i.postimg.cc/cHVF9q8L/ramen5.jpg"/>
                    </Col>
                </Row>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahviewproduct}> Tingkat kepedasan?</a>
                    <p>{this.state.viewproduct}</p>
                </div>
            </Card>
        );
    }
}

export default GambarDetail;