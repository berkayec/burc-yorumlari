var OğlakFortune = "Your position in your social circle is about to skyrocket, so get ready! You've got the connections and the ideas to make your friends amazingly happy right now, and they know it! So have a little bit more faith. You are still very much loved by your friends! They will prove it to you soon enough when they start calling about what to do next weekend. It's time to pull out that plan you've had in your back pocket -- you know, the one that you think they'll never go for? This time, they will."
var KovaFortune = "People who do not realize what they are doing will exert a major influence over your day, so you need to stay extra-aware if you want to keep your cool right now. The drivers next to you? They're all chatting away on their cell phones, oblivious to the fact that their left turn signal has been on for ten miles. Zen it out. Don't let it get to you. Just keep your distance from clueless folks and realize that they will get their just desserts. Focus on what you're doing all the more."
var KocFortune = "Your level of artistic inspiration is very high today, Koc. Dreams or meditation may have brought up some spiritual insights and revelations for you, and you may have promptly forgotten them upon coming out of your dream or meditative state. This could prove very frustrating for you! Try writing them down even if you only remember snatches. This can actually bring them to the surface again. You'll want a record of them anyway."
var BogaFortune = "A delivery of some kind that you were expecting to come from far away might be delayed, causing you to wonder if it might have been lost. It hasn't, Boga; it's just delayed. Unfortunately, there isn't much you can do but wait. Equipment you use on the job could go out of whack today, necessitating calling in a repairman. This could set your work back some and make you a bit antsy. Try to find something else to do!"
var IkizlerFortune = "Today you're likely to be feeling especially passionate, sexy, and desirous of a romantic encounter, Ikizler. You might even have a hot date scheduled. However, don't be surprised if it has to be postponed for reasons beyond the control of either you or your partner. If you can't do otherwise, you might try to sublimate those feelings through creative activities. Engrossing novels and movies could also prove a good outlet, although never as good as the real thing!"
var YengecFortune = "A female visitor who might have a few problems might come to your door wanting advice and sympathy, Yengec. She could have some other news that could come as a shock to you. A crisis on the job might make it necessary for you or your partner to spend most of the time today away from home and family. This could be frustrating, particularly if you have to cancel your plans. Hang in there!"
var AslanFortune = "Tasks of any kind are all likely to seem like the labors of Hercules today, Aslan. Overwork and nerve strain could have you feeling a little bit under the weather today, and it might be a good idea for you to take some time alone to rest. If you can't do that, at least try to take things easy. Some unexpected changes in your community might have your neighbors' tongues wagging. Be sure to check out the facts before jumping to any conclusions."
var BasakFortune = "Money matters might be weighing on the mind of a close friend or lover and your advice could be sought. A creative project of some kind may require a larger expenditure of money, time, or other resources than you originally thought, and this could have you wondering if you'll be able to continue with it. It might take a little corner cutting on your part, Basak, but you should be able to complete it as planned."
var TeraziFortune = "You might have visitors, Terazi, or even a hot date scheduled for tonight, but by mid-afternoon you might be feeling too tired to go through with it and wondering if you should cancel. It's best to keep your activities low key. Have coffee and snacks at home instead of going out, and get the snacks from the store! Your evening is likely to be full of exciting and stimulating conversations, so you'll be glad you stuck with your plans."
var AkrepFortune = "Deliveries you may be expecting could be delayed or held up. Today you might learn something shocking about a neighbor or relative, and gossip might spread very rapidly through your community. This could have you reeling even though it might be exaggerated. You could pay visits to a few people nearby, Akrep, or spend a lot of time on the phone trying to learn the truth. Don't take anything you hear today at face value."
var YayFortune = "Some good but surprising news about a group with which you may be affiliated could come your way today, Yay. Perhaps fundraising activities have been more successful than you thought, or perhaps recognition is coming your way. A lot of paperwork may have to be completed before this can be made to work for you, however. Contracts or other legal papers might be involved. In the evening, go out with your friends and celebrate."
var BalıkFortune = "Today may start out being a very frustrating day, Balık. Be prepared! Some equipment with which you work might suddenly go out of order and it could take a while to get it fixed. A temporary separation from a romantic partner could also be disappointing. You may have a lot of physical energy for which you have little immediate outlet. Take a long walk. This could not only provide an energy outlet but clear your head as well."



function getHoro(x) {
	var zodiac = document.getElementById('zodiac')
	var fortune = document.getElementById('fortune')
	if(x === 1){
		zodiac.innerHTML = "Balık"
		fortune.innerHTML = BalıkFortune
	}else if(x === 2){
		zodiac.innerHTML = "Kova"
		fortune.innerHTML = KovaFortune
	} else if(x === 3){
		zodiac.innerHTML = "Oğlak"
		fortune.innerHTML = OğlakFortune
	} else if(x === 4){
		zodiac.innerHTML = "Yay"
		fortune.innerHTML = YayFortune
	} else if(x === 5){
		zodiac.innerHTML = "Akrep"
		fortune.innerHTML = AkrepFortune
	} else if(x === 6){
		zodiac.innerHTML = "Terazi"
		fortune.innerHTML = TeraziFortune
	} else if(x === 7){
		zodiac.innerHTML = "Basak"
		fortune.innerHTML = BasakFortune
	} else if(x === 8){
		zodiac.innerHTML = "Aslan"
		fortune.innerHTML = AslanFortune
	} else if(x === 9){
		zodiac.innerHTML = "Yengec"
		fortune.innerHTML = YengecFortune
	} else if(x === 10){
		zodiac.innerHTML = "Ikizler"
		fortune.innerHTML = IkizlerFortune
	} else if(x === 11){
		zodiac.innerHTML = "Boga"
		fortune.innerHTML = BogaFortune
	} else if(x === 12){
		zodiac.innerHTML = "Koc"
		fortune.innerHTML = KocFortune
	} 
}