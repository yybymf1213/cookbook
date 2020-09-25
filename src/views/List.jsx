import React, { Component } from 'react'
import HeaderBar from 'components/headerbar/HeaderBar'
import {SearchBar,Icon,ListView} from 'antd-mobile'
import './List.style.scss'
import {get} from 'api/http'

export default class List extends Component {
    constructor(){
        super();
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
        getRowData,
        getSectionHeaderData: getSectionData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            value: 'Search',
            // 起始索引值
            start : 0,
            // 每页数据条数
            limit : 10,
            dataSource,
            datalist : [],
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
            };

        }
        
    //   componentDidMount() {
    //     this.autoFocusInst.focus();
    //   }
      onChange= (value) => {
        this.setState({ value });
        console.log(value);
      };
      clear = () => {
        this.setState({ value: '' });
      };
    //   handleClick = () => {
    //     this.manualFocusInst.focus();
    //   }
    render() {
        const row = (rowData, sectionID, rowID)=>{
            return (
                <div>row</div>
            )
        }
        const separator = (sectionID, rowID) => (
            <div>----------------------------</div>
          );
        return (
            <div>
                <HeaderBar>
                    <Icon onClick={()=>this.props.history.go(-1)} type="left"/>
                    <SearchBar className="searchBar"
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                    ></SearchBar>
                </HeaderBar>

                {/* 下方列表 */}
                <div className="listContainer">
                    {/* 每条数据 */}
                    <div className="item">
                        <div className="photo">
                            <img src="https://i3.meishichina.com/attachment/recipe/2018/11/20/2018112015426906295309702111.jpg?x-oss-process=style/c320" alt=""/>
                        </div>
                        <div className="content">
                            <h1>红烧鱼</h1>
                            <p>青辣椒</p>
                            <p>12334次浏览  234收藏</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="photo">
                            <img src="https://i3.meishichina.com/attachment/recipe/2018/11/20/2018112015426906295309702111.jpg?x-oss-process=style/c320" alt=""/>
                        </div>
                        <div className="content">
                            <h1>红烧鱼</h1>
                            <p>青辣椒</p>
                            <p>12334次浏览  234收藏</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="photo">
                            <img src="https://i3.meishichina.com/attachment/recipe/2018/11/20/2018112015426906295309702111.jpg?x-oss-process=style/c320" alt=""/>
                        </div>
                        <div className="content">
                            <h1>红烧鱼</h1>
                            <p>青辣椒</p>
                            <p>12334次浏览  234收藏</p>
                        </div>
                    </div>
                </div>
                <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource.cloneWithRows(this.state.datalist)}
                renderHeader={() => <span>header</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                // renderSectionHeader={sectionData => (
                // <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                // )}
                renderBodyComponent={() => <div/>}
                renderRow={row}
                renderSeparator={separator}
                style={{
                height: this.state.height,
                overflow: 'auto',
                }}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                // onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
            </div>
        )
    }
    async getList(){
        let rs = await get('api/list',{
            _start : this.state.start,
            _end : this.state.start + this.state.limit,
        });
        // console.log(rs);
        this.setState({datalist : rs.data})
    }

    componentDidMount(){
        this.getList();
    }
}
