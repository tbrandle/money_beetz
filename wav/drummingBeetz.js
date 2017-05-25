// let audio1 = new Audio("/hardkick.wav")
// let audio2 = new Audio("/80pmsnare.wav")
// let audio3 = new Audio("/kickscratch_3.wav")
// let audio4 = new Audio("/djnoise3.wav")
// let audio5 = new Audio("/808clap.wav")
// let audio6 = new Audio("/808drop.wav")
// let audio7 = new Audio("/drum2.wav")
// let audio8 = new Audio("/kick0.wav")
 this.state.audio.push(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8)
 shuffle.pick(this.state.audio).play()

module.exports = {
  81: new Audio("/hardkick.wav"),
  87: new Audio("/80pmsnare.wav"),
  69: new Audio("/kickscratch_3.wav"),
  82: new Audio("/djnoise3.wav"),
  65: new Audio("/808clap.wav"),
  83: new Audio("/808drop.wav"),
  68: new Audio("/drum2.wav"),
  70: new Audio("/kick0.wav")  
}
