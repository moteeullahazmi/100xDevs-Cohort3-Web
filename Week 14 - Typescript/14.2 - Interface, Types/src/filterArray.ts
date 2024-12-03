interface UserF {
	firstName: string;
	lastName: string;
	age: number;
}

function filterUser(userF:UserF[]){
    let ans = [];
    for(let i =0; i<userF.length ; i++){
        if(userF[i].age> 18){
            ans.push(userF[i])
        }
    }
    return ans;
}

const filterredUser = filterUser([
    {
        firstName: "Moteeullah",
        lastName: "Azmi",
        age: 24
    }
])

console.log(filterredUser)