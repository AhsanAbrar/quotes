import Vue from 'vue'

window.Vue = Vue

const app = new Vue({
	el: '#app',

	data: {
		show: true,
		quote: '',
		quotes: [
			"Do what you love and the money will follow.",
			"if there is no struggle, there is no progress.",
			"Light tomorrow with today.",
			"Believe you can and you're halfway there.",
			"Champions keep playing until they get it right.",
			"Simplicity is the ultimate sophistication.",
			"Dream big and dare to fail.",
			"The journey of a thousand miles begins with one step.",
			"it is never too late to be what you might have been.",
			"The power of imagination makes us infinite.",
			"Even if you're on the right track, you'll get run over if you just sit there.",
			"A year from now you may wish you had started today.",
			"Don't wait. The time will never be just right.",
			"What we fear doing most is usually what we most need to do.",
			"Believe and act as if it were impossible to fail.",
			"Success is going from failure to failure without losing your enthusiasm.",
			"Make each day your masterpiece.",
			"The power of imagination makes us infinite.",
			"Action is the foundational key to all success."
		]
	},

	mounted () {
		this.changeQuote()

		setInterval(() => {
			this.changeQuote()
		}, 5000)
	},

	methods: {
		changeQuote () {
			this.show = false
			this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]

			setTimeout(() => this.show = true, 200)
		}
	}
})
