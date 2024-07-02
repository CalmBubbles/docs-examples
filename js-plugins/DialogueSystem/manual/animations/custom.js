diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "null", src: "blank.png" },
        { name: "kel", src: "kel/0.png" },
        { name: "kel_smile", src: "kel/1.png" },
        { name: "kel_argue", src: "kel/14.png" },
        { name: "kel_arguer", src: "kel/15.png" },
        { name: "kel_really", src: "kel/12.png" },
        { name: "kel_sad", src: "kel/4.png" },
        { name: "kel_sadder", src: "kel/5.png" },
        { name: "kel_man", src: "kel/16.png" },
        { name: "kel_scream", src: "kel/17.png" },
        { name: "aubs_mad", src: "aubrey/10.png" },
        { name: "aubs_bruh", src: "aubrey/11.png" },
        { name: "aubs_smile", src: "aubrey/1.png" },
        { name: "hero_uhhh", src: "hero/11.png" },
        { name: "hero_sorry", src: "hero/6.png" },
        { name: "hero_sad", src: "hero/4.png" }
    ],
    "img/faces"
);

class TextWave extends DialogueTextAnimation
{
    name = "wave";

    Update ()
    {
        // position = I * sin(s * t + w * i)
        const pos = 12 * Math.sin(10 * DialogueLoop.time + 0.4 * this.index);

        // set the position by element's style
        this.dialogueChar.style.transform = `translateY(${pos}%)`;
    }
}

diaManager.config.animations.items.push(new TextWave());

class FadingTextWave extends DialogueTextAnimation
{
    #scale = 0;

    name = "fading-wave";
    
    OnSet ()
    {
        this.#scale = 1 / Math.max((this.index - 4) * 0.1, 1);

        this.dialogueChar.style.fontSize = `${this.#scale * 2}em`;
    }

    Update ()
    {
        const pos = this.#scale * 30 * Math.sin(10 * DialogueLoop.time + 0.5 * this.index);

        this.dialogueChar.style.transform = `translateY(${pos}%)`;
    }
}

diaManager.config.animations.items.push(new FadingTextWave());

