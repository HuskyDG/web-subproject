document.getElementById("header").innerHTML=`
		<div id="modal"></div>
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
					<div data-toggle="modal" data-target="#login-register"><img src="./image/user.png" /></div>
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

document.getElementById("modal").innerHTML = `<div class="modal fade" id="login-register">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <ul class="nav nav-pills nav-justified mb-4" id="myTab" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <form action="">
                                    <div class="text-center mt-2 mb-2">
                                        <p>Connect with:</p>
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-facebook-f"></i>
                                        </button>
                                
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-google"></i>
                                        </button>
                                
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-twitter"></i>
                                        </button>
                                        
                                    </div>

                                    <p class="text-center">or:</p>

                                    <div class="form-group form-outline">
                                        <label for="">Email or username:</label>
                                        <input type="text" name="loginName" id="loginName" class="form-control" placeholder="Email or username">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password:</label>
                                        <input type="password" name="txt_name" id="txt_name" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-6 d-flex justify-content-center">
                                          <!-- Checkbox -->
                                          <div class="form-check mb-3 mb-md-0">
                                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                            <label class="form-check-label" for="loginCheck"> Remember me </label>
                                          </div>
                                        </div>
                                
                                        <div class="col-md-6 d-flex justify-content-center">
                                          <!-- Simple link -->
                                          <a href="#!">Forgot password?</a>
                                        </div>
                                      </div>
                                    <button class="btn btn-primary btn-block">Log in</button>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                <form action="">
                                    <div class="text-center mt-2 mb-2">
                                        <p>Connect with:</p>
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-facebook-f"></i>
                                        </button>
                                
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-google"></i>
                                        </button>
                                
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                          <i class="fab fa-twitter"></i>
                                        </button>
                                        
                                    </div>

                                    <p class="text-center">or:</p>

                                    <div class="form-group">
                                        <label for="">Name:</label>
                                        <input type="text" name="txt_name" id="txt_name" class="form-control" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Username:</label>
                                        <input type="text" name="txt_username" id="txt_username" class="form-control" placeholder="Username">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Email:</label>
                                        <input type="email" name="txt_email" id="txt_email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password:</label>
                                        <input type="password" name="txt_password" id="txt_password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="">Repeat password:</label>
                                        <input type="password" name="txt_repeat-password" id="txt_repeat-password" class="form-control" placeholder="Repeat password">
                                    </div>
                                    <div class="form-check text-center mb-3">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" />
                                        <label class="form-check-label" for="registerCheck">
                                          I have read and agree to the terms
                                        </label>
                                    </div>

                                    <button class="btn btn-primary btn-block">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
  return min + Math.floor(Math.random() * (max-min));
}


// my JQuery code
function load_style() {
	$(document).ready(function(){
		$(".img-box").hide();
		if(window.matchMedia("(max-width: 767px)").matches){
			$(".grid-container").css("grid-template-areas", "\"a\" \"b\" \"c\" \"d\" \"e\" \"f\" \"g\" \"h\" \"i\" \"k\" \"l\"");
			$(".grid-container-2").css("grid-template-areas", "\"a\" \"b\" \"c\" \"d\" \"e\" \"f\" \"g\" \"h\" \"i\" \"k\" \"l\" \"m\"");
		} else if(window.matchMedia("(max-width: 1100px)").matches) {
			$(".grid-container").css("grid-template-areas", "\"a a\" \"b c\" \"d e\" \"f g\" \"h i\" \"k l\"");
			$(".grid-container-2").css("grid-template-areas", "\"a b\" \"c d\" \"e f\" \"g h\" \"i k\" \"l m\"");
		} else {
			$(".img-box").show();
			$(".grid-container").css("grid-template-areas", "\"a a b c\" \"d e f g\" \"h i k l\"");
			$(".grid-container-2").css("grid-template-areas", "\"a b c d\" \"e f g h\" \"i k l m\"");
		}
	});
}

$(window).on('resize', function() {
   load_style();
});


