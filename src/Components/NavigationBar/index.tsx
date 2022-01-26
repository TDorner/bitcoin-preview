import * as React from "react";
import {FunctionComponent, PropsWithChildren} from "react";
import {ContentTypes} from "../../Common/CommonTypes";
import './styles.css';

const bitcoinImg = require('../../Assets/bitcoin-logo.png');

interface IProps {
	changeContent: (contentType: ContentTypes) => void
}

const NavigationBar: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={'navigationContainer'}>
			<div className={'imgContainer'}>
				<img src={bitcoinImg} className={'img'} alt={'bitcoin'} />
			</div>
			<div className={'navItemContainer'}>
				<div
					className={'navItem'}
					onClick={() => props.changeContent(ContentTypes.Overview)}>
					<p>Overview</p>
				</div>
				<div
					className={'navItem'}
					onClick={() => props.changeContent(ContentTypes.Details)}>
					<p>Details</p>
				</div>
				<div
					className={'navItem'}
					onClick={() => props.changeContent(ContentTypes.Converter)}>
					<p>Converter</p>
				</div>
				<div
					className={'navItem'}
					onClick={() => props.changeContent(ContentTypes.Diagram)}>
					<p>Chart</p>
				</div>
				<div
					className={'navItem'}
					onClick={() => props.changeContent(ContentTypes.Profile)}>
					<p>Profile</p>
				</div>
			</div>
        </div>
    );
}

export default NavigationBar;