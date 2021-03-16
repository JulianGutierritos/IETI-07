import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from "moment";

export class Todo extends React.Component {


    render() {
        let iconCard;
        if (this.props.status === "Ready"){
            iconCard =  <CheckCircleIcon style={{position:'sticky', left:'95%', color:'green'}}>
                            </CheckCircleIcon>
        }
        else if (this.props.status === "Done"){
            iconCard =  <ThumbUpIcon style={{position:'sticky', left:'95%', color:'blue'}}>
                            </ThumbUpIcon>
        }
        else{
            iconCard =  <WatchLaterIcon  style={{position:'sticky', left:'95%', color:'yellow'}}>
                            </WatchLaterIcon >
        }

        return (
            <Card variant="outlined" style={{marginLeft:'40%', marginTop:'2%', width:'20%', borderWidth: 3, borderColor:'black'}}>
                <CardContent style={{textAlign:'left'}}>
                    <div style={{display:'flex'}} >
                        <Typography>{this.props.description}</Typography>
                        {iconCard}
                    </div>
                    <Typography>{this.props.status} - {moment(this.props.dueDate, "DD-MM-YYYY").format('DD-MM-YYYY')}</Typography>
                    <Typography>{this.props.responsible.name}</Typography>
                </CardContent>
            </Card>
        );
    }

}