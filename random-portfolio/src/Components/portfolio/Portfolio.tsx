import { Stack, Image, Text } from "@fluentui/react";
import React from "react";
import { IUser } from "../../Interfaces/IUser";
import "./Portfolio.css";
import { FontIcon, IIconProps } from '@fluentui/react/lib/Icon';
import { IconButton } from '@fluentui/react/lib/Button';
import { Mappings } from "../../Utils/Mappings";
import moment from "moment";

interface IStatePortfolio{
    currentText: string;
    currentTextValue: string;
}

interface IPropsPortfolio{
    currentUser: IUser;
}

export default class Portfolio extends React.Component<IPropsPortfolio,IStatePortfolio> {

    constructor(props:IPropsPortfolio){
        super(props);
        this.state={
            currentText: "",
            currentTextValue: ""
        }
    }

    componentDidMount(){
        this._onClickIconButton("Name")
    }

    public render(){
        return(
            <Stack horizontalAlign="center">
                <Stack className={"marginHeaderStack imageStack"}>
                    <Image loading="lazy" className={"image"} src={this.props.currentUser.img} alt="Profile Image" ></Image>
                </Stack>

                <Stack className={"marginStack"} horizontalAlign="center">
                   <Text variant="large">{this.state.currentText}</Text>
                   <Text variant="superLarge">{this.state.currentTextValue}</Text>
                </Stack>

                <Stack className={"iconStack marginStack"}>
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "Contact"}}
                    title="Name"
                    ariaLabel="Name"
                    onMouseOver={()=>{this._onClickIconButton("Name")}}
                    />
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "Mail"}}
                    title="Mail"
                    ariaLabel="Mail"
                    onMouseOver={()=>{this._onClickIconButton("Mail")}}
                    />
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "Calendar"}}
                    title="Birthday"
                    ariaLabel="Birthday"
                    onMouseOver={()=>{this._onClickIconButton("Birthday")}}
                    />
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "MapPin"}}
                    title="Address"
                    ariaLabel="Address"
                    onMouseOver={()=>{this._onClickIconButton("Address")}}
                    />
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "Phone"}}
                    title="Phone"
                    ariaLabel="Phone"
                    onMouseOver={()=>{this._onClickIconButton("Phone")}}
                    />
                    <IconButton
                    className="icon"
                    iconProps={{iconName: "Lock"}}
                    title="Password"
                    ariaLabel="Password"
                    onMouseOver={()=>{this._onClickIconButton("Password")}}
                    />
                </Stack>
    
            </Stack>
        )
    }

    private _onClickIconButton = (choice: string) => {
        let firstField = "";
        let secondField = "";

        switch(choice){
            case "Name":
                firstField = Mappings.nameUser;
                secondField = this.props.currentUser.first+" "+this.props.currentUser.last;
                break;
            case "Mail":
                firstField = Mappings.emailUser;
                secondField = this.props.currentUser.email;
                break;
                case "Birthday":
                firstField = Mappings.birthdayUser;
                secondField = moment(this.props.currentUser.birthday).format("MM/DD/yyyy");
                break;
            case "Address":
                firstField = Mappings.addressUser;
                secondField = this.props.currentUser.address;
                break;

            case "Phone":
                firstField = Mappings.phoneUser;
                secondField = this.props.currentUser.phone;
                break;
            case "Password":
                firstField = Mappings.passwordUser;
                secondField = this.props.currentUser.password;
                break;
            default:
                break;
        }

        this.setState({
            ...this.state,
            currentText: firstField,
            currentTextValue: secondField
        });
    }
}