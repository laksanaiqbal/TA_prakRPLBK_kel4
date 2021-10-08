import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

const themes = { 
    light:{
        id: 1,
        foreground: '#45b1bf',
        background: "#497075",
    },
    dark:{
        id: 2,
        foreground: "#50ffeb",
        background: "#c8f2f7",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function ContextUse(){
    const [theme, setTheme] = useState(themes.dark);
    const changeTheme = () =>{
        if (theme.id === themes.light.id){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    };
    return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://i.postimg.cc/QMHXr5Vn/2.jpg'></img>
                    <p style={{margin:'2px'}}>Laksana IqbalUtama</p>
                    <p style={{margin:'2px'}}>21120118130068</p>
            </Card>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://i.postimg.cc/zfBfX627/1.jpg'></img>
                    <p style={{margin:'2px'}}>Syafiqul Mahdi</p>
                    <p style={{margin:'2px'}}>21120118110001</p>
            </Card>
        <div>
            <ThemedButton />
        </div>
        </div>
    </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
    <Button style={{ background: theme.background,
        color:theme.foreground }}
        onClick={changeTheme}>
            CHANGE THEME
    </Button>
    );
}