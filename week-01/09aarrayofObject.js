const users = [
	{
		name: "Harkirat",
		age: 21
	}, 
	{
		name: "raman",
		age: 22
	}
]

let filterAge = users.filter(function(user){
	return user.age>18
})

console.log(filterAge)