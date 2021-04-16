let question = ['hello','hi','how are you','what is your name','who created you'];
let response = ['hi,how are you doing?','Hello there','fine! how may I help you?','my name is superwoman','I was created by unique'];
let message;
while(message != 'bye'){
  message = prompt('Enter message')
  for (let i = 0; i<question.length; i++){
    let eachQuestion = question[i];
    let check = message.includes(eachQuestion);
    if(check == true){
      alert (response[i])
    }
  }
}
