function speakGeneric () {
        console.log(this.sound);
    }

const dog = {
    sound: "Au au",
    speak: speakGeneric
};

const cat = {
    sound: "Miau",
    speak: speakGeneric
};

dog.speak();
cat.speak();

const bindedFunction = speakGeneric.bind(dog);
bindedFunction()