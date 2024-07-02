// Got too much carried away here


diaManager.config.audios.items.push(new DialogueAudioClip("step_grass", "audio/step_grass.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_gravel", "audio/step_gravel.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_tile", "audio/step_tile01.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_metal1", "audio/step_metal01.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_metal2", "audio/step_metal02.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_metal3", "audio/step_metal03.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("step_metal4", "audio/step_metal04.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("door", "audio/elevator_bang.wav"));
diaManager.config.audios.items.push(new DialogueAudioClip("fire_light", "audio/fire_light.wav"));

diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "niko", src: "niko.png" },
        { name: "niko4", src: "niko4.png" },
        { name: "niko3", src: "niko3.png" },
        { name: "niko_pancakes", src: "niko_pancakes.png" },
        { name: "niko2", src: "niko2.png" },
        { name: "niko_what", src: "niko_what.png" },
        { name: "niko_eyeclosed2", src: "niko_eyeclosed2.png" },
        { name: "niko_83c", src: "niko_83c.png" },
        { name: "niko_speak", src: "niko_speak.png" },
        { name: "niko_smile", src: "niko_smile.png" },
        { name: "niko5", src: "niko5.png" },
        { name: "niko6", src: "niko6.png" },
        { name: "magpie", src: "magpie.png" },
        { name: "magpie_smile", src: "magpie_smile.png" },
        { name: "magpie_hm", src: "magpie_hm.png" },
        { name: "magpie_oh", src: "magpie_oh.png" },
        { name: "alula_speak", src: "alula_speak.png" },
        { name: "alula_gasp2", src: "alula_gasp2.png" },
        { name: "alula", src: "alula.png" },
        { name: "alula_pout", src: "alula_pout.png" },
        { name: "alula_oh", src: "alula_oh.png" },
        { name: "calamus_shock", src: "calamus_shock.png" },
        { name: "calamus_speak", src: "calamus_speak.png" },
        { name: "calamus_smile2", src: "calamus_smile2.png" },
        { name: "calamus_smile", src: "calamus_smile.png" },
        { name: "calamus", src: "calamus.png" }
   ],
    "img/Faces"
);

// For just `DialogueSprite` objects
// you can just push them to the array
// like this:
//
// diaManager.config.sprites.items.push(
//     new DialogueSprite("niko", "niko.png")
// );


class GroundAudio extends DialogueAudioSource
{
    get pitch ()
    {
        return super.pitch * (Math.random() * (1.2 - 0.8) + 0.8);
    }

    get basePitch ()
    {
        return super.pitch;
    }
}

const groundAudio = new GroundAudio();
groundAudio.volume = 0.6;

async function Walk (duration, frequency, ground)
{
    const audio = diaManager.config.audios.Find([
        "step_grass",
        "step_gravel",
        "step_tile",
        "step_tile"
    ][ground ?? 0]);

    let timeout = 0;
    let time = 0;
    
    return new Promise(resolve => DialogueLoop.Append(() => {
        if (time >= duration && timeout > 0) return;
        
        time += DialogueLoop.deltaTime;
        timeout -= DialogueLoop.deltaTime;

        if (timeout <= 0)
        {
            timeout = 0.25 / (frequency ?? 1);

            if (ground !== 3)
            {
                groundAudio.Play(audio);

                return;
            }

            groundAudio.Play(diaManager.config.audios.Find(`step_metal${Math.floor(Math.random() * 4) + 1}`));
        }
    }, null, () => {
        if (time < duration || timeout <= 0) return false;

        resolve();

        return true;
    }));
}

