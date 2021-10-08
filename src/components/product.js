import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class product extends Component {
    state = {
        angka:0
    }
    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }
    shouldComponentUpdate(_,nextState) {
        if (this.state.angka !== nextState.angka && typeof nextState.angka === "number") {
            if (nextState.angka >5){
                alert(`Sold`)
                return false
            }
            return window.confirm('Anda yakin ingin menambahkan Makanan ini?')
        }
        return false
    }
    componentDidUpdate() {
        alert(`Makanan anda berhasil ditambahkan`)
    }

    render() {
        return (
        <div style={{textAlign:'center', display: 'inlineblock'}}>
            <Card hoverable style={{display: 'inline-block', width:400, margin:'30px', boxShadow:'0px 1px 1px'}}
            cover={<img alt="gambar1" height="500px" src="https://i.postimg.cc/44byNf2s/ramen.jpg" />}>
                <Meta title="Ramen Iciraku" description="Rp. 150.000" />
                <div>
                    <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                        Tambahkan Makanan
                    </Button>
                </div>
                <Text>Jumlah Pesanan : {this.state.angka}</Text>
            </Card>
        </div>
        );
    }
}
export default product;