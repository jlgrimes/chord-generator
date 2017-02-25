var key = "C";

function major()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "C5"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "G#4", "C#5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A4", "D5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "A#4", "D#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "B4", "E5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C5", "F5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "C#5", "F#5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D5", "G5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "D#5", "G#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E5", "A5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "E#5", "A#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "F#5", "B5"], "2n");
}

function minor()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "G4", "C5"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G#4", "C#5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "A4", "D5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A#4", "D#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "B4", "E5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "C5", "F5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C#5", "F#5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "D5", "G5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D#5", "G#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "E5", "A5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E#5", "A#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F#5", "B5"], "2n");
}

function diminished()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "Gb4", "C5"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G4", "C#5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "Ab4", "D5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A4", "D#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "Bb4", "E5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "Cb5", "F5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C5", "F#5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "Db5", "G5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D5", "G#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "Eb5", "A5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E5", "A#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F5", "B5"], "2n");
}

function augmented()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G#4", "C5"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "A4", "C#5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A#4", "D5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "B4", "D#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "C5", "E5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C#5", "F5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "D5", "F#5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D#5", "G5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "E5", "G#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E#5", "A5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "F#5", "A#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "G5", "B5"], "2n");
}

function major7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "B4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "G#4", "C5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A4", "Db5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "A#4", "D5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "B4", "Eb5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C5", "Fb5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "C#5", "F5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D5", "Gb5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "D#5", "G5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E5", "Ab5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "E#5", "A5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "F#5", "Bb5"], "2n");
}

function minor7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "G4", "Bb4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G#4", "B4"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "A4", "C5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A#4", "C#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "B4", "D5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "C5", "D#5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C#5", "E5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "D5", "F5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D#5", "F#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "E5", "G5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E#5", "G#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F#5", "A5"], "2n");
}

function diminished7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "Gb4", "A4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G4", "Bb4"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "Ab4", "B4"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A4", "C5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "Bb4", "Db5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "B4", "D5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C5", "Eb5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "Db5", "Fb5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D5", "F5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "Eb5", "Gb5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E5", "G5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F5", "Ab5"], "2n");
}

function halfdiminished7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "Gb4", "Bb4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G4", "B4"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "Ab4", "C5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A4", "C#5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "Bb4", "D5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "B4", "D#5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C5", "E5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "Db5", "F5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D5", "F#5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "Eb5", "G5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E5", "G#5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F5", "A5"], "2n");
}

function dominant7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G4", "Bb4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "G#4", "B4"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A4", "C5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "A#4", "Db5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "B4", "D5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C5", "Eb5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "C#5", "E5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D5", "F5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "D#5", "Gb5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E5", "G5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "E#5", "Ab5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "F#5", "A5"], "2n");
}

function augmentedmajor7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G#4", "B4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "A4", "C5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A#4", "Db5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "B4", "D5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "C5", "Eb5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C#5", "Fb5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "D5", "F5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D#5", "Gb5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "E5", "G5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E#5", "Ab5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "F#5", "A5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "G5", "Bb5"], "2n");
}

function augmentedminor7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "E4", "G#4", "Bb4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E#4", "A4", "B4"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F#4", "A#4", "C5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "G4", "B4", "Db5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G#4", "C5", "D5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "A4", "C#5", "Eb5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A#4", "D5", "E5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "B4", "D#5", "F5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "C5", "E5", "Gb5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C#5", "E#5", "G5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "D5", "F#5", "Ab5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D#5", "G5", "A5"], "2n");
}

function minormajor7th()
{
    var polySynth = new Tone.PolySynth(5, Tone.Synth).toMaster();

    if (key == 'C')
        polySynth.triggerAttackRelease(["C3", "C4", "Eb4", "G4", "B4"], "2n");
    else if (key == 'C#')
        polySynth.triggerAttackRelease(["C#3", "C#4", "E4", "G#4", "C5"], "2n");
    else if (key == 'D')
        polySynth.triggerAttackRelease(["D3", "D4", "F4", "A4", "C#5"], "2n");
    else if (key == 'D#')
        polySynth.triggerAttackRelease(["D#3", "D#4", "Gb4", "A#4", "D5"], "2n");
    else if (key == 'E')
        polySynth.triggerAttackRelease(["E3", "E4", "G4", "B4", "D#5"], "2n");
    else if (key == 'F')
        polySynth.triggerAttackRelease(["F3", "F4", "Ab4", "C5", "E5"], "2n");
    else if (key == 'F#')
        polySynth.triggerAttackRelease(["F#3", "F#4", "A4", "C#5", "E#5"], "2n");
    else if (key == 'G')
        polySynth.triggerAttackRelease(["G3", "G4", "Bb4", "D5", "F#5"], "2n");
    else if (key == 'G#')
        polySynth.triggerAttackRelease(["G#3", "G#4", "Cb5", "D#5", "G5"], "2n");
    else if (key == 'A')
        polySynth.triggerAttackRelease(["A3", "A4", "C5", "E5", "G#5"], "2n");
    else if (key == 'A#')
        polySynth.triggerAttackRelease(["A#3", "A#4", "Db5", "E#5", "A5"], "2n");
    else if (key == 'B')
        polySynth.triggerAttackRelease(["B3", "B4", "D5", "F#5", "A#5"], "2n");
}

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

function minor2(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["C#4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function major2(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["D4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function minor3(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["D#4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function major3(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["E4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function perfect4(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["F4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function tritone(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["F#4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function perfect5(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["G4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function minor6(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["G#4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function major6(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["A4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function minor7(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["A#4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function major7(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["B4"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
}

function octave(){
    var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();

    polySynth.triggerAttackRelease(["C4"], "2n");
    polySynth.triggerAttackRelease(["C5"], "2n", "+2n");
    polySynth.triggerAttackRelease(["C4"], "2n", "+1m");
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
    polySynth.triggerAttackRelease(["F2", "F4", "C4", "Eb4", "A4"], "2n", "+2n");
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