class Red_g {
    j = 0;
    move = 0;
    home = true;
    return = false;
    constructor(G_NO) {
        this.G_NO = G_NO;
    }
    checker() {
        // Implement logic for Red color
        return this.home;
    }
}

class Green_g {
    j = 0;
    move = 0;
    home = true;
    constructor(G_NO) {
        this.G_NO = G_NO;
    }
    checker() {
        // Implement logic for Red color
        return this.home;
    }
}

class Yellow_g {
    j = 0;
    move = 0;
    home = true;
    constructor(G_NO) {
        this.G_NO = G_NO;
    }
    checker() {
        // Implement logic for Red color
        return this.home;
    }
}

class Blue_g {
    j = 0;
    move = 0;
    home = true;
    constructor(G_NO) {
        this.G_NO = G_NO;
    }

checker() {
    // Example logic for Blue color
    return this.home;
}
}

class Dice {
    type = 1;
    count = 0;
    consecutiveSixes = 0;
    // Initialize color objects
    r = new Red_g(1);
    g = new Green_g(2);
    y = new Yellow_g(3);
    b = new Blue_g(4);
    rctns = [];
    gctns = [];
    yctns = [];
    bctns = [];

    constructor() {
        this.colors = [
            { name: 'Red', code: 'red' },
            { name: 'Green', code: 'green' },
            { name: 'Yellow', code: 'rgb(255, 200, 0)' },
            { name: 'Blue', code: 'blue' }
        ];
        this.die = document.getElementById("die");
        this.msg = document.getElementById("msg");
        this.colorDisplay = document.getElementById("color-display");
        this.roll = this.roll.bind(this); // Bind 'this' for roll method
        this.initializeEventListener();
        this.updateColorDisplay();
    }

    initializeEventListener() {
        if (this.die) {
            this.die.addEventListener('click', this.roll); // Event listener for the roll button
        }
    }

    generateSecureRandom() {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        return (randomBuffer[0] % 6) + 1; // Secure random number between 1 and 6
    }

    updateColorDisplay() {
        const currentColor = this.colors[this.type - 1];
        if (this.msg) {
            this.msg.innerHTML = currentColor.name;
            this.msg.style.color = currentColor.code;
        }
        if (this.colorDisplay) {
            this.colorDisplay.innerHTML = `Current Player: ${currentColor.name}`;
            this.colorDisplay.style.backgroundColor = currentColor.code;
            this.colorDisplay.style.color = 'white';
            this.colorDisplay.style.padding = '10px';
            this.colorDisplay.style.borderRadius = '5px';
        }
    }

    clearOtherContainers(current) {
        const containers = {
            'rctns': this.rctns,
            'gctns': this.gctns,
            'yctns': this.yctns,
            'bctns': this.bctns
        };
        Object.keys(containers).forEach(key => {
            if (key !== current) {
                containers[key].length = 0; // Clear all other containers
            }
        });
    }
    updatePlayerDisplay() {
        const playerName = this.colors[this.type - 1].name;  // Get the current player's name
        const playerElement = document.querySelector('.player');  // Select the player element
        if (playerElement) {
            playerElement.innerHTML = `Current Player: ${playerName}`;  // Update the player display
        }
    }
    
