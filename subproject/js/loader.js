document.getElementById("header").innerHTML=`
        <div class="flex header item-center wrapable">
			<div class="logo">
				<img src="./image/logo.jpg"/>
			</div>
			<div class="flex submenu wrapable text-center" style="width: 60%; justify-content: space-around">
                <div class="flex wrapable" style="width: 48%">
                    <a href="./index.html" class="menu">HOME</a>
                    <a href="./watch.html" class="menu">WATCHES</a>
                    <a href="./about.html" class="menu">ABOUT</a>
                    <a href="./contact_us.html" class="menu">CONTACT US</a>
                </div>
			</div>
			<div class="flex wrapable float-right option" style="width: 20%;">
					<div><img src="./image/user.png" /></div>
					<div><img src="./image/shop.png" /></div>
					<div><img src="./image/settings.png" /></div>
			</div>
		</div>
`;

document.getElementById("footer").innerHTML=`
        <div class="footer">
				<div class="footer-container flex2 wrapable">
					<div class="footer-menu wrapable">
						<!--Col 1-->
						<div class="footer-menu-col">
							<div class="foooter-about">
								<h4>About</h4>
								<ul>
									<li>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</li>
									<li>
										<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
										<a href="#"><i class="fa-brands fa-twitter"></i></a>
										<a href="#"><i class="fa-brands fa-instagram"></i></a>
										
									</li>
								</ul>
							</div>
							
						</div>
						
						<!--Col 2-->
						<div class="footer-menu-col">
							<div class="footer-reach-at">
								<h4>Reach at</h4>
								<ul>
									<li><i class="fa-solid fa-location-dot"></i> <span> Location </span></li>
									<li><i class="fa-solid fa-phone"></i> <span> Call +01234567890 </span></li>
									<li><i class="fa-solid fa-envelope"></i> <span> teamwork@gmail.com </span></li>
								</ul>                        
							</div>
						</div>
						<!--Col 3-->
						<div class="footer-menu-col">
							<div class="footer-subcribe">
								<h4>Subscribe</h4>
								<form action="#">
									<input type="text" placeholder="Enter Email">
									<button type="submit">Subcribe</button>
								</form>
							</div>
							
						</div>
					</div>
		
					<div class="footer-copyright">
						<p>&#169 2023 All Rights Reserved By Teamcake</p>
					</div>
				</div>

		</div>
`;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
  return min + Math.floor(Math.random() * (max-min));
}

function clockshow(e, imgs, names) {
	var arrays = [ "a", "b", "c", "d", "e", "f", "g" ];
	console.log("head");
	var text = "";
	text += `<div class="grid-container">`;
	for (var i = 0; i < 7; i++) {
		var p = getRandomInt2(300, 1200);
		var feat = "";
		if (i == 0 || getRandomInt(2) == 0)
			feat += `<div class="wlabel">Featured</div>`;
	    console.log(arrays[i]);
		text += `
                <div class="${arrays[i]}">
                    <div class="wimage"><img src="${imgs[i]}" /></div>
                    <div class="winfo flex">
                        <div class="wname"><b>${names[i]}</b></div>
                        <div class="wprice"><b>Price: ${p}$</b></div>
                    </div>
                    ${feat}
                </div>`;
	}
	console.log("end");
	text += `</div>`;
	e.innerHTML += text;
}


// my JQuery code

$(document).ready(function(){
    if(window.matchMedia("(max-width: 767px)").matches){
		$(".img-box").hide();
		$(".grid-container").css("grid-template-areas", "\"a\" \"b\" \"c\" \"d\" \"e\" \"f\" \"g\"");
    } else {
		$(".img-box").show();
	}
});

var watchList = [ "Rolex Submariner", "Casio G-Shock", "Timex Weekender", "Fossil Grant", "Tissot V8", "Seiko Prospex", "Bulova Marine Star", "Citizen Eco-Drive", "Omega Seamaster", "Tag Heuer Aquaracer", "Invicta Pro Diver", "Swatch Sistem51", "Hamilton Khaki Field", "Breitling Avenger", "Bell & Ross Aviation", "Longines HydroConquest", "Oris Aquis", "Orient Mako", "Vostok Amphibia", "Luminox Navy Seal", "Fortis B-42", "Sinn U1", "Glycine Combat Sub", "Ball Engineer Master II", "Certina DS Action Diver", "Maurice Lacroix Pontos", "Baume et Mercier Clifton Club", "Rado HyperChrome Captain Cook", "Junghans Max Bill", "Chopard Mille Miglia", "IWC Aquatimer", "Panerai Luminor", "Jaeger-LeCoultre Polaris", "Ulysse Nardin Marine", "Breguet Marine", "Zenith Pilot", "Franck Muller Long Island", "Eterna Kontiki", "Corum Admiral", "Mido Ocean Star", "Tudor Heritage Black Bay", "Raymond Weil Freelancer", "Baume et Mercier Classima", "Hamilton Ventura", "Seiko Presage", "Victorinox Swiss Army Maverick", "Christopher Ward C60 Trident", "Frederique Constant Classics", "Sinn 356", "Alpina Alpiner", "Glycine Airman", "Ball Engineer III", "Rado DiaMaster", "Perrelet First Class", "U-Boat Classico", "Torgoen T16", "Citizen Promaster", "Oris Big Crown", "Longines Master Collection", "Breitling Colt", "TAG Heuer Formula 1", "Bell & Ross Vintage", "Zenith Defy", "Movado Bold", "Skagen Holst", "Bulova Accutron II", "Armani Exchange Hampton", "Diesel Little Daddy", "Guess Maverick", "Michael Kors Bradshaw", "Emporio Armani Renato", "Marc Jacobs Riley", "Nixon Sentry", "Tommy Hilfiger Lexington", "Hugo Boss Jet", "Lacoste 12.12", "Swatch Irony", "Mondaine Classic", "Braun BN0021", "Shinola Runwell", "Rosefield The Bowery", "Olivia Burton Wonderland", "Kate Spade Park Row", "MVMT Classic", "Daniel Wellington Classic Oxford", "Larsson & Jennings Saxon", "Miansai M24", "Timex Expedition Metal Field", "Triwa Nevil", "Shore Projects Project 2", "Corniche Heritage 40", "Void PKG01", "Komono Winston", "Maurice De Mauriac L1", "Uniform Wares M40", "Jaques Lemans Nostalgie", "Paul Smith Baber", "Skagen Hald", "Sevenfriday P3", "Suunto 5" ];

var list = ["./image/shopping_0.webp", "./image/shopping_1.webp", "./image/shopping_2.webp", "./image/shopping_3.webp", "./image/shopping_4.webp", "./image/shopping_5.webp", "./image/shopping_6.webp"]

function create_random_list() {
	var L = [];
	for (var i=0;i<7;i++)
		L.push(list[getRandomInt(list.length)]);
	return L;
}

function create_random_name() {
	var L = [];
	for (var i=0;i<7;i++)
		L.push(watchList[getRandomInt(watchList.length)]);
	return L;
}

clockshow(document.getElementById("show"), create_random_list(), create_random_name());

$("#show_more").click(function(){
	clockshow(document.getElementById("show"), create_random_list(), create_random_name());
});