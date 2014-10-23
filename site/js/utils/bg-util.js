/**
 * Random images pairs for background
 */
var bgUtil = {
	promoArrays:  [
		[ "01.jpg", "02.jpg"   ],
		[ "03.jpg", "07.jpg"   ],
		[ "04.jpg", "08.jpg" ],
		[ "05.jpg", "02.jpg" ],
		[ "06.jpg", "07.jpg" ],
		[ "09.jpg", "08.jpg" ],
		[ "10.jpg", "11.jpg" ],
		[ "12.jpg", "17.jpg" ],
		[ "13.jpg", "15.jpg" ],
		[ "14.jpg", "15.jpg" ],
		[ "17.jpg", "19.jpg" ],
		[ "15.jpg", "07.jpg" ],
		[ "16.jpg", "07.jpg" ],
		[ "18.jpg", "17.jpg" ],
		[ "19.jpg", "18.jpg" ],
		[ "20.jpg", "25.jpg" ],
		[ "23.jpg", "22.jpg" ],
		[ "24.jpg", "17.jpg" ],
		[ "30.jpg", "25.jpg" ],
		[ "27.jpg", "22.jpg" ],
		[ "28.jpg", "23.jpg" ],
		[ "29.jpg", "16.jpg" ]
	],

	render: function (){
		var promoArrays = this.promoArrays;
		var randomArray = promoArrays[Math.floor(Math.random() * 100 * promoArrays.length) % promoArrays.length];

		var bgs = '';

		for(var i in randomArray) {
			bgs += '<img src="assets/img/bg/'+ randomArray[i] +'" alt="bg">';
		}

		$('#bg-images').html(bgs);
	}
}