    roll() {
        // Generate random roll value
        this.count = this.generateSecureRandom();
        this.die.disabled = true;
    
        // Track consecutive sixes
        if (this.count === 6) {
            this.consecutiveSixes++;
        } else {
            this.consecutiveSixes = 0;
        }
    
        // Prevent more than 3 consecutive sixes
        if (this.consecutiveSixes > 2) {
            this.type = (this.type % 4) + 1; // Switch to the next player
            this.consecutiveSixes = 0;
        }
    
        // Handle dice image update
        if (this.die) {
            // Dynamically change the dice shadow based on the current player
            this.die.classList.remove('red', 'green', 'yellow', 'blue'); // Remove previous color classes
    
            // Add the appropriate shadow class based on the current player type
            switch (this.type) {
                case 1: // Red
                    this.die.classList.add('red'); // Add red shadow
                    break;
                case 2: // Green
                    this.die.classList.add('green'); // Add green shadow
                    break;
                case 3: // Yellow
                    this.die.classList.add('yellow'); // Add yellow shadow
                    break;
                case 4: // Blue
                    this.die.classList.add('blue'); // Add blue shadow
                    break;
            }
    
            // Update the dice background image and animation
            this.die.style.backgroundImage = `url("src/${this.count}.png")`;
            this.die.classList.add('roll-animation');
            setTimeout(() => {
                this.die.classList.remove('roll-animation');
            }, 500);
        }
       
       
       
       
       
        
        
        // Handle player-specific logic based on the roll and current player type
        switch (this.type) {
            case 1: // Red
                if (this.r.checker()) this.die.disabled = true;
                this.rctns.push(this.count);
                this.clearOtherContainers('rctns');
                break;
            case 2: // Green
                if (this.g.checker()) this.die.disabled = true;
                this.gctns.push(this.count);
                this.clearOtherContainers('gctns');
                break;
            case 3: // Yellow
                if (this.y.checker()) this.die.disabled = true;
                this.yctns.push(this.count);
                this.clearOtherContainers('yctns');
                break;
            case 4: // Blue
                if (this.b.checker()) this.die.disabled = true;
                this.bctns.push(this.count);
                this.clearOtherContainers('bctns');
                break;
        }
    
        // If the roll is NOT a 6, switch to the next player
      
      
      
    
        // Always update the player display after checking the roll
        this.updatePlayerDisplay();
        this.updateColorDisplay();

        if (this.count !== 6) {
            this.type = (this.type % 4) + 1;
        }
    
        // Re-enable the button at the end of each roll
        this.die.disabled = false;
    }
}                                                                                          

// Instantiate Dice class
const dice = new Dice();
var R1 = new Red_g(document.getElementById('r1'));
var R2 = new Red_g(document.getElementById('r2'));
var R3 = new Red_g(document.getElementById('r3'));
var R4 = new Red_g(document.getElementById('r4'));
class Red {

