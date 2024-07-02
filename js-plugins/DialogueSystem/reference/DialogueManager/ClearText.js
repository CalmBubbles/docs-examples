diaManager.config.sprites.items.push(new DialogueSprite("sus", "img/amogus.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("The only non themed portrait I have here is", 1);
    await diaManager.Type("...", 0.04);
    
    // Clear text
    await diaManager.ClearText();
    
    // Use portrait
    await diaManager.Type("This horrendous thing.", 1, new DialogueData({ portrait : "sus" }));
    await DialogueLoop.Delay(1.6);
    
    // This will not clear the portrait
    await diaManager.ClearText();
    
    await diaManager.Type("I didn't knew back then what else to make.", 1);
}