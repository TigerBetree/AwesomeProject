/**
 * Created by tiger on 16/6/29.
 */

import React, {
	PropTypes
} from 'react';
import {
	View,
	StyleSheet,
	ListView
} from 'react-native';

const propTypes = {
	items: PropTypes.array,
	renderItem: PropTypes.func,
	style: PropTypes.func,
	itemsPerRow: PropTypes.number,
	onEndReached: PropTypes.func
};

class GridView extends React.Component {
	// 构造
	constructor(props) {
		super(props);
		this.renderGroup = this.renderGroup.bind(this);
		this.groupItems = this.groupItems.bind(this);
	}

	groupItems(items, itemsPerRow) {
		var itemsGroups = [];
		var group = [];
		items.forEach(function (item) {
			if (group.length === itemsPerRow) {
				itemsGroups.push(group);
				group = [item];
			} else {
				group.push(item);
			}
		});
		if (group.length > 0) {
			itemsGroups.push(group);
		}

		return itemsGroups;
	}

	renderGroup(group) {
		let that = this;
		var items = group.map(function (item) {
			return that.props.renderItem(item);
		});

		return (
			<View style={styles.group}>
				{items}
			</View>
		)
	}

	render() {
		var groups = this.groupItems(this.props.items, this.props.itemsPerRow);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return (
			<ListView
				initialListSize={1}
				dataSource={ds.cloneWithRows(groups)}
				renderRow={this.renderGroup}
				style={this.props.style}
				enableEmptySections={true}
				onEndReached={this.props.onEndReached}
				scrollEnabled={this.props.scrollEnabled}
				pageSize={this.props.pageSize | 1}
			/>
		);
	}
}

let styles = StyleSheet.create({
	group: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

GridView.propTypes = propTypes;

GridView.defaultProps = {
	items: [],
	renderItem: null,
	style: undefined,
	itemsPerRow: 1,
	onEndReached: undefined
};

export default GridView;