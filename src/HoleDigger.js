function ChoosePlan() {
    this.JohnChoose = function (length, oldDistance, newDistance) {
        let existingHolesArray = [];
        let newHolesArray = [];
        let existingHoles;
        let holesToBeDug;
        let newHoles;
        let reusedHoles = [];
        let reusedLength;

        for (let i = 0; i <= length; i += oldDistance) {
            if (newDistance[i] >= oldDistance) {
                return null;
            }
            existingHolesArray.push(i);
        }

        for (let j = 0; j <= length; j += newDistance[0]) {
            newHolesArray.push(j);
        }
        existingHolesArray.forEach((e1) => newHolesArray.forEach((e2) => {
            if (e1 === e2) {
                reusedHoles.push(e1)
            }
        }));

        let buried = existingHolesArray.filter(h => newHolesArray.indexOf(h) == -1);
        let buriedLength= buried.length;

        reusedLength = reusedHoles.length;
        existingHoles = existingHolesArray.length;
        holesToBeDug = length / newDistance + 1;
        newHoles =Math.floor(holesToBeDug - reusedLength);

        return "He needs to dig " + newHoles + " holes and bury " + buriedLength + " old holes";
    }

}