async function Main ()
{
    await Loader.LoadScript("/js-plugins/BetterAudio");

    const fireBgs = new BetterAudio("audio/fire.ogg");
    fireBgs.loop = true;
    fireBgs.volume = 0.6;
    await fireBgs.Load();


    const justAudio = new DialogueData({ audio: "default" });

    await diaManager.SetActive(true);
    await diaManager.Type("Is that alcohol?", 1, new DialogueData({
        audio: "default",
    
        // Use portrait with name "niko"
        portrait: "niko"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Yeah... ", 1, new DialogueData({
        portrait: "magpie",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("why?", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("You know alcohol is not for drinking... ", 1, new DialogueData({
        portrait: "niko4",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("right?", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Alcohol is for setting things on fire.", 1, new DialogueData({
        portrait: "niko3",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("What's a fire?", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.7);
    await diaManager.ClearText();
    await diaManager.Type("That's what I said.", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(2.3);
    await diaManager.ClearText();
    await diaManager.Type("Y'know, ", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("this thing used to be just moss juice.", 1, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("What happened?", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("I dunno.", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    diaManager.soundInterval = 2;
    await diaManager.Type("I-", 1, new DialogueData({
        portrait: "calamus_shock",
        audio: "default",
        delayAfter: 0.3
    }));
    diaManager.soundInterval = 4;
    await diaManager.Type("its expired!", 1.3, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("I'm not complaining, ", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("got this from an abandoned warehouse anyway.", 1, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Its technically free!", 1.1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("There's more?", 1.2, new DialogueData({
        portrait: "niko_pancakes",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("More than more!", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Wait... ", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default",
        delayAfter: 0.7
    }));
    diaManager.soundInterval = 2;
    await diaManager.Type("a-", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.2
    }));
    diaManager.soundInterval = 4;
    await diaManager.Type("are there non-expired ones?", 1, justAudio);
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    await diaManager.Type("Probably a lot.", 1, new DialogueData({
        portrait: "magpie",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Can we see the warehouse?", 1.1, new DialogueData({
        portrait: "niko_pancakes",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Well... ", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default",
        delayAfter: 1
    }));
    await diaManager.Type("I am going to replace this bottle.", 0.92, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("... ", 0.05, justAudio);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Okay, ", 1, new DialogueData({
        portrait: "magpie",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("I'll need help getting the not expired ones.", 1, justAudio);
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("I can't read.", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("I'll also go!", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("If there's more non-expired ones, it may help our food shortage even a little.", 1.1, new DialogueData({
        portrait: "calamus_smile2",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("We'll help you find the non-expired ones.", 1, new DialogueData({
        portrait: "calamus_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("We? ", 1, new DialogueData({
        portrait: "alula_gasp2",
        audio: "default",
        delayAfter: 0.6
    }));
    await diaManager.Type("Am I going?", 1, justAudio);
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Yes, we're going.", 1, new DialogueData({
        portrait: "calamus_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Cool.", 1, new DialogueData({
        portrait: "alula",
        audio: "default"
    }));
    await DialogueLoop.Delay(0.8);
    await diaManager.ClearText();
    await diaManager.Type("Adventure with the messiah!", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Okay, ", 1, new DialogueData({
        portrait: "magpie",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("follow me...", 1, justAudio);
    await DialogueLoop.Delay(2.5);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1.2);
    await Walk(5.6);
    await Walk(2, 1, 1);
    await Walk(0.25);
    await Walk(1, 1, 1);
    await Walk(9.7);
    (async () => {
        await diaManager.SetActive(true);
        await diaManager.Type("Are we there yet?", 1, new DialogueData({
            portrait: "alula",
            audio: "default"
        }));
        await DialogueLoop.Delay(1);
        await diaManager.ClearText();
        await diaManager.Type("Not there yet.", 1, new DialogueData({
            portrait: "magpie",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.7);
        await diaManager.SetActive(false);
    })();
    await Walk(4, 1, 1);
    await Walk(6.3);
    await Walk(2, 1, 1);
    await Walk(5.1);
    await Walk(0.5, 1, 1);
    await Walk(4, 1);
    (async () => {
        await diaManager.SetActive(true);
        await diaManager.Type("We there yet?", 1, new DialogueData({
            portrait: "alula",
            audio: "default"
        }));
        await DialogueLoop.Delay(1);
        await diaManager.ClearText();
        await diaManager.Type("Not yet.", 1, new DialogueData({
            portrait: "magpie",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.4);
        await diaManager.SetActive(false);
    })();
    await Walk(3.5, 1);
    await Walk(2, 1, 1);
    (async () => {
        await diaManager.SetActive(true);
        await diaManager.Type("How about now?", 1, new DialogueData({
            portrait: "alula",
            audio: "default"
        }));
        await DialogueLoop.Delay(1);
        await diaManager.ClearText();
        await diaManager.Type("Nope.", 1, new DialogueData({
            portrait: "magpie",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.2);
        await diaManager.SetActive(false);
    })();
    await Walk(1, 1, 1);
    await Walk(4.2, 1);
    (async () => {
        await diaManager.SetActive(true);
        await diaManager.Type("Now?", 1, new DialogueData({
            portrait: "alula",
            audio: "default"
        }));
        await DialogueLoop.Delay(1);
        await diaManager.ClearText();
        await diaManager.Type("Still no.", 1, new DialogueData({
            portrait: "magpie",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.3);
        await diaManager.ClearText();
        await diaManager.Type("How long does it take to get there?", 1, new DialogueData({
            portrait: "alula_pout",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.6);
        await diaManager.ClearText();
        await diaManager.Type("A little bit longer.", 1, new DialogueData({
            portrait: "magpie",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.4);
        await diaManager.ClearText();
        await diaManager.Type("Can we hurry?", 1, new DialogueData({
            portrait: "alula_oh",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.5);
        await diaManager.ClearText();
        await diaManager.Type("Sure.", 1, new DialogueData({
            portrait: "magpie_smile",
            audio: "default"
        }));
        await DialogueLoop.Delay(1.3);
        await diaManager.SetActive(false);
    })();
    await Walk(11, 1);
    await Walk(5.4, 1.25);
    await Walk(0.25, 1.25, 1);
    await Walk(4.2, 1.25);
    await Walk(1, 1.25, 1);
    await Walk(3, 1.25);
    await Walk(2.1, 1.25, 1);
    await Walk(1, 1.25);
    await Walk(3.1, 1.25, 1);
    await Walk(1.3, 1.25);
    await Walk(3, 1.25, 1);
    await Walk(0.125, 1.25);
    await Walk(4, 1.25, 1);
    await Walk(0.25, 1.25);
    await Walk(8, 1.25, 1);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(true);
    await diaManager.Type("We're here.", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(3);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1.4);
    await Walk(2, 1, 1);
    (async () => {
        await diaManager.SetActive(true);
        await diaManager.Type("Woah... ", 0.6, new DialogueData({
            portrait: "alula_gasp2",
            audio: "default",
            delayAfter: 1
        }));
        await diaManager.Type("That's a really big building.", 0.7, justAudio);
        await DialogueLoop.Delay(2);
        await diaManager.ClearText();
        await diaManager.Type("I know...", 0.9, new DialogueData({
            portrait: "magpie_smile",
            audio: "default"
        }));
        await DialogueLoop.Delay(2.3);
        await diaManager.SetActive(false);
    })();
    await Walk(14, 1, 1);
    await DialogueLoop.Delay(1.2);
    await diaManager.SetActive(true);
    await diaManager.Type("Last time I broke through the window.", 1, new DialogueData({
        portrait: "magpie",
        audio: "default"
    }));
    await Walk(0.2, 1, 2);
    await DialogueLoop.Delay(0.3);
    await Walk(0.2, 1, 2);
    await Walk(0.2, 1, 3);
    await DialogueLoop.Delay(0.2);
    await Walk(0.3, 1, 3);
    await DialogueLoop.Delay(0.6);
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("door"));
    await diaManager.ClearText();
    await diaManager.Type("Good thing I also broke this door from the inside.", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.2);
    await diaManager.ClearText();
    await diaManager.Type("Okay, ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.3
    }));
    await diaManager.Type("let's head in.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1);
    await Walk(2, 0.5, 3);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(true);
    await diaManager.Type("Aight, ", 1, new DialogueData({
        portrait: "magpie",
        audio: "default",
        delayAfter: 0.3
    }));
    await diaManager.Type("welcome to the place.", 1, justAudio);
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("I call this, ", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("glass paradise.", 1, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1);
    Walk(35, 0.5, 3);
    await DialogueLoop.Delay(7);
    await diaManager.SetActive(true);
    await diaManager.Type("You weren't lying, ", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("there is ", 1, new DialogueData({
        audio: "default",
        delayAfter: 0.2
    }));
    await diaManager.Type("A LOT...", 0.5, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Told ya.", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(2.6);
    await diaManager.ClearText();
    await diaManager.Type("How did you even found this place?", 1, new DialogueData({
        portrait: "niko2",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("Well... ", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default",
        delayAfter: 1
    }));
    await diaManager.Type("I got lost in the forest...", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Bumped into this place by accident.", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("... ", 0.046, new DialogueData({
        portrait: "niko_what",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("What were you even doing in the forest to get lost?", 1.1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("I don't remember.", 1, new DialogueData({
        portrait: "magpie",
        audio: "default"
    }));
    await DialogueLoop.Delay(2.4);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(5);
    await diaManager.SetActive(true);
    await diaManager.Type("Be careful, ", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("there are glass shards in the floor.", 1, justAudio);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Okay.", 1, new DialogueData({
        portrait: "alula_oh",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("Almost forgot about those.", 1, new DialogueData({
        portrait: "magpie_oh",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1.5);
    await Walk(6, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("Now, ", 1, new DialogueData({
        portrait: "calamus",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("where are the non-expired moss juice?", 1, justAudio);
    await DialogueLoop.Delay(1);
    await Walk(2, 0.5, 3);
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("Are these it?", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("... ", 0.05, new DialogueData({
        portrait: "calamus",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.ClearText();
    await diaManager.Type("Nope, ", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("they're expired.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(3);
    await Walk(1, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("These are expired.", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await Walk(1.2, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("These are also expired.", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await Walk(0.5, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("Expired.", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await Walk(2, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("These bottles are empty.", 1, new DialogueData({
        portrait: "niko_what",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await Walk(1, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("Also expired.", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await Walk(1.6, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("Just air.", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(3);
    await Walk(2, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("How 'bout these?", 1, new DialogueData({
        portrait: "magpie_hm",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("... ", 0.05, new DialogueData({
        portrait: "calamus",
        audio: "default"
    }));
    await diaManager.Type("still no.", 1, justAudio);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Dang, ", 1, new DialogueData({
        portrait: "magpie_oh",
        audio: "default",
        delayAfter: 0.5
    }));
    await diaManager.Type("do they still even exist?", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("This might take a while.", 1, new DialogueData({
        portrait: "niko_eyeclosed2",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await Walk(1.5, 0.5, 3);
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("How about these?", 1, new DialogueData({
        portrait: "alula",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("... ", 0.04, new DialogueData({
        portrait: "calamus",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("This is it!", 1, new DialogueData({
        portrait: "calamus_shock",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Where'd you find them?", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1);
    await Walk(1.5, 1, 3);
    await DialogueLoop.Delay(0.5);
    await diaManager.ClearText();
    await diaManager.Type("Over here!", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1);
    await Walk(3, 0.5, 3);
    Walk(2.5, 0.5, 3);
    await diaManager.SetActive(true);
    await diaManager.Type("There's a lot...", 0.8, new DialogueData({
        portrait: "calamus_shock",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Their expiration date is somehow in 9 years.", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("How is that even possible?", 1, new DialogueData({
        portrait: "niko_83c",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.7);
    await diaManager.ClearText();
    await diaManager.Type("Well because moss... ", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default",
        delayAfter: 1
    }));
    await diaManager.Type("is... ", 1, new DialogueData({
        audio: "default",
        delayAfter: 1.5
    }));
    await diaManager.Type("moss.", 1, justAudio);
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Moss.", 1, new DialogueData({
        portrait: "niko_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Moss.", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(3);
    await Walk(2, 0.25, 3);
    await DialogueLoop.Delay(2);
    await Walk(1, 0.5, 3);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(true);
    await diaManager.Type("We should bring these to my wagon.", 1, new DialogueData({
        portrait: "magpie",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Yeah...", 1, new DialogueData({
        portrait: "calamus_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1);
    await Walk(10, 0.5, 3);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(true);
    await diaManager.Type("...", 0.03, new DialogueData({
        portrait: "niko_pancakes",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Woah...", 0.1, justAudio);
    await DialogueLoop.Delay(2.2);
    await diaManager.ClearText();
    await diaManager.Type("That's a lot of alcohol!", 1.1, justAudio);
    await DialogueLoop.Delay(3);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(1);
    await Walk(2.5, 1, 3);
    await DialogueLoop.Delay(0.5);
    await diaManager.SetActive(true);
    await diaManager.Type("Can we also bring these?", 1.2, new DialogueData({
        portrait: "niko_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Sure.", 1, new DialogueData({
        portrait: "magpie",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.1);
    await diaManager.ClearText();
    diaManager.soundInterval = 2;
    await diaManager.Type("B-", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default",
        delayAfter: 0.2
    }));
    diaManager.soundInterval = 4;
    await diaManager.Type("but that's alcohol.", 1, justAudio);
    await DialogueLoop.Delay(1.4);
    await diaManager.ClearText();
    await diaManager.Type("What are you using them for anyway?", 1, new DialogueData({
        portrait: "magpie_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type("Yeah, ", 1, new DialogueData({
        portrait: "alula_speak",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("what for?", 1, justAudio);
    await DialogueLoop.Delay(2.5);
    await diaManager.ClearText();
    await diaManager.Type("Well... ", 0.4, new DialogueData({
        portrait: "niko5",
        audio: "default",
        delayAfter: 1.5
    }));
    await diaManager.Type("Uhhhhhhhh.....", 0.3, new DialogueData({
        portrait: "niko6",
        audio: "default"
    }));
    await DialogueLoop.Delay(4);

    // I imagine this scene as the villagers
    // surrounding the flame together with Niko
    // talking how beautiful the flame is
    // and how they wish the sun is back again
    // 
    // NOT arson lmao
    await diaManager.ClearText();
    diaManager.Finish();
    await diaManager.Type("...", 1, new DialogueData({ portrait: "niko_smile" }));
    DialogueAudioSource.global.Play(diaManager.config.audios.Find("fire_light"));

    fireBgs.Play()
    
    const light = document.createElement("div");
    light.style.position = "absolute";
    light.style.background = "linear-gradient(to top, #37ffc3dd, #00ff00aa, #00ff0055, #00000000)";
    light.style.width = "100%";
    light.style.height = "100%";
    light.style.bottom = "0";
    light.style.transition = "0.2s transform, 1s opacity";

    let time = 0;
    let timeout = 0;
    let closedFlame = false;

    DialogueLoop.Append(() => {
        if (time < timeout)
        {
            time += DialogueLoop.deltaTime;

            return;
        }

        time = 0;
        timeout = (Math.random() * (0.35 - 0.1) + 0.1);

        const pos = Math.random() * 50;

        light.style.transform = `translateY(${pos}%)`;
    }, null, () => closedFlame);

    document.body.append(light);

    await DialogueLoop.Delay(5);
    await diaManager.ClearText();
    await diaManager.Type("So this is fire.", 1, new DialogueData({
        portrait: "magpie_oh",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Yeah.", 1, new DialogueData({
        portrait: "niko_smile",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("It's warm.", 1, new DialogueData({
        portrait: "alula",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.9);
    await diaManager.ClearText();
    await diaManager.Type("Try not to get too close.", 1, new DialogueData({
        portrait: "niko2",
        audio: "default"
    }));
    await DialogueLoop.Delay(2.5);
    await diaManager.ClearText();
    await diaManager.Type("Didn't know this much would be so beautiful.", 1, new DialogueData({
        portrait: "calamus_speak",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    await diaManager.Type("It feels like the sun is back already.", 1, new DialogueData({
        portrait: "calamus_smile2",
        audio: "default"
    }));
    await DialogueLoop.Delay(4);
    await diaManager.ClearText();
    await diaManager.Type("Niko.", 1, justAudio);
    await DialogueLoop.Delay(1.3);
    await diaManager.ClearText();
    await diaManager.Type("Yeah?", 1, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.6);
    await diaManager.ClearText();
    await diaManager.Type("Thank you.", 1, new DialogueData({
        portrait: "calamus_smile2",
        audio: "default"
    }));
    await DialogueLoop.Delay(1.5);
    await diaManager.ClearText();
    await diaManager.Type(".....?", 0.07, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("Thank you for being here, ", 1, new DialogueData({
        portrait: "calamus_smile2",
        audio: "default",
        delayAfter: 0.4
    }));
    await diaManager.Type("for bringing back the sun with you.", 1, justAudio);
    await DialogueLoop.Delay(1.8);
    await diaManager.ClearText();
    await diaManager.Type("We wish you great luck on your journey.", 1, justAudio);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    await diaManager.Type("...", 0.04, new DialogueData({
        portrait: "niko",
        audio: "default"
    }));
    await DialogueLoop.Delay(6);
    await diaManager.SetActive(false);
    await DialogueLoop.Delay(4);

    light.style.opacity = "0";

    DialogueLoop.Append(() => fireBgs.volume -= 0.6 * DialogueLoop.deltaTime, null, () => fireBgs.volume <= 0);

    await DialogueLoop.Delay(1);

    closedFlame = true;
    fireBgs.Stop();
}

