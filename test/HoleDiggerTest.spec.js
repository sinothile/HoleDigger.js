describe("JohnChoose",function(){
    describe("Given a length of 300, old distance of 50 and one new distance greater than old distance",function(){
        it("should return null",function(){
            //Arrange
            let length = 100;
            let oldDistance = 50;
            let newDistance = [51];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual(null);
        });
    });

    describe("Given a length of 100, old distance of 50 and one new distance of 25 ",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 100;
            let oldDistance = 50;
            let newDistance = [25];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 2 holes and bury 0 old holes");
        });
    });

   describe("Given a length of 100, old distance of 50 and distance of 20",function(){
        it("should return how many new holes to be dug and old holes to be burried ",function(){
            //Arrange
            let length = 100;
            let oldDistance = 50;
            let newDistance = [20];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 4 holes and bury 1 old holes");
        });
    });
  

    describe("Given a length of 300, old distance of 50 and one new distance of 25",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 300;
            let oldDistance = 50;
            let newDistance = [25];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 6 holes and bury 0 old holes");
        });
    });

    describe("Given a length of 300, old distance of 50 and one new distance of 20",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 300;
            let oldDistance = 50;
            let newDistance = [20];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 12 holes and bury 3 old holes");
        });
    });

    describe("Given a length of 60, old distance of 10 and new distance of 5 ",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 60;
            let oldDistance = 10;
            let newDistance = [5];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 6 holes and bury 0 old holes");
        });
    });

    describe("Given a length of 50, old distance of 10 and new distance of 5 ",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 50;
            let oldDistance = 10;
            let newDistance = [5];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 5 holes and bury 0 old holes");
        });
    });

    describe("Given a length of 50, old distance of 10 and new distance of 3 ",function(){
        it("should return how many new holes to be dug and old holes to be burried",function(){
            //Arrange
            let length = 50;
            let oldDistance = 10;
            let newDistance = [3];
            let chooseService = new ChoosePlan();
            //Act
            let actual = chooseService.JohnChoose(length, oldDistance, newDistance);
            //Assert
            expect(actual).toEqual("He needs to dig 15 holes and bury 4 old holes");
        });
    });
});




    