    cnt = 0;
    y = null;
    a = 0;
    x = null;
    mover(RN, count) {
        this.y = RN.G_NO;
        console.log("Check:" + (RN.move + count));
        if (RN.move + count < 57) {
            if (RN.j != 0 && RN.home == false) {
                count = count + RN.j;
                for (let i = RN.j; i <= count; i++) {
                    this.a++;
                    setTimeout(this.movefunc(i, RN.move), 1000 * this.a);
                    RN.move++;
                }
                RN.move--;
                RN.j = count;
                this.killcheck(count);
                this.a = 0;
                return true;
            }
            else {
                if (count == 6) {
                    this.x = document.getElementById(1);
                    this.x.appendChild(this.y);
                    RN.j = 1;
                    RN.home = false;
                    return true;
                }
            }
        }
    }
    movefunc(i, move) {
        if (move >= 51) {
            if (i == 57) {
                this.x = document.getElementById("out");
            }
            else {
                var jn = "rf" + i;
                this.x = document.getElementById(jn);
            }
        }
        else {
            this.x = document.getElementById(i);
        }
        this.x.appendChild(this.y);
    }
    choose(i) {
        var ck;
        if (roll.rctns.length != 0) {
            if (i == 1) {
                if (this.mover(R1, roll.rctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 2) {
                if (this.mover(R2, roll.rctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 3) {
                if (this.mover(R3, roll.rctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 4) {
                if (this.mover(R4, roll.rctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            console.log("Moved:" + ck);
            if (ck) {
                if ((this.cnt == roll.rctns.length - 1)) {
                    console.log("last");
                    document.getElementById("die").disabled = false;
                    roll.rctns.splice(0, roll.rctns.length);
                    this.cnt = 0;
                }
                else {
                    console.log("not last");
                    this.cnt++;
                }
            }
        }
    }
    checker() {
        if (R1.home && R2.home && R3.home && R4.home && roll.count != 6 && roll.rctns[roll.rctns.length - 1] != 6) {
            return false;
        }
        else {
            if (roll.count == 6) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    killcheck(j) {
        if (j != 22 && j != 27 && j != 14 && j != 9 && j != 40 && j != 35 && j != 48 && j != 1) {
            if (j == G1.j) {
                G1.j = 0;
                G1.home = true;
                G1.move = 0;
                document.getElementById('g_g1').appendChild(G1.G_NO);
                roll.type--;
            }
            if (j == G2.j) {
                G2.j = 0;
                G2.home = true;
                G2.move = 0;
                document.getElementById('g_g2').appendChild(G2.G_NO);
                roll.type--;
            }
            if (j == G3.j) {
                G3.j = 0;
                G3.home = true;
                G3.move = 0;
                document.getElementById('g_g3').appendChild(G3.G_NO);
                roll.type--;
            }
            if (j == G4.j) {
                G4.j = 0;
                G4.home = true;
                G4.move = 0;
                document.getElementById('g_g4').appendChild(G4.G_NO);
                roll.type--;
            }
            if (j == Y1.j) {
                Y1.j = 0;
                Y1.home = true;
                Y1.move = 0;
                document.getElementById('g_y1').appendChild(Y1.G_NO);
                roll.type--;
            }
            if (j == Y2.j) {
                Y2.j = 0;
                Y2.home = true;
                Y2.move = 0;
                document.getElementById('g_y2').appendChild(Y2.G_NO);
                roll.type--;
            }
            if (j == Y3.j) {
                Y3.j = 0;
                Y3.home = true;
                Y3.move = 0;
                document.getElementById('g_y3').appendChild(Y3.G_NO);
                roll.type--;
            }
            if (j == Y4.j) {
                Y4.j = 0;
                Y4.home = true;
                Y4.move = 0;
                document.getElementById('g_y4').appendChild(Y4.G_NO);
                roll.type--;
            }
            if (j == B1.j) {
                B1.j = 0;
                B1.home = true;
                B1.move = 0;
                document.getElementById('g_b1').appendChild(B1.G_NO);
                roll.type--;
            }
            if (j == B2.j) {
                B2.j = 0;
                B2.home = true;
                B2.move = 0;
                document.getElementById('g_b2').appendChild(B2.G_NO);
                roll.type--;
            }
            if (j == B3.j) {
                B3.j = 0;
                B3.home = true;
                B3.move = 0;
                document.getElementById('g_b3').appendChild(B3.G_NO);
                roll.type--;
            }
            if (j == B4.j) {
                B4.j = 0;
                B4.home = true;
                B4.move = 0;
                document.getElementById('g_b4').appendChild(B4.G_NO);
                roll.type--;
            }
        }
    }
}
var B1 = new Blue_g(document.getElementById('b1'));
var B2 = new Blue_g(document.getElementById('b2'));
var B3 = new Blue_g(document.getElementById('b3'));
var B4 = new Blue_g(document.getElementById('b4'));
class Blue {
    cnt = 0;
    y = null;
    a = 0;
    x = null;
    mover(RN, count) {
        console.log("Check:" + (RN.move + count));
        this.y = RN.G_NO;
        if (RN.move + count < 57) {
            if (RN.j != 0 && RN.home == false) {
                count = count + RN.j;
                for (let i = RN.j; i <= count; i++) {
                    if (i == 53) {
                        count = count - i + 1;
                        RN.j = 1;
                        i = 1;
                    }
                    this.a++;
                    setTimeout(this.movefunc(i, RN.move), 1000 * this.a);
                    RN.move++;
                }
                RN.move--;
                RN.j = count;
                this.killcheck(count);
                this.a = 0;
                return true;
            }
            else {
                if (count == 6) {
                    this.x = document.getElementById(40);
                    this.x.appendChild(this.y);
                    RN.j = 40;
                    RN.home = false;
                    return true;
                }
            }
        }
    }
    movefunc(i, move) {
        if (move >= 51) {
            if (i == 44) {
                this.x = document.getElementById("out");
            }
            else {
                var jn = "bf" + i;
                this.x = document.getElementById(jn);
            }
        }
        else {
            this.x = document.getElementById(i);
        }
        this.x.appendChild(this.y);
    }
    choose(i) {
        var ck;
        if (roll.bctns.length != 0) {
            if (i == 1) {
                if (this.mover(B1, roll.bctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 2) {
                if (this.mover(B2, roll.bctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 3) {
                if (this.mover(B3, roll.bctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 4) {
                if (this.mover(B4, roll.bctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            console.log(ck);
            if (ck) {
                if ((this.cnt == roll.bctns.length - 1)) {
                    document.getElementById("die").disabled = false;
                    roll.bctns.splice(0, roll.bctns.length);
                    this.cnt = 0;
                }
                else {
                    this.cnt++;
                }
            }
        }
    }
    checker() {
        if (B1.home && B2.home && B3.home && B4.home && roll.count != 6 && roll.bctns[roll.bctns.length - 1] != 6) {
            return false;
        }
        else {
            if (roll.count == 6) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    killcheck(j) {
        if (j != 22 && j != 27 && j != 14 && j != 9 && j != 40 && j != 35 && j != 48 && j != 1) {
            if (j == G1.j) {
                G1.j = 0;
                G1.home = true;
                G1.move = 0;
                document.getElementById('g_g1').appendChild(G1.G_NO);
                roll.type = 4;
            }
            if (j == G2.j) {
                G2.j = 0;
                G2.home = true;
                G2.move = 0;
                document.getElementById('g_g2').appendChild(G2.G_NO);
                roll.type = 4;
            }
            if (j == G3.j) {
                G3.j = 0;
                G3.home = true;
                G3.move = 0;
                document.getElementById('g_g3').appendChild(G3.G_NO);
                roll.type = 4;
            }
            if (j == G4.j) {
                G4.j = 0;
                G4.home = true;
                G4.move = 0;
                document.getElementById('g_g4').appendChild(G4.G_NO);
                roll.type = 4;
            }
            if (j == Y1.j) {
                Y1.j = 0;
                Y1.home = true;
                Y1.move = 0;
                document.getElementById('g_y1').appendChild(Y1.G_NO);
                roll.type = 4;
            }
            if (j == Y2.j) {
                Y2.j = 0;
                Y2.home = true;
                Y2.move = 0;
                document.getElementById('g_y2').appendChild(Y2.G_NO);
                roll.type = 4;
            }
            if (j == Y3.j) {
                Y3.j = 0;
                Y3.home = true;
                Y3.move = 0;
                document.getElementById('g_y3').appendChild(Y3.G_NO);
                roll.type = 4;
            }
            if (j == Y4.j) {
                Y4.j = 0;
                Y4.home = true;
                Y4.move = 0;
                document.getElementById('g_y4').appendChild(Y4.G_NO);
                roll.type = 4;
            }
            if (j == R1.j) {
                R1.j = 0;
                R1.home = true;
                R1.move = 0;
                document.getElementById('g_r1').appendChild(R1.G_NO);
                roll.type = 4;
            }
            if (j == R2.j) {
                R2.j = 0;
                R2.home = true;
                R2.move = 0;
                document.getElementById('g_r2').appendChild(R2.G_NO);
                roll.type = 4;
            }
            if (j == R3.j) {
                R3.j = 0;
                R3.home = true;
                R3.move = 0;
                document.getElementById('g_r3').appendChild(R3.G_NO);
                roll.type = 4;
            }
            if (j == R4.j) {
                R4.j = 0;
                R4.home = true;
                R4.move = 0;
                document.getElementById('g_r4').appendChild(R4.G_NO);
                roll.type = 4;
            }
        }
    }
}
var G1 = new Green_g(document.getElementById('g1'));
var G2 = new Green_g(document.getElementById('g2'));
var G3 = new Green_g(document.getElementById('g3'));
var G4 = new Green_g(document.getElementById('g4'));
class Green {
    cnt = 0;
    y = null;
    a = 0;
    x = null;
    mover(RN, count) {
        console.log("Check:" + (RN.move + count));
        this.y = RN.G_NO;
        if (RN.move + count < 57) {
            if (RN.j != 0 && RN.home == false) {
                count = count + RN.j;
                for (let i = RN.j; i <= count; i++) {
                    if (i == 53) {
                        count = count - i + 1;
                        RN.j = 1;
                        i = 1;
                    }
                    this.a++;
                    setTimeout(this.movefunc(i, RN.move), 1000 * this.a);
                    RN.move++;
                }
                RN.move--;
                RN.j = count;
                this.killcheck(count);
                this.a = 0; 
                return true;
            }
            else {
                if (count == 6) {
                    this.x = document.getElementById(14);
                    this.x.appendChild(this.y);
                    RN.j = 14;
                    RN.home = false;
                    return true;
                }
            }
        }
    }
    movefunc(i, move) {
        if (move >= 51) {
            if (i == 18) {
                this.x = document.getElementById("out");
            }
            else {
                var jn = "gf" + i;
                this.x = document.getElementById(jn);
            }
        }
        else {
            this.x = document.getElementById(i);
        }
        this.x.appendChild(this.y);
    }
    choose(i) {
        var ck;
        if (roll.gctns.length != 0) {
            if (i == 1) {
                if (this.mover(G1, roll.gctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 2) {
                if (this.mover(G2, roll.gctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 3) {
                if (this.mover(G3, roll.gctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 4) {
                if (this.mover(G4, roll.gctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            console.log(ck);
            if (ck) {
                if ((this.cnt == roll.gctns.length - 1)) {
                    document.getElementById("die").disabled = false;
                    roll.gctns.splice(0, roll.gctns.length);
                    this.cnt = 0;
                }
                else {
                    this.cnt++;
                }
            }
        }
    }
    checker() {
        if (G1.home && G2.home && G3.home && G4.home && roll.count != 6 && roll.gctns[roll.gctns.length - 1] != 6) {
            return false;
        }
        else {
            if (roll.count == 6) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    killcheck(j) {
        if (j != 22 && j != 27 && j != 14 && j != 9 && j != 40 && j != 35 && j != 48 && j != 1) {
            if (j == R1.j) {
                R1.j = 0;
                R1.home = true;
                R1.move = 0;
                document.getElementById('g_r1').appendChild(R1.G_NO);
                roll.type--;
            }
            if (j == R2.j) {
                R2.j = 0;
                R2.home = true;
                R2.move = 0;
                document.getElementById('g_r2').appendChild(R2.G_NO);
                roll.type--;
            }
            if (j == R3.j) {
                R3.j = 0;
                R3.home = true;
                R3.move = 0;
                document.getElementById('g_r3').appendChild(R3.G_NO);
                roll.type--;
            }
            if (j == R4.j) {
                R4.j = 0;
                R4.home = true;
                R4.move = 0;
                document.getElementById('g_r4').appendChild(R4.G_NO);
                roll.type--;
            }
            if (j == Y1.j) {
                Y1.j = 0;
                Y1.home = true;
                Y1.move = 0;
                document.getElementById('g_y1').appendChild(Y1.G_NO);
                roll.type--;
            }
            if (j == Y2.j) {
                Y2.j = 0;
                Y2.home = true;
                Y2.move = 0;
                document.getElementById('g_y2').appendChild(Y2.G_NO);
                roll.type--;
            }
            if (j == Y3.j) {
                Y3.j = 0;
                Y3.home = true;
                Y3.move = 0;
                document.getElementById('g_y3').appendChild(Y3.G_NO);
                roll.type--;
            }
            if (j == Y4.j) {
                Y4.j = 0;
                Y4.home = true;
                Y4.move = 0;
                document.getElementById('g_y4').appendChild(Y4.G_NO);
                roll.type--;
            }
            if (j == B1.j) {
                B1.j = 0;
                B1.home = true;
                B1.move = 0;
                document.getElementById('g_b1').appendChild(B1.G_NO);
                roll.type--;
            }
            if (j == B2.j) {
                B2.j = 0;
                B2.home = true;
                B2.move = 0;
                document.getElementById('g_b2').appendChild(B2.G_NO);
                roll.type--;
            }
            if (j == B3.j) {
                B3.j = 0;
                B3.home = true;
                B3.move = 0;
                document.getElementById('g_b3').appendChild(B3.G_NO);
                roll.type--;
            }
            if (j == B4.j) {
                B4.j = 0;
                B4.home = true;
                B4.move = 0;
                document.getElementById('g_b4').appendChild(B4.G_NO);
                roll.type--;
            }
        }
    }
}
var Y1 = new Yellow_g(document.getElementById('y1'));
var Y2 = new Yellow_g(document.getElementById('y2'));
var Y3 = new Yellow_g(document.getElementById('y3'));
var Y4 = new Yellow_g(document.getElementById('y4'));
class Yellow {
    cnt = 0;
    y = null;
    a = 0;
    x = null;
    mover(RN, count) {
        console.log("Check:" + (RN.move + count));
        this.y = RN.G_NO;
        if (RN.move + count < 57) {
            if (RN.j != 0 && RN.home == false) {
                count = count + RN.j;
                for (let i = RN.j; i <= count; i++) {
                    if (i == 53) {
                        count = count - i + 1;
                        RN.j = 1;
                        i = 1;
                    }
                    this.a++;
                    setTimeout(this.movefunc(i, RN.move), 1000 * this.a);
                    RN.move++;
                }
                RN.move--;
                RN.j = count;
                this.killcheck(count);
                this.a = 0;
                return true;
            }
            else {
                if (count == 6) {
                    this.x = document.getElementById(27);
                    this.x.appendChild(this.y);
                    RN.j = 27;
                    RN.home = false;
                    return true;
                }
            }
        }
    }
    movefunc(i, move) {
        if (move >= 51) {
            if (i == 31) {
                this.x = document.getElementById("out");
            }
            else {
                var jn = "yf" + i;
                this.x = document.getElementById(jn);
            }
        }
        else {
            this.x = document.getElementById(i);
        }
        this.x.appendChild(this.y);
    }
    choose(i) {
        var ck;
        if (roll.yctns.length != 0) {
            if (i == 1) {
                if (this.mover(Y1, roll.yctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 2) {
                if (this.mover(Y2, roll.yctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 3) {
                if (this.mover(Y3, roll.yctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            else if (i == 4) {
                if (this.mover(Y4, roll.yctns[this.cnt])) {
                    ck = true;
                }
                else {
                    ck = false;
                }
            }
            console.log(ck);
            if (ck) {
                if ((this.cnt == roll.yctns.length - 1)) {
                    document.getElementById("die").disabled = false;
                    roll.yctns.splice(0, roll.yctns.length);
                    this.cnt = 0;
                }
                else {
                    this.cnt++;
                }
            }
        }
    }
    checker() {
        if (Y1.home && Y2.home && Y3.home && Y4.home && roll.count != 6 && roll.yctns[roll.yctns.length - 1] != 6) {
            return false;
        }
        else {
            if (roll.count == 6) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    killcheck(j) {
        if (j != 22 && j != 27 && j != 14 && j != 9 && j != 40 && j != 35 && j != 48 && j != 1) {
            if (j == G1.j) {
                G1.j = 0;
                G1.home = true;
                G1.move = 0;
                document.getElementById('g_g1').appendChild(G1.G_NO);
                roll.type--;
            }
            if (j == G2.j) {
                G2.j = 0;
                G2.home = true;
                G2.move = 0;
                document.getElementById('g_g2').appendChild(G2.G_NO);
                roll.type--;
            }
            if (j == G3.j) {
                G3.j = 0;
                G3.home = true;
                G3.move = 0;
                document.getElementById('g_g3').appendChild(G3.G_NO);
                roll.type--;
            }
            if (j == G4.j) {
                G4.j = 0;
                G4.home = true;
                G4.move = 0;
                document.getElementById('g_g4').appendChild(G4.G_NO);
                roll.type--;
            }
            if (j == R1.j) {
                R1.j = 0;
                R1.home = true;
                R1.move = 0;
                document.getElementById('g_r1').appendChild(R1.G_NO);
                roll.type--;
            }
            if (j == R2.j) {
                R2.j = 0;
                R2.home = true;
                R2.move = 0;
                document.getElementById('g_r2').appendChild(R2.G_NO);
                roll.type--;
            }
            if (j == R3.j) {
                R3.j = 0;
                R3.home = true;
                R3.move = 0;
                document.getElementById('g_r3').appendChild(R3.G_NO);
                roll.type--;
            }
            if (j == R4.j) {
                R4.j = 0;
                R4.home = true;
                R4.move = 0;
                document.getElementById('g_r4').appendChild(R4.G_NO);
                roll.type--;
            }
            if (j == B1.j) {
                B1.j = 0;
                B1.home = true;
                B1.move = 0;
                document.getElementById('g_b1').appendChild(B1.G_NO);
                roll.type--;
            }
            if (j == B2.j) {
                B2.j = 0;
                B2.home = true;
                B2.move = 0;
                document.getElementById('g_b2').appendChild(B2.G_NO);
                roll.type--;
            }
            if (j == B3.j) {
                B3.j = 0;
                B3.home = true;
                B3.move = 0;
                document.getElementById('g_b3').appendChild(B3.G_NO);
                roll.type--;
            }
            if (j == B4.j) {
                B4.j = 0;
                B4.home = true;
                B4.move = 0;
                document.getElementById('g_b4').appendChild(B4.G_NO);
                roll.type--;
            }
        }
    }
}

var roll = new Dice();
var red = new Red();
var green = new Green();
var yellow = new Yellow();
var blue = new Blue();
var msg = document.getElementById("message")
msg.style.fontSize = "35px";
msg.style.textAlign = "center";

