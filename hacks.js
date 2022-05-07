var hacks = ["hack-cars", "hack-speed", "hack-money"];
var enabled = [false, false, false];

function updateHacks() {
    // Interate through enabled hacks and apply their effects
    for (var i = 0; i < enabled.length; i++) {
        if (enabled[i]) {
            switch (hacks[i]) {
                case "hack-cars":
                    var backupCarFunction = frames[0].frames[0].EntityCarSelector.prototype.isCarOwned;
                    frames[0].frames[0].EntityCarSelector.prototype.isCarOwned = function(_0x5dfaa5) {return true};
                    break;
                case "hack-speed":
                    var backupSpeed = frames[0].frames[0].EntityCarSelector.prototype.carSpeed;
                    if (!frames[0].frames[0].EntityCarSelector.prototype.carSpeed) {
                        frames[0].frames[0].EntityCarSelector.prototype.carSpeed = [20, 20, 20, 20, 20, 20, 20, 20];
                    }
                    frames[0].frames[0].EntityCarSelector.prototype.carSpeed.forEach((item, index) => { frames[0].frames[0].EntityCarSelector.prototype.carSpeed[index] = 100; });
                    break;
                case "hack-money":
                    var backupMoney = frames[0].frames[0].ig['game']['sessionData']['collectedCoin'];
                    frames[0].frames[0].ig['game']['sessionData']['collectedCoin'] = 9999999;
                    break;
            }
        }
    }

    // Interate through hacks and update their buttons
    for (var i = 0; i < hacks.length; i++) {
        var hack = document.getElementById(hacks[i]);
        if (enabled[i]) {
            hack.classList.add("btn-success");
            hack.classList.remove("btn-danger");
        } else {
            hack.classList.add("btn-danger");
            hack.classList.remove("btn-success");
        }
    }

    // Iterate through enabled hacks and remove their effects
    // for (var i = 0; i < enabled.length; i++) {
    //     if (!enabled[i]) {
    //         switch (hacks[i]) {
    //             case "hack-cars":
    //                 frames[0].frames[0].EntityCarSelector.prototype.isCarOwned = backupCarFunction;
    //                 break;
    //             case "hack-speed":
    //                 frames[0].frames[0].EntityCarSelector.prototype.carSpeed = backupSpeed;
    //                 break;
    //             case "hack-money":
    //                 frames[0].frames[0].ig['game']['sessionData']['collectedCoin'] = backupMoney;
    //                 break;
    //         }
    //     }
    // }
}

// Iterate through hacks and add event listeners to their buttons
for (var i = 0; i < hacks.length; i++) {
    var hack = document.getElementById(hacks[i]);

    hack.addEventListener("click", function() {
        // Check if the hack is already active
        if (enabled[hacks.indexOf(this.id)]) {
            // If it is, disable it
            enabled[hacks.indexOf(this.id)] = false;
            updateHacks();
        } else {
            // If it isn't, enable it
            enabled[hacks.indexOf(this.id)] = true;
            updateHacks();
        }
    }
    , false);
}

