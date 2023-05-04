document.getElementById("header").innerHTML=`
        <div class="flex header item-center wrapable">
			<div class="logo">
				<img src="./image/logo.gif"/>
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


// my JQuery code

$(document).ready(function(){
    if(window.matchMedia("(max-width: 767px)").matches){
		$(".img-box").hide();
		$(".grid-container").css("grid-template-areas", "\"a\" \"b\" \"c\" \"d\" \"e\" \"f\" \"g\"");
    } else {
		$(".img-box").show();
	}
});