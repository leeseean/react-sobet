import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import $http, { queryCurrentActivity } from '../../utils/ajax';
import './subSwiper.styl';

class SubSwiper extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData();
    }
    async getData() {
        const res = await queryCurrentActivity();
        if (res.data.code === 0) {
            this.setState({
                data: res.data.result.entities
            });
        }
    }
    render() {
        const Item = ({ id, imagePath }) => {
            return (
                <div>
                    <Link to={`/activity/list/${id}`} target="_blank">
                        <img src={imagePath} width="315" height="190" />
                    </Link>
                </div>
            );
        };

        return (
            <Carousel autoplay arrows={true} slidesToShow={3} slidesToScroll={1} dots={false} pauseOnHover={true}>
                {
                    this.state.data.map(item => {
                        const { id, imagePath } = item;
                        return <Item key={id} id={id} imagePath={imagePath} />
                    })
                }
            </Carousel>
        );
    }
}

export default SubSwiper;