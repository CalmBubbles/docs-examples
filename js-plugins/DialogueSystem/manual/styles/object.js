diaManager.config.audios.items.push(new DialogueAudioClip("knock", "audio/se_doorknock.ogg"));
diaManager.config.audios.items.push(new DialogueAudioClip("noor", "audio/noor.ogg"));
diaManager.config.audios.items.push(new DialogueAudioClip("door_out", "audio/SE_Door_Exit.ogg"));
diaManager.config.audios.items.push(new DialogueAudioClip("door_in", "audio/SE_Door_Enter.ogg"));
diaManager.config.audios.items.push(new DialogueAudioClip("give", "audio/SE_plop.ogg"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "null", src: "blank.png" },
        { name: "kel_dark", src: "kel/37.png" },
        { name: "kel_dark_smile", src: "kel/34.png" },
        { name: "kel_dark_damn", src: "kel/35.png" },
        { name: "kel_dark_hueh", src: "kel/39.png" },
        { name: "kel_dark_cri", src: "kel/41.png" },
        { name: "kel_dark_snif", src: "kel/42.png" },
        { name: "kel_dark_talk", src: "kel/33.png" },
        { name: "kel_smile", src: "kel/21.png" },
        { name: "kel_talk", src: "kel/24.png" },
        { name: "kel_hueh", src: "kel/20.png" },
        { name: "kel", src: "kel/19.png" },
        { name: "kel_oh", src: "kel/23.png" },
        { name: "basil_smile", src: "basil/25.png" },
        { name: "basil_laugh", src: "basil/13.png" },
        { name: "basil", src: "basil/27.png" },
        { name: "basil_shoot", src: "basil/16.png" }
    ],
    "img/faces"
);

class TextWave extends DialogueTextAnimation
{
    #intensity = 0;
    #speed = 0;

    name = "wave";

    OnSet (parameters)
    {
        this.#intensity = parameters.Find("intensity").value ?? 14;
        this.#speed = parameters.Find("speed").value ?? 14;
    }

    Update ()
    {
        const pos = this.#intensity * Math.sin(this.#speed * DialogueLoop.time + 0.4 * this.index);

        this.dialogueChar.style.transform = `translateY(${pos}%)`;
    }
}

diaManager.config.animations.items.push(new TextWave());

async function Knock (duration, frequency, callback)
{
    if (callback == null) callback = (() => { });

    const audio = diaManager.config.audios.Find("knock");

    let timeout = 0;
    let time = 0;
    
    return new Promise(resolve => DialogueLoop.Append(() => {
        if (time >= duration && timeout > 0) return;
        
        time += DialogueLoop.deltaTime;
        timeout -= DialogueLoop.deltaTime;

        if (timeout <= 0)
        {
            timeout = 2 / (frequency ?? 1);

            DialogueAudioSource.global.Play(audio);

            callback();

            return;
        }
    }, null, () => {
        if (time < duration || timeout <= 0) return false;

        resolve();

        return true;
    }));
}

