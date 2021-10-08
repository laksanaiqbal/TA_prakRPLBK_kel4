import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class detailsproduct extends Component {
    state = {
        lihatbenefit : false
    }
    ubahlihatbenefit = () => {
        this.setState(() => {
            return {lihatbenefit : !this.state.lihatbenefit}
        })
    }
    componentWillUnmount() {
        alert('Sembunyikan!')
    }

    render() {
        return (
        <Card hoverable title="Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
            <p style={{margin:'2px'}}>Ramen Ichiraku adalah set umum untuk berbagai adegan sepanjang seri, sering dikunjungi oleh Naruto</p>
                <p style={{margin:'2px'}}>antara masa cerita. Sebuah episode anime didedikasikan untuk bar, di mana Ayame diculik dan Naruto</p>
                <p style={{margin:'2px'}}>serta teman-temannya harus membuat resep ramen yang sempurna untuk tebusan. Menggunakan ninjutsu</p>
            <div style={{Align:'center', display: 'inlineblock'}}>
                <a onClick={this.ubahlihatbenefit}>{this.state.lihatbenefit ? 'Sembunyikan' : 'Tampilkan'} DISKON</a>
                {this.state.lihatbenefit ? <p>Buy One Get One</p> : ''}
            </div>
        </Card>
        );
    }
}

export default detailsproduct;