function clockshow(e, imgs, names, type) {
	var arrays = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l" ];
	var text = "";
	if (type == 1) {
		arrays.push("m");
	    text += `<div class="grid-container grid-container-2">`;
	} else {
		text += `<div class="grid-container">`
	}
	for (var i = 0; i < arrays.length; i++) {
		var p = getRandomInt2(300, 1200);
		var feat = "";
		if (i == 0 || getRandomInt(2) == 0)
			feat += `<div class="wlabel">Featured</div>`;
		text += `
                <div class="${arrays[i]}">
                    <div class="wimage"><img src="${imgs[i]}" /></div>
                    <div class="winfo flex wrapable">
                        <div class="wname"><b>${names[i]}</b></div>
                        <div class="wprice"><b>Price: ${p}$</b></div>
                    </div>
                    ${feat}
                </div>`;
	}
	text += `</div>`;
	e.innerHTML += text;
	load_style();
}


var watchList = ["Time Master", "Silver Moon", "Black Knight", "Golden Hour", "Steel Titan", "Blue Ocean", "Red Cheetah", "Phantom Black", "Sky Blue", "Carbon Fiber", "White Knight", "Rogue Black", "Deep Sea", "Midnight Sun", "Ice Blue", "Gold Rush", "Racing Green", "Dark Knight", "Electric Blue", "Crimson Red", "White Ice", "Diamond Cut", "Jet Black", "Sky High", "Red Storm", "True Blue", "Stealth Black", "Golden Sun", "Emerald Green", "Polar White", "Ocean Blue", "Black Ice", "Victory Gold", "Thunder Blue", "Solar Silver", "Blackout", "Flame Red", "Frost Blue", "Carbon Black", "Ocean Wave", "Pure Silver", "Military Green", "Night Sky", "Racing Red", "Arctic White", "Olive Green", "Electric Green", "Desert Sand", "Rose Gold", "Aqua Blue", "Dragon Red", "Power Blue", "Black Panther", "Cherry Red", "Graphite Grey", "Neon Green", "Cobalt Blue", "Classic Black", "Platinum Grey", "Baby Blue", "Coral Pink", "Rustic Brown", "Vintage Gold", "Royal Blue", "Chocolate Brown", "Teal Green", "Caramel Brown", "Lavender Purple", "Navy Blue", "Tangerine Orange", "Forest Green", "Cerulean Blue", "Wine Red", "Pastel Pink", "Burnt Orange", "Gunmetal Grey", "Lemon Yellow", "Peacock Blue", "Merlot Red", "Sage Green", "Canary Yellow", "Mocha Brown", "Lilac Purple", "Turquoise Blue", "Mahogany Brown", "Bubblegum Pink", "Sapphire Blue", "Scarlet Red", "Olive Drab", "Sea Foam Green", "Lilac Lavender", "Mustard Yellow", "Dusky Rose", "Mint Green", "Maroon Red", "Electric Purple", "Taupe Brown", "Bubblegum Blue", "Cardinal Red", "Dusty Blue"];

var list = ["./image/shopping (1).png",
"./image/shopping (2).png",
"./image/shopping (3).png",
"./image/shopping (4).png",
"./image/shopping (5).png",
"./image/shopping (6).png",
"./image/shopping (7).png",
 "./image/w1.png",
 "./image/w2.png",
 "./image/w3.png",
 "./image/w4.png",
 "./image/w5.png",
 "./image/w6.png" ]

function create_random_list() {
	var L = [];
	for (var i=0;i<12;i++)
		L.push(list[getRandomInt(list.length)]);
	return L;
}

function create_random_name() {
	var L = [];
	for (var i=0;i<12;i++)
		L.push(watchList[getRandomInt(watchList.length)]);
	return L;
}

for (var i = 0; i < 5; i++)
    clockshow(document.getElementById("show"), create_random_list(), create_random_name(), i == 0? 0 : 1);

$("#show_more").click(function(){
	clockshow(document.getElementById("show"), create_random_list(), create_random_name(), 1);
});