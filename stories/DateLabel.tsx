import * as React from 'react';

import './DateLabel.scss';

export interface dateProps { 
	fullDate: Date;
	onClick?:() => {};
}

export class DateLabel extends React.Component<dateProps, any> {
    render() {
		const fullDate = this.props.fullDate;
		
		const day: number = fullDate.getDay();
		const date: number = fullDate.getDate();
		const daysArr: string[] = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
		
		return <div className="DateLabel">
				<label onClick={this.props.onClick}> <b>{daysArr[day]} {date}</b> </label>
			</div>;
    }
}

export default DateLabel;