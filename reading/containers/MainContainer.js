/**
 * Created by tiger on 16/6/29.
 */

import React from 'react';
import {connect} from 'react-redux';
import Main from '../pages/Main';
import Storage from '../utils/Storage';

let typeIds = [0, 12, 9, 2];

class MainContainer extends React.Component {
	componentDidMount() {
		Storage.get('isInit')
			.then((isInit) => {
				if (!isInit) {
					Storage.save('typeIds', typeIds);
					Storage.save('isInit', true);
				}
			});
	}

	render() {
		return (
			<Main {...this.props}/>
		);
	}
}

/**
 *
 * MainContainer只需要read，不需要category
 *
 * @param state
 * @returns {{read: *}}
 */
function mapStateToProps(state) {
	const {read} = state;
	return {
		read
	}
}

export default connect(mapStateToProps)(MainContainer);