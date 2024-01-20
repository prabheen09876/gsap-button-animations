function testEl(el){return TweenMax.isTweening(el)}
function bounce(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.to(el, 1 / 2, {
			y: '-=30',
			ease: Power3.easeInOut
		})
		.to(el, 1 / 2, {
			y: '+=30',
			ease: Bounce.easeOut
		})
}

function flip(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.to(el, 1/2, {
			y: '-=80',
			ease: Power2.easeOut
		})
		.to(el, 1, {
			y: '+=80',
			ease: Bounce.easeOut
		})
		.to(el, 1, {
			rotation: '+=360',
			transformOrigin: '50% 50%',
			delay: -1.5
		})
}

function shake(el) {
	if(testEl(el)) return;
	return new TimelineMax({
			repeat: 3,
			yoyo: true
		})
		.set(el, {
			rotation: 0,
			transformOrigin: '50% 50%'
		})
		.to(el, 1 / 10, {
			rotation: 4,
			transformOrigin: '50% 50%',
			ease: Power2.easeInOut
		})
		.to(el, 1 / 10, {
			rotation: -4,
			transformOrigin: '50% 50%',
			ease: Power2.easeInOut
		})
}

function pop(el) {
	if(testEl(el)) return;
	return new TimelineMax({
			repeat: 1,
			yoyo: true
		})
		.set(el, {
			scale: 1,
			transformOrigin: '50% 50%',
			ease: Power2.easeInOut
		})
		.to(el, 1 / 4, {
			scale: 1.5,
			transformOrigin: '50% 50%',
			ease: Power2.easeInOut
		})
}

function flash(el) {
	if(testEl(el)) return;
	return new TimelineMax({
			repeat: 1
		})
		.set(el, {
			opacity: 1
		})
		.to(el, 1 / 4, {
			opacity: 0
		})
		.to(el, 1 / 4, {
			opacity: 1
		})
}

function rubberBand(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			scaleX: 1,
			scaleY: 1
		})
		.to(el, 1 / 4, {
			scaleX: 1.5,
			scaleY: 0.8
		})
		.to(el, 1 / 2, {
			scaleX: 1,
			scaleY: 1,
			delay: 0.25,
			ease: Elastic.easeOut
		})
}

function swing(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			rotation: 0,
			transformOrigin: '50% 0%'
		})
		.to(el, 1 / 4, {
			rotation: 20,
			transformOrigin: '50% 0%'
		})
		.to(el, 1, {
			rotation: 0,
			transformOrigin: '50% 0%',
			ease: Elastic.easeOut.config(2, 0.4)
		})
}

function zoomIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			scale: 0,
			opacity: 0,
			transformOrigin: '50% 50%'
		})
		.to(el, 0.5, {
			scale: 1,
			opacity: 1,
			transformOrigin: '50% 50%',
			delay: 0.5
		})
}

function zoomOut(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			scale: 1,
			opacity: 1,
			transformOrigin: '50% 50%'
		})
		.to(el, 0.5, {
			scale: 0,
			opacity: 0,
			transformOrigin: '50% 50%'
		})
		.set(el, {
			scale: 1,
			opacity: 1,
			delay: 1
		})
}

function fadeIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			opacity: 0
		})
		.to(el, 0.5, {
			opacity: 1,
			delay: 0.5
		})
}

function fadeOut(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			opacity: 1
		})
		.to(el, 0.5, {
			opacity: 0
		})
		.set(el, {
			opacity: 1,
			delay: 1
		})
}

function rollIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			x: '-=100',
			rotation: -90,
			opacity: 0,
			transformOrigin: '50% 100%'
		})
		.to(el, 0.5, {
			x: '+=100',
			rotation: 0,
			opacity: 1,
			transformOrigin: '50% 100%',
			delay: 0.5
		})
}

function rollOut(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.fromTo(el, 0.5, {
			x: 0,
			rotation: 0,
			opacity: 1,
			transformOrigin: '50% 100%'
		}, {
			x: 100,
			rotation: 90,
			opacity: 0,
			transformOrigin: '50% 100%'
		})
		.set(el, {
			x: 0,
			rotation: 0,
			opacity: 1,
			transformOrigin: '50% 100%',
			delay: 0.5
		})
}

function slideIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			x: '-=100',
			opacity: 0,
			transformOrigin: '50% 100%'
		})
		.to(el, 0.5, {
			x: '+=100',
			opacity: 1,
			transformOrigin: '50% 100%',
			delay: 0.5
		})
}

function slideOut(el) {
	if(testEl(el)) return;
	return new TimelineMax({
		repeat: 1,
		yoyo: true,
		repeatDelay: 1
	})
		.fromTo(el, 0.5, {
			x: 0,
			opacity: 1,
			transformOrigin: '50% 100%'
		}, {
			x: '+=100',
			opacity: 0,
			transformOrigin: '50% 100%'
		})
}

function rotateIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.set(el, {
			rotation: '+=180',
			opacity: 0,
			transformOrigin: '50% 50%'
		})
		.to(el, 3 / 4, {
			rotation: '-=180',
			opacity: 1,
			transformOrigin: '50% 50%',
			delay: 0.5
		})
}

function rotateOut(el) {
	if(testEl(el)) return;
	return new TimelineMax({
		repeat: 1,
		yoyo: true,
		repeatDelay: 1
	})
		.fromTo(el, 3 / 4, {
			opacity: 1
		}, {
			rotation: '+=180',
			opacity: 0,
			transformOrigin: '50% 50%'
		})
}

function hinge(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.fromTo(el, 2, {
			rotation: 0,
			opacity: 1
		}, {
			rotation: 70,
			transformOrigin: '0% 0%',
			ease: Elastic.easeOut
		})
		.to(el, 0.5, {
			y: '+=200',
			opacity: 0
		})
		.set(el, {
			rotation: 0,
			y: '-=200',
			opacity: 1,
			delay: 1
		})
}

function backIn(el){
	if(testEl(el)) return;
	return new TimelineMax()
		.fromTo(el, 1/2, {
			opacity: 0,
			x: '-=300',
			scale: 0.5,
			transformOrigin: '50% 50%'
		}, {
			x: '+=300',
			opacity: 1,
			transformOrigin: '50% 50%',
			ease: Power2.easeInOut,
			delay: 0.5
		})
		.to(el, 1, {
			scale: 1,
			ease: Power3.easeInOut,
			delay: -0.5
		})
}

function backOut(el){
	if(testEl(el)) return;
	return new TimelineMax({
		repeat: 1,
		yoyo: true,
		repeatDelay: 1
	})
		.fromTo(el, 1, {
			scale: 1,
			transformOrigin: '50% 50%'
		}, {
			scale: 0.5,
			transformOrigin: '50% 50%',
			ease: Power3.easeInOut
		})
		.to(el, 0.5, {
			x: '+=300',
			opacity: 0,
			ease: Power2.easeInOut,
			delay: -0.5
		})
}

function expandIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.fromTo(el, 0.5, {
			scaleY: 0,
			opacity: 0
		}, {
			scaleY: 1,
			opacity: 1,
			transformOrigin: '50% 50%',
			delay: 0.5
		})
}

function expandOut(el) {
	if(testEl(el)) return;
	return new TimelineMax({
		repeat: 1,
		yoyo: true,
		repeatDelay: 1
	})
		.fromTo(el, 0.5, {
			scaleY: 1,
			opacity: 1
		}, {
			scaleY: 3,
			opacity: 0,
			transformOrigin: '50% 50%'
		})
}

function circleIn(el) {
	if(testEl(el)) return;
	return new TimelineMax()
		.fromTo(el, 2, {
			css: {
				'-webkit-clip-path': 'circle(0% at 50% 50%)',
				'clip-path': 'circle(0% at 50% 50%)'
			}
		}, {
			css: {
				'-webkit-clip-path': 'circle(80% at 50% 50%)',
				'clip-path': 'circle(80% at 50% 50%)'
			},
			ease: Power2.easeIn
		})
}

function circleOut(el) {
	if(testEl(el)) return;
	return new TimelineMax({
		repeat: 1,
		yoyo: true,
		repeatDelay: 1
	})
		.fromTo(el, 2, {
			css: {
				'-webkit-clip-path': 'circle(80% at 50% 50%)',
				'clip-path': 'circle(80% at 50% 50%)'
			}
		}, {
			css: {
				'-webkit-clip-path': 'circle(0% at 50% 50%)',
				'clip-path': 'circle(0% at 50% 50%)'
			},
			ease: Power2.easeIn
		})
}