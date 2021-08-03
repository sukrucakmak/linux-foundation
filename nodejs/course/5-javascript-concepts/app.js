const wolf = {
  howl: function () {
    console.log(this.name + ": uuuuuuv");
  },
};

const dog = Object.create(wolf, {
  bark: {
    value: function () {
      console.log(this.name + ": hav hav");
    },
  },
});

const animal = Object.create(dog, {
  name: { value: "A kind of animal" },
});

animal.howl();
animal.bark();
