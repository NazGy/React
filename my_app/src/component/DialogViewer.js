import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "../css/Dialog.css"
import ReactPlayer from "react-player"

export default function DialogViewer(props) {

    return (
        <Dialog fullWidth={true} maxWidth={"md"} open={props.open} onClose={props.onClose}>
            <div class="column">
                <DialogTitle>{props.title}</DialogTitle>
                <ScrollableTabsButtonAuto items={props.items}></ScrollableTabsButtonAuto>
            </div>
        </Dialog>
    )
}

function ScrollableTabsButtonAuto(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div class="column" style={{ width: "100%" }}>
            {props.items.map((item, index) => {
                console.log(value !== index)
                return (
                    item.includes(".png") ?
                        <img hidden={value !== index} src={item} class="dialog_image"></img> :
                        <div hidden={value !== index} ><ReactPlayer url={item}/></div>
                        )
            })}
            <div style={{ width: '100%', marginTop: "15px", marginBottom: "15px" }} class="column">
                <Tabs
                    value={value}
                    TabIndicatorProps={{style: {background:'#23251C', height: '3px'}}}
                    onChange={handleChange}
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    style={{paddingLeft: '10px'}}
                >
                    {
                        props.items.map(item => {
                            return (
                                item.includes(".png") ?
                                    <Tab icon={<img src={item} style={{ width: "75px" }} />} /> :
                                        <Tab label="video"/> )
                        })
                    }
                </Tabs>
            </div>
        </div>
    );
}
