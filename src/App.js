import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import Shop from './components/shop';
import BestSeller from './components/bestseller'
import AboutUs from './components/aboutus';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
  <Router>
<Layout style={{background:'#45b1bf'}}>
      <Header style={{background:'#45b1bf'}}>
        <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '30px'}}>
        KENYANG MAKAN RESTAURANT
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px', fontFamily:'Roboto', color:'#FFFFFF', fontSize: '18px'}}>FOOD LIST</Link>
          <Link to="/bestseller" style={{margin:'8px', fontFamily:'Roboto', color:'#FFFFFF', fontSize: '18px'}}>DISKON</Link>
          <Link to="/aboutus" style={{margin:'8px', fontFamily:'Roboto', color:'#FFFFFF', fontSize: '18px'}}>OWNER</Link>
        </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inlineblock', background:'#c8f2f7'}}>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/bestseller" exact component={BestSeller} />
          <Route path="/aboutus" exact component={AboutUs} />
        </Switch>
      </Content>
      <Footer style={{background:'#45b1bf', fontSize: '20px', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
          KELOMPOK 4 Praktikum RPLBK
        </Footer>
    </Layout>
  </Router>
  )
}

export default App;