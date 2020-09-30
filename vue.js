const app = new Vue({
    el: '#app',
    data: {
        deck: [],
        deck2: [],
        valueMap: {   /* change first value to correspond with something else */
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 1,
        },
        gameOver: false,
        showButton: true,
    },

    mounted: function () {
        this.startNewGame();
    },

    methods: {
        startNewGame: function () {
            this.gameOver = false;
            this.showButton = true;
            this.deck = [];
            this.deck2 = [];
            const suits = ['D', 'C', 'H', 'S'];
            const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
            suits.forEach(suit => {
                values.forEach(value => {
                    this.deck.push(value + suit);
                });
            });
            this.drawCard();
        },
        drawCard: function () {
            const shuffledIndex = Math.floor(Math.random() * this.deck.length);
            const card = this.deck[shuffledIndex];
            this.deck.splice(shuffledIndex, 1);
            this.deck2.unshift(card);
        },
        choice: function (operator) {
            this.drawCard();
            console.log(operator === ">" ? "You chose 'higher'" : "You chose 'lower'");
            let value0 = parseInt(this.deck2[0].substring(0, this.deck2[0].length - 1));
            let value1 = parseInt(this.deck2[1].substring(0, this.deck2[1].length - 1));

            value0 = this.valueMap[value0];
            value1 = this.valueMap[value1];

            console.log(value0 + " " + operator + " " + value1);
            const result = operator === '>' ? value0 < value1 : value0 > value1;

            if (result) {
                console.log("You iz ded, muthafuckaaaaa");
                this.gameOver = true;
                this.showButton = false;
            }
        },
        go: function(){
            setInterval(() => {
               this.drawCard();
            }, 500  );
        }
    },
});
