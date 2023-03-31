// (1) - Personal Detail Validation:
const personalDetails = [];

function personalValidations() {
	
	var userName = document.querySelector("#nameId").value;
	var userEmail = document.querySelector("#emailId").value;
	var userMobile = document.querySelector("#telId").value;
	var userAddress = document.querySelector("#addressId").value;
	
		// [1] Name field validation:
	if ( userName.length == 0 ) {
		alert("Name is missing!");
		return;
	}

		// [2] Email field validation:
	if ( userEmail.length == 0 ) {
		alert("Email is missing!");
		return;
	}
	else if ( userEmail.indexOf("@") == -1 ) {
		alert("@ sign is missing in your email!");
		return;
	}
	
		// [3] Address area validation:
	if ( userAddress.length == 0 ) {
		alert("Home address is missing!");
		return;
	}
	
		// [4] Mobile No field validation:
	if ( userMobile.length == 0 ) {
		alert("Mobile number is missing!");
		return;
	}
	
	else if ( !(userMobile.length == 10) ) {
		alert("Invalid mobile number!");
		return;
	}
	else if ( (userMobile.length == 10) && ( isNaN(userMobile) == false ) ) {
		personalDetails.push("INVOICE");
		personalDetails.push(userName);
		personalDetails.push(userEmail);
		personalDetails.push(userMobile);
		personalDetails.push(" -------------- Invoice Details -------------- ");
		return;
	}
	
}


// (2) - Product Detail Calculation:

const finalProductDetails = [];

var sum = 0;
	// [1] Bags & Luggages:
function bagCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#bagTypeId").value;
	var brand = document.querySelector("#bagBrandId").value;
	var quantity = parseInt(document.querySelector("#bagQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#bagQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Bat Cover") || (type == "Wheelie Bag") || (type == "Duffle Bag") ) && ( (brand == "Gunn & Moore (GM)") || (brand == "Kookaburra") || (brand == "New Balance") ) ) {

		if ( (type == "Bat Cover") && (brand == "Gunn & Moore (GM)") ) {
			var price = 12 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat Cover - ");
			productDetail.push("[Gunn & Moore (GM)]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Bat Cover") && (brand == "Kookaburra") ) {
			var price = 15 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat Cover - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Bat Cover") && (brand == "New Balance") ) {
			var price = 10 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat Cover - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Wheelie Bag") && (brand == "Gunn & Moore (GM)") ) {
			var price = 36 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Wheelie Bag - ");
			productDetail.push("[Gunn & Moore (GM)]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Wheelie Bag") && (brand == "Kookaburra") ) {
			var price = 40 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Wheelie Bag - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Wheelie Bag") && (brand == "New Balance") ) {
			var price = 38 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Wheelie Bag - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Duffle Bag") && (brand == "Gunn & Moore (GM)") ) {
			var price = 40 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Duffle Bag - ");
			productDetail.push("[Gunn & Moore (GM)]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Duffle Bag") && (brand == "Kookaburra") ) {
			var price = 45 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Duffle Bag - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Duffle Bag") && (brand == "New Balance") ) {
			var price = 36 * quantity;
			document.querySelector("#bagPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Duffle Bag Bag - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
	
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [2] Bats:
function batCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#batTypeId").value;
	var brand = document.querySelector("#batBrandId").value;
	var quantity = parseInt(document.querySelector("#batQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#batQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Size 1") || (type == "Size 2") || (type == "Size 3") ) && ( (brand == "MRF") || (brand == "Kookaburra") || (brand == "SS") ) ) {

		if ( (type == "Size 1") && (brand == "MRF") ) {
			var price = 200 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 1 - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 1") && (brand == "Kookaburra") ) {
			var price = 275 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 1 - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 1") && (brand == "SS") ) {
			var price = 250 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 1 - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 2") && (brand == "MRF") ) {
			var price = 225 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 2 - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 2") && (brand == "Kookaburra") ) {
			var price = 300 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 2 - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 2") && (brand == "SS") ) {
			var price = 275 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 2 - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 3") && (brand == "MRF") ) {
			var price = 250 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 3 - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 3") && (brand == "Kookaburra") ) {
			var price = 325 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 3 - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Size 3") && (brand == "SS") ) {
			var price = 300 * quantity;
			document.querySelector("#batPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bat - Size 3 - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
	
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [3] Head Wears:
function headWearCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#headWearTypeId").value;
	var brand = document.querySelector("#headWearBrandId").value;
	var quantity = parseInt(document.querySelector("#headWearQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#headWearQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Helmets") || (type == "Caps") ) && ( (brand == "Adidas") || (brand == "Ayrtek") || (brand == "Gunn & Moore (GM)") ) ) {
		
		if ( (type == "Helmets") && (brand == "Adidas") ) {
			var price = 80 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Helmets - ");
			productDetail.push("[Adidas]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Helmets") && (brand == "Ayrtek") ) {
			var price = 75 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Helmets - ");
			productDetail.push("[Ayrtek]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Helmets") && (brand == "Gunn & Moore (GM)") ) {
			var price = 60 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Helmets - ");
			productDetail.push("[Gunn & Moore (GM)]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Caps") && (brand == "Adidas") ) {
			var price = 15 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Caps - ");
			productDetail.push("[Adidas]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Caps") && (brand == "Ayrtek") ) {
			var price = 12 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Caps - ");
			productDetail.push("[Ayrtek]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Caps") && (brand == "Gunn & Moore (GM)") ) {
			var price = 10 * quantity;
			document.querySelector("#headWearPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Caps - ");
			productDetail.push("[Gunn & Moore (GM)]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}

	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [4] Balls:
function ballCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#ballTypeId").value;
	var brand = document.querySelector("#ballBrandId").value;
	var quantity = parseInt(document.querySelector("#ballQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#ballQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Red") || (type == "Pink") || (type == "White") ) && ( (brand == "SS") || (brand == "Kookaburra") || (brand == "Gorton Shire)") ) ) {
		
		if ( (type == "Red") && (brand == "SS") ) {
			var price = 10 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Red ball - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Red") && (brand == "Kookaburra") ) {
			var price = 15 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Red ball - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Red") && (brand == "Gorton Shire") ) {
			var price = 12 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Red ball - ");
			productDetail.push("[Gorton Shire]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pink") && (brand == "SS") ) {
			var price = 12 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pink ball - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pink") && (brand == "Kookaburra") ) {
			var price = 17 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pink ball - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pink") && (brand == "Gorton Shire") ) {
			var price = 15 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pink ball - ");
			productDetail.push("[Gorton Shire]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "White") && (brand == "SS") ) {
			var price = 15 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("White ball - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "White") && (brand == "Kookaburra") ) {
			var price = 20 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("White ball - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "White") && (brand == "Gorton Shire") ) {
			var price = 18 * quantity;
			document.querySelector("#ballPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("White ball - ");
			productDetail.push("[Gorton Shire]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
	
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [5] Gloves:
function gloveCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#gloveTypeId").value;
	var brand = document.querySelector("#gloveBrandId").value;
	var quantity = parseInt(document.querySelector("#gloveQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#gloveQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Batting Gloves") || (type == "Keeping Gloves") ) && ( (brand == "SF") || (brand == "Kookaburra") || (brand == "SG") ) ) {
		
		if ( (type == "Batting Gloves") && (brand == "SF") ) {
			var price = 60 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Batting Gloves - ");
			productDetail.push("[SF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Batting Gloves") && (brand == "Kookaburra") ) {
			var price = 65 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Batting Gloves - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Batting Gloves") && (brand == "SG") ) {
			var price = 55 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Batting Gloves - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Keeping Gloves") && (brand == "SF") ) {
			var price = 65 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Keeping Gloves - ");
			productDetail.push("[SF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Keeping Gloves") && (brand == "Kookaburra") ) {
			var price = 70 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Keeping Gloves - ");
			productDetail.push("[Kookaburra]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Keeping Gloves") && (brand == "SG") ) {
			var price = 75 * quantity;
			document.querySelector("#glovePrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Keeping Gloves - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
		
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [6] Cloths:
function clothCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#clothTypeId").value;
	var brand = document.querySelector("#clothBrandId").value;
	var quantity = parseInt(document.querySelector("#clothQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#clothQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "T-Shirt (Size S)") || (type == "T-Shirt (Size M)") || (type == "T-Shirt (Size L)") || (type == "Long Sleeves (Size S)") || (type == "Long Sleeves (Size M)") || (type == "Long Sleeves (Size L)") || (type == "Pants (Size S)") || (type == "Pants (Size M)") || (type == "Pants (Size L)") ) && ( (brand == "SG") || (brand == "SS") ) ) {
	
		if ( (type == "T-Shirt (Size S)") && (brand == "SG") ) {
			var price = 45 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size S) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	
		else if ( (type == "T-Shirt (Size S)") && (brand == "SS") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size S) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "T-Shirt (Size M)") && (brand == "SG") ) {
			var price = 48 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size M) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "T-Shirt (Size M)") && (brand == "SS") ) {
			var price = 53 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size M) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "T-Shirt (Size L)") && (brand == "SG") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size L) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "T-Shirt (Size L)") && (brand == "SS") ) {
			var price = 55 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("T-Shirt (Size L) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size S)") && (brand == "SG") ) {
			var price = 47 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size S) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size S)") && (brand == "SS") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size S) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size M)") && (brand == "SG") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size M) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size M)") && (brand == "SS") ) {
			var price = 52 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size M) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size L)") && (brand == "SG") ) {
			var price = 53 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size L) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Long Sleeves (Size L)") && (brand == "SS") ) {
			var price = 55 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Long Sleeves (Size L) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size S)") && (brand == "SG") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size S) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size S)") && (brand == "SS") ) {
			var price = 45 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size S) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size M)") && (brand == "SG") ) {
			var price = 55 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size M) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size M)") && (brand == "SS") ) {
			var price = 50 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size M) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size L)") && (brand == "SG") ) {
			var price = 60 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size L) - ");
			productDetail.push("[SG]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Pants (Size L)") && (brand == "SS") ) {
			var price = 55 * quantity;
			document.querySelector("#clothPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pants (Size L) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
		
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [7] Pads:
function padCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#padTypeId").value;
	var brand = document.querySelector("#padBrandId").value;
	var quantity = parseInt(document.querySelector("#padQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#padQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Boys Size") || (type == "Youth Size") || (type == "Men's Size") ) && ( (brand == "New Balance") || (brand == "SS") || (brand == "MRF") ) ) {
	
		if ( (type == "Boys Size") && (brand == "New Balance") ) {
			var price = 70 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Boys Size) - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Boys Size") && (brand == "SS") ) {
			var price = 65 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Boys Size) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Boys Size") && (brand == "MRF") ) {
			var price = 75 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Boys Size) - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Youth Size") && (brand == "New Balance") ) {
			var price = 85 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Youth Size) - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Youth Size") && (brand == "SS") ) {
			var price = 80 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Youth Size) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Youth Size") && (brand == "MRF") ) {
			var price = 90 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Youth Size) - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Men's Size") && (brand == "New Balance") ) {
			var price = 100 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Men's Size) - ");
			productDetail.push("[New Balance]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Men's Size") && (brand == "SS") ) {
			var price = 90 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Men's Size) - ");
			productDetail.push("[SS]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Men's Size") && (brand == "MRF") ) {
			var price = 110 * quantity;
			document.querySelector("#padPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Pads (Men's Size) - ");
			productDetail.push("[MRF]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
	
	else {
		alert("Invalid Input!");
		return false;
	}
}

	// [8] Stumps:
function stumpsCartSelect() {
	
	const productDetail = [];
	
	var type = document.querySelector("#stumpsTypeId").value;
	var brand = document.querySelector("#stumpsBrandId").value;
	var quantity = parseInt(document.querySelector("#stumpsQuantityId").value);
	
	if ( ( quantity == 0 ) || ( (document.querySelector("#stumpsQuantityId").value) == ""  ) ) {
		alert("Minimum quantity needs to be [1] inorder to add!");
		return false;
	}
	
	if ( ( (type == "Bails") || (type == "Stumps") ) && ( (brand == "Zings") || (brand == "Fusion") ) ) {
		
		if ( (type == "Bails") && (brand == "Zings") ) {
			var price = 20 * quantity;
			document.querySelector("#stumpsPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bails - ");
			productDetail.push("[Zings]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Bails") && (brand == "Fusion") ) {
			var price = 15 * quantity;
			document.querySelector("#stumpsPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Bails - ");
			productDetail.push("[Fusion]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Stumps") && (brand == "Zings") ) {
			var price = 35 * quantity;
			document.querySelector("#stumpsPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Stumps - ");
			productDetail.push("[Zings]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
		
		else if ( (type == "Stumps") && (brand == "Fusion") ) {
			var price = 30 * quantity;
			document.querySelector("#stumpsPrice").innerHTML = "Price: "+"&#163;"+price;
			
			productDetail.push("Stumps - ");
			productDetail.push("[Fusion]");
			productDetail.push(quantity);
			productDetail.push(price);
			
			finalProductDetails.push(productDetail);
			
			sum = sum + price;
			document.querySelector("#total").innerHTML = "Total: "+"&#163;"+sum;
		}
	}
	
	else {
		alert("Invalid Input!");
		return false;
	}
}


// (3) - Calculating the total & Displaying the Invoice:

function checkOut() {
	
	personalValidations(); // Calling personalValidations function
	
	var invoicePersonalDetails = "";
	invoicePersonalDetails = invoicePersonalDetails + "<br><p class=invoiceHeader >"+personalDetails[0]+"</p>" + "<p class=invoicePersonal >Name: "+personalDetails[1]+"</p>" + "<p class=invoicePersonal >Email: "+personalDetails[2]+"</p>" + "<p class=invoicePersonal >Mobile No: "+personalDetails[3]+"</p>" + "<p class=invoiceDetailHeader >"+personalDetails[4]+"</p>";
	
	var invoiceDetails = "";
	var prices = 0;
	for ( x = 0; x < finalProductDetails.length; x = x + 1 ) {
		
		const innerList = finalProductDetails[x]
		
		invoiceDetails = invoiceDetails + "<p class=productTitle >Product: "+innerList[0]+" "+innerList[1]+"</p>" + "<p>Quantity: "+innerList[2]+"</p>" + "<p>Price: &#163;"+innerList[3]+"</p>"+"<br>";
		prices = prices + innerList[3];
	}
	
	if ( ( prices != 0 ) && ( personalDetails.length == 5 ) ) {
		document.querySelector("#invoice").innerHTML = invoicePersonalDetails + invoiceDetails + "<p class=totalBill >Total Bill: &#163;"+prices+"</p>";
	}
}