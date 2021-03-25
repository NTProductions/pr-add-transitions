// add transitions in premiere
app.enableQE();

var qeSequence = qe.project.getActiveSequence(0);
var thisTrack = qeSequence.getVideoTrackAt(0);
var trackItem = thisTrack.getItemAt(0);

var transitions = qe.project.getVideoTransitionList();

for(var i = 0; i < transitions.length; i++) {
    $.writeln(transitions[i]);
    }

trackItem.addTransition(qe.project.getVideoTransitionByName(transitions[Math.floor(Math.random() * transitions.length)]));