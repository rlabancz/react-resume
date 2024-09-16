import {Component} from "react";

export class ProfilePicture extends Component {

    render() {
        const {data} = this.props;
        return (
            data ?
                (data.picture && data.picture !== '') ?
                    <div className={`profilePictureContainer`}>
                        <img className={`profileImage`} src={data.picture} alt={`image of ${data.name}`}/>
                    </div>
                    : null
                : <></>
        );
    }
}

export default ProfilePicture;