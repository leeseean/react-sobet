import React from 'react';
import { Carousel } from 'antd';
import $http from '../../utils/ajax';
import './subSwiper.styl';

class SubSwiper extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        $http({
            url: '/activity.json',
            method: 'GET',
        }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    data: res.data.result.entities
                });
            }
        });
    }
    render() {
        const Item = ({ id, imagePath }) => {
            return (
                <div>
                    <a href={`/sobet/activity/goDetailById?id=${id}`} target="_blank">
                        <img src={imagePath} width="315" height="190" />
                    </a>
                </div>
            );
        };
   
        return (
            <Carousel autoplay arrows={true} slidesToShow={3} slidesToScroll={1} dots={false} pauseOnHover={true}>
                {
                    this.state.data.map(item => {
                        const { id, imagePath } = item;
                        return <Item key={id} imagePath={imagePath} />
                    })
                }
            </Carousel>
        );
    }
}

export default SubSwiper;