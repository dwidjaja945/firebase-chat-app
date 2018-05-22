import React , { Component } from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';

class Chat extends Component {  
    componentDidMount() {
        db.ref('/chat-log').on( 'value' , ( snapshot ) => {
            this.props.updateChat( snapshot.val() );
        } );
    }

    render() {

        const { chatLog } = this.props;

        const chatElements = Object.keys( chatLog ).map( (key, index) => {
            const { name , message } = chatLog[key];
            return (
                <li key={key} className="collection-item" ><b>{name}: </b> {message} </li>
            )
        });

        console.log( 'Chat Log : ' , this.props.chatLog);
        return(
            <div>
                <h1 className="center">Chat Room</h1>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        chatLog: state.chat.log
    };

};

export default connect( mapStateToProps , { updateChat } )(Chat);