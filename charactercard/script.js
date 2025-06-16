const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

  function updateCharacterDisplay() {
    document.querySelector('.image').src = character.image;
    document.querySelector('.image').alt = character.name;
    document.querySelector('.name').textContent = character.name;
    document.getElementById('class').textContent = character.class;
    document.getElementById('level').textContent = character.level;
    document.getElementById('health').textContent = character.health;
  }

document.addEventListener('DOMContentLoaded', () => {
  updateCharacterDisplay();
});

document.getElementByID('attacked') .addEventListener('click', () =>{
  character.attacked();
  updateCharacterDisplay();
})

document.getElementById ('levelup') .addEventListener("click", () => {
  character.levelUp();
  updateCharacterDisplay();
});

//   document.addEventListener('DOMContentLoaded', () => {
//   updateCharacterDisplay();

//   document.getElementById('attacked').addEventListener('click', () => {
//     character.attacked();
//     updateCharacterDisplay();
//     document.getElementById('log').textContent = 'Snortleblat was attacked!';
//   });

//   document.getElementById('levelup').addEventListener('click', () => {
//     character.levelUp();
//     updateCharacterDisplay();
//     document.getElementById('log').textContent = 'Snortleblat leveled up!';
//   });
// });