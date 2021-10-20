const text = document.querySelector('#dialogue')
const buttonOne = document.querySelector('#buttonOne')
const buttonTwo = document.querySelector('#buttonTwo')

function startGame() {
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = cyoa.find(textNode => textNode.id === textNodeIndex)
  text.textContent = textNode.prompt
  buttonOne.textContent = textNode.options[0].choice
  buttonOne.addEventListener('click', function() {nextNode(textNode.options[0])})
  buttonTwo.textContent = textNode.options[1].choice
  buttonTwo.addEventListener('click', function() {nextNode(textNode.options[1])})
}

function nextNode(node) {
  nextNodeID = node.nextText;
  showTextNode(nextNodeID)
}

const textNodes = [
  
  {
    id: 1,
    text: '',
    options: [
      {
        text: 'Yes',
        nextText: 2
      },
      {
        text: 'No',
        nextText: 3
    ]
  },
  // Continue this format
]

startGame()
