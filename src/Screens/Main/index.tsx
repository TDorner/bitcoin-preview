import * as React from "react";
import {FunctionComponent, PropsWithChildren, useState} from "react";
import {ContentTypes} from "../../Common/CommonTypes";
import NavigationBar from "../../Components/NavigationBar";
import Content from "../../Components/Content";
import './styles.css';


interface IProps {}

const Main: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
	
	const [contentTypeState, setContentTypeState] = useState<ContentTypes>(ContentTypes.Overview);

    return (
        <div className='mainContainer'>
        	<NavigationBar changeContent={setContentTypeState} />
			<Content contentType={contentTypeState} />
		</div>
    );
}

export default Main;