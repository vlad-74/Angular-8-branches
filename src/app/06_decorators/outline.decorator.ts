interface IOutline {
    px?: number;
    type?: string;
    color?: string;
}

type TOutline = IOutline | undefined;

export function Outline(config: TOutline): void {
    setTimeout(async () => {
        const el = await hhh.dom.elementGet('menu');

        if (!config.px) { config.px = 1; }
        if (!config.type) { config.type = 'solid'; }
        if (!config.color) { config.color = 'red'; }

        el['style'].outline = config.px + 'px ' + config.type + ' ' + config.color;

    }, 0);
}
