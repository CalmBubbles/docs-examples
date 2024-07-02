diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "sans_blink", src: "blink.png" },
        { name: "sans", src: "neutral.png" },
        { name: "sans_wink", src: "wink.png" },
        { name: "sans_chuckle", src: "chuckle.png" },
        { name: "sans_chuckle2", src: "chuckle2.png" }
    ],
    "img/faces/sans"
);

const testClip = new DialogueAudioClip("test", "audio/test.ogg");

// An easy way of waiting for an audio clip to load
// is by adding it to the manager's audio array
diaManager.config.audios.items.push(testClip);

async function Main ()
{
    const audioSource = new DialogueAudioSource();
    audioSource.volume = 0.4;

    SetFont(1);
    await diaManager.SetActive(true);
    SetAsterisk();
    await diaManager.Type("...", 0.01, new DialogueData({ portrait: "sans_blink" }));
    await DialogueLoop.Delay(3);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(4);

    audioSource.Play(testClip);
    
    await diaManager.SetActive(true);
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans" }));
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("give ", 1);
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("you ", 1);
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("up", 1);
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans_wink" }));
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("let ", 1);
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("you ", 1);
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("down", 1);
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans_chuckle" }));
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("run ", 1);
    await DialogueLoop.Delay(0.4);
    await diaManager.Type("around ", 1);
    await DialogueLoop.Delay(0.6);
    await diaManager.Type("and ", 1);
    await DialogueLoop.Delay(0.6);
    await diaManager.Type("dessert ", 1);
    await DialogueLoop.Delay(0.4);
    await diaManager.Type("you", 1);
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans" }));
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("make ", 1);
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("you ", 1);
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("cry", 1);
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans_chuckle2" }));
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("say ", 1);
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("good", 1);
    await DialogueLoop.Delay(0.3);
    await diaManager.Type("bye", 1);
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("never gonna ", 1, new DialogueData({ portrait: "sans_blink" }));
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("tell ", 1);
    await DialogueLoop.Delay(0.4);
    await diaManager.Type("a ", 1);
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("lie ", 1);
    await DialogueLoop.Delay(1);
    await diaManager.Type("and ", 1);
    await DialogueLoop.Delay(0.2);
    await diaManager.Type("hurt ", 1);
    await DialogueLoop.Delay(0.4);
    await diaManager.Type("you", 1);
    await DialogueLoop.Delay(1.6);
    await diaManager.SetActive(false);
}