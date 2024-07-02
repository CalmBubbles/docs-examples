class Loader
{
    static onFail = () => { };

    static async LoadScript (src)
    {
        const script = document.createElement("script");
            
        script.src = `${src}.js`;
        script.type = "text/javascript";
        script.async = true;
            
        document.body.append(script);
            
        await new Promise(resolve => script.addEventListener("load", () => requestAnimationFrame(() => resolve())));
    }

    static async LoadStyle (src)
    {
        const style = document.createElement("link");

        style.rel = "stylesheet";
        style.href = `${src}.css`;
        style.type = "text/css";

        document.head.append(style);

        await new Promise(resolve => style.addEventListener("load", () => requestAnimationFrame(() => resolve())));
    }

    static async Set ()
    {
        const src = decodeURIComponent(new URLSearchParams(window.location.search).get("s"));
        const response = await fetch(`${src}.js`);

        if (response.status != 200)
        {
            diaManager.Once(DialogueEvent.Load, async () => {
                this.onFail();

                await diaManager.SetActive(true);
                diaManager.Type("Trouble while fetching data file.", 1);
            });

            return;
        }

        await this.LoadScript(src);

        const config = diaManager.config;
        let loaded = false;

        await new Promise(resolve => DialogueLoop.Append(() => {
            for (let i = 0; i < config.audios.items.length; i++) if (!config.audios.items[i].isLoaded) return;
            
            for (let i = 0; i < config.sprites.items.length; i++) if (!config.sprites.items[i].isLoaded) return;
            
            loaded = true;
            
            resolve();
        }, 0, () => loaded));

        Main();
    }
}