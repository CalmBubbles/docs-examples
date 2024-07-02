diaManager.config.audios.items.push(new DialogueAudioClip("aimottle", "audio/aimottle.ogg"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name : "aimottle", src : "aimottle/Neutral.png" },
        { name : "aimottle/unsure", src : "aimottle/Unsure.png" }
    ],
    "img/faces"
);

async function Main ()
{
    const justAudio = new DialogueData({ audio: "aimottle" });

    await diaManager.SetActive(true);
    await diaManager.Type("DialogueManager.Once is only called once.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(0.7);
    await diaManager.ClearText();
    await diaManager.Type("It can no longer be called again.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1.7);
    await diaManager.SetActive(true);
    await diaManager.Type("Even if I try.\n", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(0.6);
    await diaManager.Type("Which I already did.", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("DialogueManager.On however...", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.Clear();
    await diaManager.Type("Can!", 1.3, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 1
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Like this.", 1, justAudio);
    await diaManager.Clear();
    await diaManager.Type("And this.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 0.5
    }));
    await diaManager.Clear();
    await diaManager.Type("And this.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 0.2
    }));
    await diaManager.Clear();
    await diaManager.Type("This and?", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle",
        delayBefore: 0.1
    }));
    await diaManager.Clear();
    await diaManager.Type("Aaaaaaaaaaand ", 0.9, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 1,
        delayAfter: 1
    }));
    await diaManager.Type("this.", 1, justAudio);
    await diaManager.Clear();
    await diaManager.Type("Annoying huh?", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle",
        delayBefore: 1
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Well", 1, justAudio);
    await diaManager.Type("... ", 0.6, new DialogueData({
        audio: "aimottle",
        delayAfter: 0.7
    }));
    await diaManager.Type("we can unbind the callback by binding it again.", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("In 3.. ", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle",
        delayAfter: 1
    }));
    await diaManager.Type("2.. ", 1, new DialogueData({
        audio: "aimottle",
        delayAfter: 1
    }));
    await diaManager.Type("1. ", 1, justAudio);


    // Since `clearCall` already exists
    // in the set of `On` binds, rebinding
    // it just removes the bind
    //
    //                       vvvv
    // If we use `diaManager.Once(DialogueEvent.Clear, clearCall)`
    // to rebind it, it does not remove the bind.
    // Instead, it adds a new bind to the `Once` set
    diaManager.On(DialogueEvent.Clear, clearCall);

    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("It has now been unbinded.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("If we now clear the box...", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle",
        delayAfter: 1
    }));
    await diaManager.Clear();
    await diaManager.Type("Nothing happens!", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 1.4
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Even if I do this.", 1, new DialogueData({
        audio: "aimottle",
        delayAfter: 0.6
    }));
    await diaManager.Clear();
    await diaManager.Type("And this.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 0.4,
        delayAfter: 0.3
    }));
    await diaManager.Clear();
    await diaManager.Type("And this.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 0.2
    }));
    await diaManager.Clear();
    await diaManager.Type("And this.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 0.1
    }));
    await diaManager.Clear();
    await diaManager.Type("Nothing happens.", 1, new DialogueData({
        portrait: "aimottle",
        audio: "aimottle",
        delayBefore: 1
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("And that's all in this example.", 1, new DialogueData({
        portrait: "aimottle/unsure",
        audio: "aimottle",
    }));
}


// diaManager.On(
//     // event
//     DialogueEvent.Clear,
//     
//     // callback
//     () => alert("Dialogue box has cleared entirely")
// );


const clearCall = () => alert("Dialogue box has cleared entirely");

diaManager.On(DialogueEvent.Clear, clearCall);

diaManager.Once(DialogueEvent.Enable, () => alert("This is called only once"));