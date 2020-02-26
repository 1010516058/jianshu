import React,{Component} from 'react'
import { HeaderWrapper,Logo ,Nav,NavItem,NavSearch,Addition,Button} from './style.js'
export default class Header extends Component{
    render(){
        return <HeaderWrapper>
            <Logo href="/"></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                {/* <NavItem className="right">注册</NavItem> */}
                <NavItem className="right">登陆</NavItem>

                <NavItem className="right">Aa</NavItem>
                <NavSearch></NavSearch>
                <Addition>
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>

                </Addition>
            </Nav>
            </HeaderWrapper>
    }
}