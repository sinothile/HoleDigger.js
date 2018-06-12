function ChoosePlan() {
    this.JohnChoose = function (length, oldDistance, newDistance) {
        let existingHolesArray = [];
        let newHolesArray = [];
        let existingHoles;
        let holesToBeDug;
        let newHoles;
        let reusedHoles = [];
        let reusedLength;

        if (newDistance >= oldDistance) {
            return null;
        }

        PopulateOldDistance(length,oldDistance,newDistance,existingHolesArray);
        PopulateNewDistance (length,newDistance,newHolesArray);
        ReusedHoles(existingHolesArray,newHolesArray,reusedHoles);
        

        let buried = existingHolesArray.filter(h => newHolesArray.indexOf(h) == -1);  
        let buriedLength= buried.length;

        reusedLength = reusedHoles.length;
        existingHoles = existingHolesArray.length;
        holesToBeDug = length / newDistance + 1;
        newHoles =Math.floor(holesToBeDug - reusedLength);

        return "He needs to dig " + newHoles + " holes and bury " + buriedLength + " old holes";
    }

    let PopulateOldDistance = function (length,oldDistance,newDistance,existingHolesArray)
    {
        for (let i = 0; i <= length; i += oldDistance) { 
            existingHolesArray.push(i);
        }
        return existingHolesArray;
    }

    let PopulateNewDistance = function (length,newDistance,newHolesArray)
    {
        for (let j = 0; j <= length; j += newDistance[0]) {
            newHolesArray.push(j);
        }
        return newHolesArray;
    }

    let ReusedHoles = function (existingHolesArray,newHolesArray,reusedHoles)
    {
        existingHolesArray.forEach((e1) => newHolesArray.forEach((e2) => {
            if (e1 === e2) {
                reusedHoles.push(e1)
            }
        }));
        return reusedHoles;
    }

}