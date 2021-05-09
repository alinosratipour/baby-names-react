  
const FilterGender = {
	boy: function (arr) {
		return arr.filter(name => name.sex === 'm')
	},
	girl: function (arr) {
		return arr.filter(name => name.sex === 'f')
	},
	showAll: function (arr) {
		return arr;
	}
}

export default FilterGender;