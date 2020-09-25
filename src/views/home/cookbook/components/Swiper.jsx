import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import {get} from 'api/http';

export default class Swiper extends Component {
    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
    }

    async componentDidMount(){
        let rs = await get('/api/swiperlist');
        this.setState({
            data : rs.data,
        })
    }

    render() {
        return (
            <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val,index) => (
              <img
                key={index}
                src={val.url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
        )
    }
}