async function Main ()
{
    const justAudio = new DialogueData({ audio: "default" });

    charName = "KEL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Hey OMORI.... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel",
        delayAfter: 0.25
    }));
    await diaManager.Type("looooook what I got.", 1, new DialogueData({
        audio: "default",

        // Use text animation named "wave"
        animation: "wave"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Its all of the 64143 balls from the ball pit!", 1.1, new DialogueData({
        audio: "default",
        portrait: "kel_smile"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    ChangeName("AUBREY");
    ShakeScreen(0.5, 20);
    await diaManager.Type("KEL, WHY DID YOU STOLE THESE!!?", 1.2, new DialogueData({
        audio: "default",
        portrait: "aubs_mad",
        style: new DialogueStyle({ fontSize: "1.5em" })
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("I did NOT stole them.", 1.2, new DialogueData({
        audio: "default",
        portrait: "kel_argue"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("They were in fact... ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("FREE!!", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({
            fontSize: "1.1em",
            verticalAlign: "bottom"
        })
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    ChangeName("AUBREY");
    await diaManager.Type("No, they were NOT!!!", 1, new DialogueData({
        audio: "default",
        portrait: "aubs_mad"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("KEL");
    ShakeScreen(0.25, 20);
    await diaManager.Type("THEY ARE!!", 1.12, new DialogueData({
        audio: "default",
        portrait: "kel_argue",
        style: new DialogueStyle({ fontSize: "1.4em" })
    }));
    await DialogueLoop.Delay(0.4);
    await diaManager.ClearText();
    await diaManager.Type("The sign even said...\n", 1, new DialogueData({
        audio: "default",
        portrait: "kel_arguer",
        delayAfter: 0.3
    }));
    await diaManager.Type("\"ENTER AND GET A BALL FOR FREE!!\"", 1, new DialogueData({
        audio: "default",
        style: new DialogueStyle({ fontSize: "1.2em" })
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Even ask HERO, ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("he was there!", 1, justAudio);
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    ChangeName("HERO");
    await diaManager.Type("Uhhhhhh... ", 1, new DialogueData({
        audio: "default",
        portrait: "hero_uhhh",
        delayAfter: 0.6
    }));
    await diaManager.Type("I think the sign meant you can take ONLY ONE ball.", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    ChangeName("KEL");
    diaManager.soundInterval = 2;
    await diaManager.Type("R-", 1, new DialogueData({
        audio: "default",
        portrait: "kel_really",
        delayAfter: 0.3
    }));
    diaManager.soundInterval = 3;
    await diaManager.Type("Really??", 1.1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    ChangeName("AUBREY");
    await diaManager.Type("KEL, why are you so dumb?", 1, new DialogueData({
        audio: "default",
        portrait: "aubs_bruh",
        style: new DialogueStyle({
            fontSize: "0.7em",
            verticalAlign: "top"
        })
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    ChangeName("HERO");
    await diaManager.Type("Sorry KEL, ", 1, new DialogueData({
        audio: "default",
        portrait: "hero_sorry",
        delayAfter: 0.4
    }));
    await diaManager.Type("you know what this means...", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("But... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_sad",
        delayAfter: 0.3
    }));
    await diaManager.Type("but.....", 1.2, justAudio);
    await DialogueLoop.Delay(0.3);
    await diaManager.ClearText();
    ChangeName("HERO");
    await diaManager.Type("We've got to bring them back.", 1, new DialogueData({
        audio: "default",
        portrait: "hero_sad"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("But... ", 1, new DialogueData({
        audio: "default",
        portrait: "kel_sad"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("HERO");
    await diaManager.Type("Sorry KEL, ", 1, new DialogueData({
        audio: "default",
        portrait: "hero_sad",
        delayAfter: 0.4
    }));
    await diaManager.Type("we really have to.", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("But... ", 0.9, new DialogueData({
        audio: "default",
        portrait: "kel_sadder"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    ChangeName("AUBREY");
    ShakeScreen(0.5, 20);
    await diaManager.Type("GIMME ", 1.4, new DialogueData({
        audio: "default",
        portrait: "aubs_smile",
        delayAfter: 0.3,
        style: new DialogueStyle({ fontSize: "1.2em" })
    }));
    ShakeScreen(0.6, 30);
    await diaManager.Type("THAT.", 1.4, new DialogueData({
        audio: "default",
        style: new DialogueStyle({
            fontSize: "1.6em",
            verticalAlign: "bottom"
        })
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    ChangeName("KEL");
    await diaManager.Type("No.... ", 0.8, new DialogueData({
        audio: "default",
        portrait: "kel_man",
        delayAfter: 1
    }));
    await diaManager.Type("no........ ", 0.8, new DialogueData({
        audio: "default",
        delayAfter: 1.3
    }));
    await diaManager.Type("no............. ", 0.8, justAudio);
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("Noooooooooooooooooooooooooo.................", 0.9, new DialogueData({
        audio: "default",
        portrait: "kel_sadder",
        animation: "wave",
        style: new DialogueStyle({ fontSize: "0.8em" })
    }));
    await DialogueLoop.Delay(1.65);
    await diaManager.ClearText();
    await diaManager.Type("My........ ", 0.7, new DialogueData({
        audio: "default",
        delayAfter: 1.4
    }));
    await diaManager.Type("my............ ", 0.7, justAudio);
    await DialogueLoop.Delay(3);
    await diaManager.ClearText();
    ShakeScreen(1.25, 40);
    await diaManager.Type("MYYYYY BAAAAAAAAAAAAAAALLS!!!", 1, new DialogueData({
        audio: "default",
        portrait: "kel_scream",
        style: new DialogueStyle({ top: "calc(var(--scaler) * 50vw)" }),
        animation: "fading-wave"
    }));
}