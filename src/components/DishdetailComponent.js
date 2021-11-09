import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);

        console.log(props);
        
        // stores iproperties of this component
        this.state = {
            selectedDishDetail: this.props.dsdetail
        };


    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments == null) {
            return (<div></div>)
        }
        const all_comments = comments.map(entry => {
            return (
                <li key={entry.id}>
                    <h7>
                    {entry.comment}<br></br><br></br>
                    <h7>--</h7>{entry.author}<h7>, </h7>
                    {entry.date}<br></br><br></br>
                    </h7> 
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {all_comments}
                </ul>
            </div>
        )
    }


    render(){
        const dish = this.props.dish
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }

}

export default DishDetail;