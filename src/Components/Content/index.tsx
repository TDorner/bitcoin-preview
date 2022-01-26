import * as React from "react";
import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {ContentTypes} from "../../Common/CommonTypes";
import Overview from "../Overview";
import Details from "../Details";
import Converter from "../Converter";
import Diagram from "../Diagram";
import Profile from "../Profile";
import './styles.css'

interface IProps {
	contentType: ContentTypes
}

const Content: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
	return (
        <div className={'contentContainer'}>
			{props.contentType === ContentTypes.Overview &&
				<Overview />
			}
			{props.contentType === ContentTypes.Details &&
	        	<Details />
			}
			{props.contentType === ContentTypes.Converter &&
				<Converter/>
			}
			{props.contentType === ContentTypes.Diagram &&
	        	<Diagram/>
			}
			{props.contentType === ContentTypes.Profile &&
	        	<Profile/>
			}
        </div>
    );
}

export default Content;