async function Main ()
{
    const justAudio = new DialogueData({ audio: "default" });

    await Knock(10);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    ShakeScreen(0.5, 20);
    await diaManager.Type("Hey BASIL, ", 1.4, new DialogueData({
        audio: "default",
        portrait: "kel_dark",
        delayAfter: 0.6,

        // increase font size ONLY in this call
        style: new DialogueStyle({ fontSize: "1.4em" })
    }));
    await diaManager.Type("are you there?", 1.2, justAudio);
    await DialogueLoop.Delay(1.7);
    await diaManager.ClearText();
    await diaManager.Type("Look outside! ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_smile",
    }));
    await DialogueLoop.Delay(1);
    await diaManager.Type("I'm at your frontyard with SUNNY.", 1.2, justAudio);
    await DialogueLoop.Delay(3);
    await DiaSetActive(false);
    await Knock(1);
    await DialogueLoop.Delay(0.4);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.ClearText();
    await diaManager.Type("Aaaaaaaaaaaaaand... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_damn",
        delayAfter: 0.6
    }));
    await diaManager.Type("still no response.", 1.1, justAudio);
    await DialogueLoop.Delay(2.4);
    await diaManager.ClearText();
    Knock(7, 2);
    await diaManager.Type("BAAAAAASIIIILLLLLLLLL!!", 0.5, new DialogueData({
        audio: "default",
        animation: "wave",
        portrait: "kel_dark_smile"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("HEY BAAAAAAAAAASIIIIIIIIIIIILLLLLL!!!", 0.6, new DialogueData({
        audio: "default",
        animation: "wave"
    }));
    await DialogueLoop.Delay(3);
    await diaManager.ClearText();
    await diaManager.Type("Hey... ", 1, new DialogueData({
        portrait: "kel_dark_hueh",
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 1
    }));
    await diaManager.Type("Hey... ", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 1.3
    }));
    await diaManager.Type("Heeeeeeeeeeey... ", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 1.5
    }));
    await diaManager.Type("BASIL... ", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 1.7,
    }));
    await diaManager.Type("Hey... ", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 2
    }));
    await diaManager.Type("Hey BASIL... ", 0.8, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 2,
        animation: "wave",
        animationParams : [
            new Property("intensity", 9),
            new Property("speed", 10)
        ]
    }));
    await diaManager.Type("You there?", 0.8, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "0.6em" }),
        delayAfter: 2,
        animation: "wave",
        animationParams : [
            new Property("intensity", 9),
            new Property("speed", 10)
        ]
    }));
    await DialogueLoop.Delay(3.7);
    await diaManager.ClearText();
    await diaManager.Type("Did he forgot about the sleepover?", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_damn",
    }));
    await DialogueLoop.Delay(3);
    await DiaSetActive(false);
    await DialogueLoop.Delay(2);
    (async () => {
        await Knock(6, 4, () => ShakeScreen(0.5, 8));
        await Knock(3, 4);
        await Knock(14, 4, () => ShakeScreen(0.5, 8));
    })();
    await DialogueLoop.Delay(0.25);
    await DiaSetActive(true);
    await diaManager.Type("KEL is aggressively knocking on the door.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await DiaSetActive(false);
    await DialogueLoop.Delay(2.5);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    ShakeScreen(3, 40);
    await diaManager.Type("BASIL PLEASE OPEN THE NOOR!", 2, new DialogueData({
        audio: "default",
        portrait: "kel_dark_cri",
        style: new DialogueStyle({ fontSize: "2em" })
    }));
    await DialogueLoop.Delay(2.9);
    await diaManager.ClearText();
    await diaManager.Type("*sniffs*", 2, new DialogueData({
        audio: "default",
        portrait: "kel_dark_snif",
        style: new DialogueStyle({ fontSize: "0.7em" })
    }));
    await DialogueLoop.Delay(0.1);
    await diaManager.ClearText();
    await diaManager.Type("Please...", 2, new DialogueData({
        audio: "default",
        portrait: "kel_dark_cri"
    }));
    await DialogueLoop.Delay(6);
    await DiaSetActive(false);
    await DialogueLoop.Delay(8);
    await DiaSetActive(true);
    await diaManager.Type("The knocking finally stopped.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await DiaSetActive(false);
    await DialogueLoop.Delay(3);
    Knock(17, 10, () => ShakeScreen(0.5, 30));
    diaManager.Finish();
    await DiaSetActive(true);
    await diaManager.Type("NEVERMIND... ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.7
    }));
    await diaManager.Type("At this rate, ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.3
    }));
    await diaManager.Type("KEL will just break the door.", 1, justAudio);
    await DialogueLoop.Delay(15);
    await DiaSetActive(false);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("noor"));
    await DialogueLoop.Delay(3);
    charName = "POLLY";
    await DiaSetActive(true);
    await diaManager.Type("Oh...", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.6
    }));
    await diaManager.Type(" h-", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.2
    }));
    await diaManager.Type("hello... ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.8
    }));
    await diaManager.Type("KEL?", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    diaManager.soundInterval = 2;
    await diaManager.Type("W-", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.1
    }));
    diaManager.soundInterval = 3;
    await diaManager.Type("what brought you here this late?", 1, justAudio);
    await DialogueLoop.Delay(2.3);
    await DiaSetActive(false);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Hello to you too POLLY.", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_hueh"
    }));
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("Is BASIL inside? ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_talk",
        delayAfter: 0.4
    }));
    await diaManager.Type("We and our friends planned to have a sleepover together.", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("We even got SUNNY with us!", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_smile"
    }));
    await DialogueLoop.Delay(1.6);
    await DiaSetActive(false);
    charName = "POLLY";
    await DiaSetActive(true);
    await diaManager.Type("Oh h-", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.1
    }));
    await diaManager.Type("hello there SUNNY.", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("I'll be right back, just gonna get BASIL.", 1, justAudio);
    await DialogueLoop.Delay(2);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door_out"));
    await DiaSetActive(false);
    await DialogueLoop.Delay(7);
    charName = "POLLY";
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door_in"));
    await DiaSetActive(true);
    await diaManager.Type("Why don't you two come in?", 1, justAudio);
    await DialogueLoop.Delay(2);
    await DiaSetActive(false);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Thank you POLLY...", 1, new DialogueData({
        audio: "default",
        portrait: "kel_dark_hueh"
    }));
    await DialogueLoop.Delay(2.5);
    await DiaSetActive(false);
    await DialogueLoop.Delay(2);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door_out"));
    await DialogueLoop.Delay(1.5);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("We're finally inside.", 1, new DialogueData({
        audio: "default",
        portrait: "kel_smile"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("While you were gone, ", 1, justAudio);
    await diaManager.Type("we've been helping BASIL decorate this place.", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Looks cool huh?", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("It was kinda difficult, ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_hueh",
        delayAfter: 0.5
    }));
    await diaManager.Type("but it was definitely worth it.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("One time there was a stray cat messing with our paint brushes.", 1, new DialogueData({
        audio: "default",
        portrait: "kel_talk"
    }));
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("We tried taking care of the cat.", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("It was an orange cat, so I technically named it-", 1, justAudio);
    diaManager.Finish();
    await DiaSetActive(false);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door_in"));
    await DialogueLoop.Delay(1);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door_out"));
    await DialogueLoop.Delay(0.5);
    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Oh... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel",
        delayAfter: 0.3
    }));
    await diaManager.Type("BASIL's here!", 1.3, justAudio);
    await DialogueLoop.Delay(1.5);
    await DiaSetActive(false);
    await DiaSetActive(true);
    charName = "BASIL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Good to see you KEL!", 1, new DialogueData({
        audio: "default",
        portrait: "basil_smile"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("SUNNY! ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("Glad that you're here!", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("I almost forgot about the sleepover.\n", 1, new DialogueData({
        audio: "default",
        portrait: "basil_laugh",
        delayAfter: 0.4
    }));
    await diaManager.Type("Thank God you two came earlier than them.", 1, justAudio);
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("Don't worry about it.", 1, new DialogueData({
        audio: "default",
        portrait: "kel_smile"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    ChangeName("BASIL");
    await diaManager.Type("So where are the others?", 1, new DialogueData({
        audio: "default",
        portrait: "basil"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("Oh, HERO and SALLY are buying snacks.", 1, new DialogueData({
        audio: "default",
        portrait: "kel"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("And movies are on AUBREY.", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    ChangeName("BASIL");
    await diaManager.Type("Oh, cool... cool...", 1, new DialogueData({
        audio: "default",
        portrait: "basil"
    }));
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("Oh yeah...", 0.9, new DialogueData({
        audio: "default",
        portrait: "kel_oh"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Since this time you're the host... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_smile",
        delayAfter: 1
    }));
    await diaManager.Type("you receive another gift from me!", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    ChangeName("BASIL");
    await diaManager.Type("Uhhhhhhhh... ", 0.9, new DialogueData({
        audio: "default",
        portrait: "basil_shoot",
        delayAfter: 1.2
    }));
    await diaManager.Type("okay..?", 0.87, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("My favorite drink!", 1.5, new DialogueData({
        audio: "default",
        portrait: "kel_smile"
    }));
    await DialogueLoop.Delay(1.5);
    await DiaSetActive(false);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("give"));
    await DialogueLoop.Delay(1);
    await DiaSetActive(true);
    await diaManager.Type("KEL gives BASIL an ", 1, justAudio);
    await diaManager.Type("EXPIRED ORANGE JOE", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({
            color: "#51C059"
        })
    }));
    await diaManager.Type(".", 1, justAudio);
    await DialogueLoop.Delay(3);
    await DiaSetActive(false);
    charName = "BASIL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Uhhhhhhhhh..... ", 0.9, new DialogueData({
        audio: "default",
        portrait: "basil_shoot",
        delayAfter: 1.3
    }));
    await diaManager.Type("thanks...?", 0.87, justAudio);
    await DialogueLoop.Delay(2.3);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("Welcome!", 1.2, new DialogueData({
        audio: "default",
        portrait: "kel_smile"
    }));
    await DialogueLoop.Delay(2.8);
    await diaManager.ClearText();
    ChangeName("BASIL");
    await diaManager.Type("Shall we start getting ready?", 1.1, new DialogueData({
        audio: "default",
        portrait: "basil_smile"
    }));
    await DialogueLoop.Delay(4);
    await DiaSetActive(false);
}