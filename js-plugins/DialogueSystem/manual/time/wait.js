diaManager.config.audios.items.push(new DialogueAudioClip("meow", "audio/SE_meow.ogg"));
diaManager.config.sprites.items.push(new DialogueSprite("mewo", "img/mewo.png"));

// asynchronous method
async function Main ()
{
    await Loader.LoadStyle("custom-styles/mewo");

    const mewo = document.createElement("img");
    mewo.src = diaManager.config.sprites.Find("mewo").spriteURL;
    mewo.id = "mewo";
    document.body.append(mewo);

    await DialogueLoop.Delay(2);


    // wait for 4 seconds to admire cat
    await DialogueLoop.Delay(4);

    charName = "MEWO";
    await DiaSetActive(true);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("meow"));
    await diaManager.Type("Meow? ", 1.2, new DialogueData({
        audio: "default",
        delayAfter: 0.75
    }));
    await diaManager.Type("(Waiting for something to happen?)", 1.2, new DialogueData({ audio: "default" }));
}