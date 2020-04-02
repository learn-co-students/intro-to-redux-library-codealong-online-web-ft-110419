export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log(`Current length of the items list is ${state.items.length}`)
			console.log(`Length of the items list will be ${state.items.length + 1}`)
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log(`Original length of the items list is ${state.items.length}`)
			return state;
	}
}
