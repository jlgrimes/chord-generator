function I(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n")
}

function ii(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["D3", "D4", "F4", "A4", "D5"], "2n")
}

function iii(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["E3", "E4", "G4", "B4", "E5"], "2n")
}

function IV(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["F3", "F4", "A4", "C5", "F5"], "2n")
}

function V(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["G3", "G4", "B4", "D4", "G5"], "2n")
}

function vi(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["A3", "A4", "C4", "E4", "A5"], "2n")
}

function vii(){
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    polySynth.triggerAttackRelease(["B3", "B4", "D4", "F4", "B5"], "2n")
}

function V_ii() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["A2", "A3", "C#4", "E4", "G4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["D3", "A3", "D4", "F4", "A4"], "2n", "+1m");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+(1m + 2n)")
}

function V_iii() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["B2", "B3", "D#4", "F#4", "A4"], "2n");
    polySynth.triggerAttackRelease(["E3", "B3", "E4", "G4", "B4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n", "+1m")
    polySynth.triggerAttackRelease(["G2", "D4", "G4", "B4", "D5"], "2n", "+(1m + 2n)")
}

function V_IV() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n");
    polySynth.triggerAttackRelease(["G3", "B3", "D4", "G4", "B4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "B4"], "2n", "+1m")
    polySynth.triggerAttackRelease(["F2", "A3", "C4", "F4", "A4"], "2n", "+(1m + 2n)")
}

function V_V() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["F2", "C4", "F4", "A4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A4", "C5"], "2n", "+1m")
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+(1m + 2n)")
}

function V_vi() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["G2", "D4", "G4", "B4", "D5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["E3", "E4", "G#4", "B4", "D5"], "2n", "+1m");
    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n", "+(1m + 2n)")
}

function V_vii() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();
    //play a chord

    polySynth.triggerAttackRelease(["A2", "A3", "C4", "E4", "A4"], "2n");
    polySynth.triggerAttackRelease(["F2", "F4", "A4", "C5", "Eb5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["B2", "B3", "D4", "F4", "B4"], "2n", "+1m");
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n", "+(1m + 2n)")
}

function PAC () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+1m");
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n", "+(1m + 2n)")
}

function IAC () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["B2", "D4", "G4", "B4", "D5"], "2n", "+1m");
    polySynth.triggerAttackRelease(["G2", "C4", "G4", "C5", "E5"], "2n", "+(1m + 2n)")
}

function HC () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["A2", "C4", "E4", "A4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["F2", "A3", "F4", "A4", "C5"], "2n", "+1m");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+(1m + 2n)")
}

function PHR () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["Ab2", "C4", "Eb4", "Ab4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["Ab2", "C4", "F4", "Ab4", "C5"], "2n", "+1m");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+(1m + 2n)")
}

function PLG () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["F2", "C4", "F4", "A4", "C5"], "2n", "+1m");
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n", "+(1m + 2n)")
}

function PIC () {
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "G4", "C5"], "2n");
    polySynth.triggerAttackRelease(["F2", "C4", "F4", "Ab4", "C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["G2", "B3", "D4", "G4", "B4"], "2n", "+1m");
    polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n", "+(1m + 2n)");
}