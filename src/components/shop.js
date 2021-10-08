import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Typography, Modal } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
const { Text } = Typography;


function App() {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount (count - 1);
    };
 
    
    useEffect(() => {
        if (count >0) {
            alert(`Makanan Telah ditambahkan`);
        }
    }, [count]);


    return (
        <div>
            <div>
                <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={countUp}>
                    Tambahkan Makanan
                </Button>
            </div>
            <div>
                <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={countDown}>
                    Batalkan Pesanan
                </Button>
            </div>
            <Text>Jumlah Pesanan : {count}</Text>
            </div>
    );
}

export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: [],
            visible: false,
            name: "",
            price: "",
            Restaurant : "",
            image_link: "",
            add:"",
        };
    }
    
    componentDidMount() {
        axios({
            method: "get",
            url: " http://localhost:3000/user",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                shop: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    handleOk = () => {
        this.setState({visible:false});
      };
      handleCancel = () => {
        this.setState({visible:false});
      };
      showModal = (data) => {
        this.setState({visible:true, add: data});
      }
    render() {
        return (
        <div>
            {this.state.shop.map((results) => {
                return (
                <div key={results.id} style={{textAlign:'center', display:'inline-block'}}>
                    <Card hoverable style={{textAlign:'center', display: 'inline-block', width:350, margin:'30px', boxShadow:'1px 2px 1px 0.1px', borderRadius:'20px'}}
                    cover={<img alt="gambar1"maxWidth="30px" src={results.image_link} />}>
                        <Meta title={results.name} description={results.price} />
                        <div>
                            <p>Restaurant  : {results.Restaurant }</p>
                        </div>
                        <div>
                        <Button type="primary" onClick={() => this.showModal(results.add)}>
                            Deskripsi makanan
                        </Button>
                        </div>
                        <div>
                            <App />
                        </div>
                        
                    </Card>
                </div>
                );
            })}
            <Modal title="Description" visible={this.state.visible} onOk={this.handleOk} 
                        onCancel={this.handleCancel}><p>{this.state.add}</p>
                        </Modal> 
        </div>
        );
    }
}