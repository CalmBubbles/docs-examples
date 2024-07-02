diaManager.config.audios.items.push(new DialogueAudioClip("default", "audio/text.ogg"));

// When using `DialogueAudioArray` objects
// you can just do this:
// 
// diaManager.config.audios = new DialogueAudioArray([
//     { name : "default", src : "audio/text.ogg" }
// ]);


async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("The sound used here is just me hitting the table.", 1, new DialogueData({
        // Use audio named "default"
        audio: "default"
    }));
}