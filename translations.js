// translations.js

const TRANSLATIONS = {
    'go': '🚶',
    'back': '⬇️',
    'right': '↪️',
    'left': '↩️',
    'stop': '⛔',

    'go straight': '🚶',
    'move forward slowly': '🚶‍♂️…',
    'turn right': '↪️',
    'turn left': '↩️',
    'go back': '⬇️',
    'move and turn right': '🚶↪️',
    'move and turn left': '🚶↩️',
    
    'hurry up and go straight': '🏃‍♂️💨',
    'move forward without hesitation': '🏃‍♂️💨',
    'keep going straight': '🏃‍♂️💨🔥',
    'head towards the north': '🚶',
    'take it easy and go straight': '🚶',
    'go forward at a slow pace': '🐢',
    'turn to your right': '↪️',
    'turn to your left': '↩️',
    'take a step back': '⬇️',
    'go straight and turn right': '🚶↪️',
    'go straight and turn left': '🚶↩️',
    'turn left and go straight': '↩️🚶',
    'turn right and go straight': '↪️🚶',
    'move gently': '🚶‍♂️…',
    'move slowly': '🚶‍♂️…',
    'move fast': '🏃‍♂️',
    'walk slowly': '🚶‍♂️…',
    'turn around quickly': '↪️↪️',
    'progress slowly': '🚶‍♂️…',
};


//間違えやすい表現を吸収した
const ALIASES = {

// --- "turn right" 系 ---
  "turn write": "turn right",
  "turn light": "turn right",          // よくある誤認識（l/r混乱）
  "turn the right way": "turn right",  // 意図は合っている
  "turn right now": "turn right",
  "turn to the right": "turn right",
  "can you turn right": "turn right",

  // --- "turn left" 系 ---
  "turn lift": "turn left",
  "turn left now": "turn left",
  "turn to the left": "turn left",
  "can you turn left": "turn left",

  // --- "go straight" 系 ---
  "go strait": "go straight",     // スペルミスだけど意味は合ってる
  "go street": "go straight",     // 音が似てる

  // --- "move forward slowly" 系 ---
  "move slowly": "move forward slowly",
  "go forward slowly": "move forward slowly",

  // --- "take a step back" 系 ---
  "step back": "take a step back",

  // --- "stop" 系 ---
  "stock": "stop",
  "stopped": "stop",

  // --- "go" 系 ---
  "goal": "go",

  // --- "progress slowly" 系 ---
  "progress slow": "progress slowly"
};


