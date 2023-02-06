
const email = req.body.email;
const firstName = req.body.firstName;
const lastName = req.body.lastName;
const age = req.body.age;
const favoriteFoods = req.body.favoriteFoods;


const userInfo = {
    email,
    firstName,
    lastName,
    age,
    favoriteFoods,
    fullName: firstName + lastName,
    createdAt: new Date(),
    lastModified: new Date(),
};


let userInfoValidation = (userInfo) => {

	if (userInfo.firstName === undefined || typeof(userInfo.firstName) !== "string") {
		return {
			isValid: false,
			message: "First name needs to be inputed as a string"
		}
	}

	if (userInfo.lastName === undefined || typeof(userInfo.lastName) !== "string") {
			isValid: false,
			message; "Last name needs to be inputed as a string"
		}
	}
    if (userInfo.email === undefined || typeof(userInfo.email) !== "string") {
		return {
			isValid: false,
			message: "Email needs to be inputed as a string"
		}

	if (userInfo.age !== undefined && typeof(userInfo.age) !== "number") {
		return {
			isValid: false,
			message: "Age needs to be inputed as a number"
		}
	}









	let isValid = true;
	
	userInfo.favoriteFoods.forEach(food => {
		
		if (typeof(food) !== "string" ) {
				isValid = false;
			}
	})

	if (isValid === false){
            
		return {
		isValid: false,
		message: "Food needs to be inputed as a string"
		}
	  }
	
	if (userInfo.favoriteFoods === undefined || !Array.isArray(userInfo.favoriteFoods) || userInfo.favoriteFoods.length === 0 ) {
		return {
			isValid: false,
			message: "favorite foods should be inputed as an array of strings"
		}
	}

	



	let stringFoods = userInfo.favoriteFoods.filter((favoriteFood)=>{
		if (typeof(favoriteFood) !== 'string') {
			return true
		} else {
			return false
		}
	})
	console.log("stringFoods ", stringFoods)

	if (stringFoods.length > 0) {
		return {
			isValid: false,
			message: "favorite foods should be inputed as an array of strings"
		}
	}
	return {
		isValid: true
	}








module.exports = {
	userInfoValidation,
}}
