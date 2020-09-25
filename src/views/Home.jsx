import React from 'react'
import { TabBar } from 'antd-mobile';
import Cookbook from './home/cookbook/Cookbook'
import Location from './home/Location'
import Sort from './home/sort/Sort'
import More from './home/More'
import cookbook from '../assets/images/cookbook.png'
import cookbookActive from '../assets/images/cookbook-active.png'
import menu from '../assets/images/menu.png'
import menuActive from '../assets/images/menu-active.png'
import location from '../assets/images/location.png'
import locationActive from '../assets/images/location-active.png'
import more from '../assets/images/more.png'
import moreActive from '../assets/images/more-active.png'
import {LocationConsumer} from 'context/LocationContext'


const tabbars = [
    {
        id : "cookbook",
        title : "菜谱大全",
        icon : cookbook,
        selectedIcon : cookbookActive,
        component : Cookbook,
    },
    {
        id : "sort",
        title : "分类",
        icon : menu,
        selectedIcon : menuActive,
        component : Sort,
    },
    {
        id : "more",
        title : "更多",
        icon : more,
        selectedIcon : moreActive,
        component : More,
    },
]
const locationTab = {
    id : "location",
    title : "地图",
    icon : location,
    selectedIcon : locationActive,
    component : Location,
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "cookbook",
    };
  }

  render() {
    return (
      <LocationConsumer>
        {
          ({showLocation})=>{
            if(showLocation && tabbars.length < 4){
              tabbars.splice(2,0,locationTab);
            }else if(!showLocation && tabbars.length === 4){
              tabbars.splice(2,1);
            }
            return(
              <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
                  hidden={this.state.hidden}
                >
                {
                    tabbars.map((item)=>{
                        return(
                            <TabBar.Item
                                title={item.title}
                                key="Life"
                                icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${item.icon}) center center /  21px 21px no-repeat` }}
                                />
                                }
                                selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat` }}
                                />
                                }
                                selected={this.state.selectedTab === item.id}
                                onPress={() => {
                                  let path = `/home/${item.id}`;
                                  if(item.id === 'sort'){
                                    path = localStorage.getItem('sortPath') || path;
                                  }
                                  this.props.history.push(path);
                                this.setState({
                                    selectedTab: item.id,
                                });
                                }}
                                data-seed="logId"
                            >
                                {<item.component></item.component>}
                            </TabBar.Item>
                        )
                    })
                }
                  
                </TabBar>
              </div>
            )
          }
        }
      </LocationConsumer>
    );
  }
}

export default Home