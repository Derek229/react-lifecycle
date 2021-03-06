import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


// const NavBar = (props) => {
//     const { pathname } = useLocation()
//     return(

//         <Menu>
//             <Link to='/'>
//               <Menu.Item active={pathname === '/'} >
//                 Home
//               </Menu.Item >
//             </Link>
//             <Link to='/about'>
//               <Menu.Item active={pathname === '/about'} >
//                 About    
//              </Menu.Item >
//             </Link>
//             <Link to = './pages/componentDemo'>
//             <Menu.item active={pathname ==='./Pages/componentDemo'}>
//               components
//             </Menu.item>
//             </Link>
//         </Menu>
//     )
// }
class NavBar extends React.Component {
  render(){
      // const { location } = props
      const { location } = this.props
      return(

          <Menu>
              <Link to='/'>
                <Menu.Item active={location.pathname == '/'} >
                  Home
                </Menu.Item >
              </Link>
              <Link to='/about'>
                <Menu.Item active={location.pathname == '/about'} >
                  About    
               </Menu.Item >
              </Link>
              <Link to='/componentDemo'>
                <Menu.Item active={location.pathname == '/componentDemo'} >
                  Component Demo    
               </Menu.Item >
              </Link>
              <Link to='/clock'>
                <Menu.Item active={location.pathname == '/clock'}>
                  Clock
                </Menu.Item>
              </Link>
              <Link to='/itemList'>
                <Menu.Item active={location.pathname == '/itemList'}>
                 ItemList
                </Menu.Item>
              </Link>

          </Menu>
      )

  }
}

export default withRouter(NavBar)
